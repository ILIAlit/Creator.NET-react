using CreatorProject3._0.Models.ViewModels.ProfileViewModel;
using CreatorProject3._0.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CreatorProject3._0.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProfilesController : ControllerBase
    {
        private readonly IProfileServices _profileServices;

        public ProfilesController(IProfileServices profileServices)
        {
            _profileServices = profileServices;
        }

        [HttpGet("{userName}")]
        public async Task<IActionResult> GetProfile(string userName)
        {
            return Ok(await _profileServices.Get(userName));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProfile([FromForm] CreateViewModelRequest modelRequest)
        {
            return Ok(await _profileServices.Create(modelRequest));
        }
    }
}
