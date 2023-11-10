﻿using Microsoft.AspNetCore.Identity;

namespace CreatorProject3._0.Models.DataModel
{
    public class UserModel : IdentityUser
    {
        public UserProfileModel? Profile { get; set; }
    }
}
