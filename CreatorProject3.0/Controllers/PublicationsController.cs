using CreatorProject.Models;
using CreatorProject.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CreatorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicationsController : ControllerBase
    {
        private IPublicationsServices _publicationsServices;

        public PublicationsController(IPublicationsServices publicationsServices)
        {
            _publicationsServices = publicationsServices;
        }

        [HttpGet]
        public IEnumerable<PublicationModel> GetAll()
        {
            return _publicationsServices.Get();
        }
    }
}
