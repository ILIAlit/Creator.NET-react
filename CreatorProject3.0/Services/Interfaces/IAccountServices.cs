using CreatorProject3._0.Models.ViewModels.AccountViewModel;

namespace CreatorProject3._0.Services.Interfaces
{
    public interface IAccountServices 
    {
        Task<RegisterResponseViewModel> Register(RegisterRequestViewModel modelRequest);

        Task<LoginResponseViewModel> Login(LoginRequestViewModel modelRequest);
    }
}
