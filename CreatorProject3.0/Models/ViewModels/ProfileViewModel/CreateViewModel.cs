using System.ComponentModel.DataAnnotations;

namespace CreatorProject3._0.Models.ViewModels.ProfileViewModel
{
    public class CreateViewModelRequest
    {
        public IFormFile? Cover { get; set; }

        [Required]
        public string UserName { get; set; }

        public string? InstagramUrl { get; set; }

        public string? TelegramUrl { get; set; }
    }
}
