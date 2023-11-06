﻿using System.ComponentModel.DataAnnotations;

namespace CreatorProject3._0.Models.ServicesModel
{
    public class RegisterRequestViewModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string ConfirmPassword { get; set; }
    }

    public class RegisterResponseViewModel
    {
        public bool IsSucces { get; set; }

        public string? Massage { get; set; }
    }
}

