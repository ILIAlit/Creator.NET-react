using System.ComponentModel.DataAnnotations;

namespace CreatorProject3._0.Models.ViewModels
{
    public class LoginRequestViewModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
/*
        public bool RememberMe { get; set; }*/

        public string ReturnUrl { get; set; }
        
    }

    public class LoginResponseViewModel
    {
        public bool IsSucces { get; set; }

        public string? Massage { get; set; }
    }
}
