using CreatorProject3._0.Models.DataModel;
using CreatorProject3._0.Models.ViewModels.AccountViewModel;
using CreatorProject3._0.Services.Interfaces;
using CreatorProject3._0.Services.Options;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace CreatorProject3._0.Services
{
    public class AccountsServices : IAccountServices
    {
        private readonly UserManager<UserModel> _userManager;
        private readonly SignInManager<UserModel> _signInManager;

        public AccountsServices(UserManager<UserModel> userManager, SignInManager<UserModel> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }


        public async Task<LoginResponseViewModel> Login(LoginRequestViewModel modelRequest)
        {
            LoginResponseViewModel modelResponse = new LoginResponseViewModel();
            //var result = await _signInManager.PasswordSignInAsync(modelRequest.Name, modelRequest.Password, false, false);
            var managedUser = await _userManager.FindByNameAsync(modelRequest.Name);
            if (managedUser == null)
            {
                modelResponse.IsSucces = false;
                modelResponse.Massage = "Пользователь не найден";
                return modelResponse;
            }

            var isPasswordValid = await _userManager.CheckPasswordAsync(managedUser, modelRequest.Password);
            if (!isPasswordValid)
            {
                modelResponse.IsSucces = false;
                modelResponse.Massage = "Неправильный логин и (или) пароль";
                return modelResponse;
            }
            else
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, modelRequest.Name)
                };
                var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    claims: claims,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(2)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

                modelResponse.UserName = modelRequest.Name;
                modelResponse.AccessToken = encodedJwt;
                modelResponse.IsSucces = true;
                modelResponse.Massage = "Успешный вход";

                return modelResponse;
            }
        }

        public async Task<RegisterResponseViewModel> Register(RegisterRequestViewModel modelRequest)
        {
            RegisterResponseViewModel modelResponse = new RegisterResponseViewModel();
            UserModel user = new UserModel
            {
                UserName = modelRequest.Name,
                Email = modelRequest.Email,
            };
            var result = await _userManager.CreateAsync(user, modelRequest.Password);
            if (!result.Succeeded)
            {
                modelResponse.IsSucces = false;
                modelResponse.Massage = "Ошибка";
                return (modelResponse);
            }
            else
            {
                await _signInManager.SignInAsync(user, false);
                modelResponse.IsSucces = true;
                modelResponse.Massage = "Регистрация прошла успешно";
                return (modelResponse);
            }
        }
    }
}
