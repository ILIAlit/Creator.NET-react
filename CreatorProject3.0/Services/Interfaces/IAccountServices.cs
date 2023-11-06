using CreatorProject3._0.Models.ServicesModel;
using CreatorProject3._0.Models.ViewModels;

namespace CreatorProject3._0.Services.Interfaces
{
    public interface IAccountServices 
    {
        Task Register(RegisterRequestViewModel modelRequest);

        Task Login(LoginRequestViewModel modelRequest);
    }
}
