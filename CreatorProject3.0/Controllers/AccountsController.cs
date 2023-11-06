using CreatorProject3._0.Models.DataModel;
using CreatorProject3._0.Models.ServicesModel;
using CreatorProject3._0.Models.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CreatorProject3._0.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<UserModel> _userManager;
        private readonly SignInManager<UserModel> _signInManager;

        public AccountsController(UserManager<UserModel> userManager, SignInManager<UserModel> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<RegisterResponseViewModel> Register(RegisterRequestViewModel modelRequest)
        {
            RegisterResponseViewModel modelResponse = new RegisterResponseViewModel();
            if (!ModelState.IsValid)
            {
                modelResponse.IsSucces = false;
                modelResponse.Massage = "Ошибка валидации";
                return (modelResponse);
            }
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
            }
            else
            {
                await _signInManager.SignInAsync(user, false);
                modelResponse.IsSucces = true;
                modelResponse.Massage = "Регистрация прошла успешно";
                return (modelResponse);
            }
            return (modelResponse);
        }

        [HttpPost("login")]
        public async Task<LoginResponseViewModel> Login(LoginRequestViewModel modelRequest)
        {
            LoginResponseViewModel modelResponse = new LoginResponseViewModel();
            if (!ModelState.IsValid)
            {
                modelResponse.IsSucces = false;
                modelResponse.Massage = "Ошибка валидации";
                return (modelResponse);
            }
            var result = await _signInManager.PasswordSignInAsync(modelRequest.Name, modelRequest.Password, false, false);
            if (!result.Succeeded)
            {
                modelResponse.IsSucces = false;
                modelResponse.Massage = "Неправильный логин и (или) пароль";
            }
            else
            {
                if (string.IsNullOrEmpty(modelRequest.ReturnUrl) || !Url.IsLocalUrl(modelRequest.ReturnUrl))
                {
                    modelResponse.IsSucces = true;
                    modelResponse.Massage = "Успешный вход";
                    return (modelResponse);
                }
                else
                {
                    return (modelResponse);
                }
            }
            return (modelResponse);
        }
    }
}
