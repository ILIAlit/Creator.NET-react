using CreatorProject.Services.Interfaces;
using CreatorProject3._0.Models.DataModel;
using CreatorProject3._0.Models.ViewModels.AccountViewModel;
using CreatorProject3._0.Services.Interfaces;
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
        private readonly IAccountServices _accountServices;

        public AccountsController(UserManager<UserModel> userManager, SignInManager<UserModel> signInManager, IAccountServices accountServices)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _accountServices = accountServices;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestViewModel modelRequest)
        {
            if (!ModelState.IsValid)
            {
                RegisterResponseViewModel modelResponse = new RegisterResponseViewModel();
                modelResponse.IsSucces = false;
                modelResponse.Massage = "Ошибка валидации";
                return BadRequest(modelResponse);
            }
            var response = await _accountServices.Register(modelRequest);
            if (!response.IsSucces)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequestViewModel modelRequest)
        {
            if (!ModelState.IsValid)
            {
                LoginResponseViewModel modelResponse = new LoginResponseViewModel();
                modelResponse.IsSucces = false;
                modelResponse.Massage = "Ошибка валидации";
                return BadRequest(modelResponse);
            }
            return Ok(await _accountServices.Login(modelRequest));
        }
    }
}
