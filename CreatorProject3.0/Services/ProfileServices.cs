using CreatorProject.Data;
using CreatorProject3._0.Models.DataModel;
using CreatorProject3._0.Models.ViewModels.ProfileViewModel;
using CreatorProject3._0.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.EntityFrameworkCore;

namespace CreatorProject3._0.Services
{
    public class ProfileServices : IProfileServices
    {
        private CreatorDbContext _dataContext;

        public ProfileServices(CreatorDbContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<UserProfileModel> Create([FromForm] CreateViewModelRequest modelRequest)
        {
            string? userCoverUrl = null;
            string? userInstagramUrl = modelRequest.InstagramUrl;
            string? userTelegramUrl = modelRequest.TelegramUrl;

            if (modelRequest.Cover != null)
            {
                userCoverUrl = await UploadCloudinaryFile(modelRequest.Cover);
            };

            string userName = modelRequest.UserName;
            var user = _dataContext.Users.FirstOrDefault(user => user.UserName == userName);

            UserProfileModel userProfile = new UserProfileModel
            {
                Cover = userCoverUrl,
                Instagram = userInstagramUrl,
                Telegram = userTelegramUrl,
                User = user,
            };

            _dataContext.UserProfiles.AddRange(userProfile);
            _dataContext.SaveChanges();

            return userProfile;
        }

        public async Task<GetResponseViewModel> Get(string userName)
        {
            UserProfileModel? userProfile = await _dataContext.UserProfiles.FirstOrDefaultAsync(profile => profile.User.UserName == userName);
            GetResponseViewModel modelResponse = new GetResponseViewModel();
            var user = _dataContext.Users.FirstOrDefault(user => user.UserName == userName);
            if (userProfile == null)
            {
                modelResponse.isProfilee = false;
                modelResponse.UserProfile = user.Profile;
                return modelResponse;
            }

            modelResponse.isProfilee = true;
            modelResponse.UserProfile = user.Profile;
            return modelResponse;
        }

        private async Task<string> UploadCloudinaryFile(IFormFile file)
        {
            var cloudinary = new Cloudinary(new Account(
                "dzy7opgqz",
                "447426866782192",
                "p2g4WICI4-R7SaUugDA7ZMTeat4"));
            var uploadResult = new ImageUploadResult();

            if(file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.FileName, stream),
                    };
                    uploadResult = await cloudinary.UploadAsync(uploadParams);
                }
            }

            return uploadResult.Uri.ToString();
        }
    }
}
