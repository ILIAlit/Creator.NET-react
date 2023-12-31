﻿using Microsoft.EntityFrameworkCore;
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
        public DbSet<UserProfileModel> UserProfiles { get; set; }
        /*public DbSet<UserHistoryModel> User_Histories { get; set; }
        public DbSet<UserSavedModel> User_Saveds { get; set; }
        public DbSet<TagModel> Tags { get; set; }
        public DbSet<PictureModel> Pictures { get; set; }
        public DbSet<LikeModel> Likes { get; set; }
        public DbSet<CommentModel> Comments { get; set; }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<PublicationModel>().HasData(
                    new PublicationModel { Id = 1, Publication_name = "Тест", Publication_version = 2}
            );
            modelBuilder
                .Entity<UserModel>()
                .HasOne(user => user.Profile)
                .WithOne(profile => profile.User)
                .HasForeignKey<UserProfileModel>(profile => profile.UserId);
        }
    }
}
