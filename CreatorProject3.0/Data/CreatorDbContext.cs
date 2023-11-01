using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using CreatorProject3._0.Models.DataModel;

namespace CreatorProject.Data
{
    public class CreatorDbContext : IdentityDbContext<UserModel>
    {
        public CreatorDbContext(DbContextOptions<CreatorDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<PublicationModel> Publications { get; set; } = null!;
        public DbSet<UserModel> Users { get; set; }
        /*   public DbSet<User_historyModel> User_Histories { get; set; }
           public DbSet<User_profileModel> User_Profiles { get; set; }
           public DbSet<User_savedModel> User_Saveds { get; set; }
           public DbSet<TagModel> Tags { get; set; }
           public DbSet<PictureModel> Pictures { get; set; }
           public DbSet<LiveModel> Lives { get; set; }
           public DbSet<LikeModel> Likes { get; set; }
           public DbSet<CommentModel> Comments { get; set; }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<PublicationModel>().HasData(
                    new PublicationModel { Id = 1, Publication_name = "Тест", Publication_version = 2}
            );
        }
    }
}
