using System.ComponentModel.DataAnnotations;

namespace CreatorProject3._0.Models.ViewModels.AccountViewModel
{
    public class RegisterRequestViewModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}")]
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

