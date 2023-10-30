using CreatorProject.Models;

namespace CreatorProject.Services.Interfaces
{
    public interface IPublicationsServices
    {
        Task Create(PublicationModel model);

        Task Update(PublicationModel model);

        Task Get(int id);

         IEnumerable<PublicationModel> Get();

        void Delete(int id);
    }
}
