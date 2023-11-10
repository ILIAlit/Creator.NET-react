using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CreatorProject3._0.Models.DataModel
{
    public class UserProfileModel
    {
        [Key]
        [ForeignKey("UserModel")]
        public int Id { get; set; }

        public string? Cover { get; set; }

        public string? Email { get; set; }

        public string? Instagram { get; set; }

        public string? Telegram { get; set; }
    }
}
