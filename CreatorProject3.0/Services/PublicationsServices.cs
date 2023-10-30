using CreatorProject.Data;
using CreatorProject.Models;
using CreatorProject.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CreatorProject.Services
{
    public class PublicationsServices : IPublicationsServices
    {
        private CreatorDbContext _dataContext;

        public PublicationsServices(CreatorDbContext dataContext)
        {
            _dataContext = dataContext;
        }

        public Task Create(PublicationModel model)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<PublicationModel> Get()
        {
            return _dataContext.Publications.ToArray();
        }

        public Task Get(int id)
        {
            throw new NotImplementedException();
        }

        public Task Update(PublicationModel model)
        {
            throw new NotImplementedException();
        }
    }
}
