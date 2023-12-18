using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CreatorProject3._0.Models.DataModel
{
    public class UserProfileModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string UserId { get; set; }
        
        public UserModel User { get; set; }

        public string? Cover { get; set; }

        public string? Instagram { get; set; }

        public string? Telegram { get; set; }
    }
}
