using CreatorProject3._0.Models.DataModel;
using CreatorProject3._0.Models.ViewModels.ProfileViewModel;
using Microsoft.AspNetCore.Mvc;

namespace CreatorProject3._0.Services.Interfaces
{
    public interface IProfileServices
    {
        Task<GetResponseViewModel> Get(string userName);

        Task<UserProfileModel> Create([FromForm] CreateViewModelRequest modelRequest);
    }
}
