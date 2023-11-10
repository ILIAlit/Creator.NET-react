using System.ComponentModel.DataAnnotations;

namespace CreatorProject3._0.Models.ViewModels.AccountViewModel
{
    public class LoginRequestViewModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
    }

    public class LoginResponseViewModel
    {
        public string? UserName { get; set; }

        public string? AccessToken { get; set; }

        public bool IsSucces { get; set; }

        public string? Massage { get; set; }
    }
}
