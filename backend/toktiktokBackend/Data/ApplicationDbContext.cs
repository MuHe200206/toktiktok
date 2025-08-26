using Microsoft.EntityFrameworkCore;
using toktiktokBackend.Models;

namespace toktiktokBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Watchlist> Watchlists { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure relationships
            modelBuilder.Entity<Watchlist>()
                .HasOne(w => w.User)
                .WithMany()
                .HasForeignKey(w => w.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Watchlist>()
                .HasOne(w => w.Movie)
                .WithMany()
                .HasForeignKey(w => w.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            // Seed some sample data
            modelBuilder.Entity<Movie>().HasData(
                new Movie
                {
                    Id = 1,
                    Title = "The Shawshank Redemption",
                    Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    ReleaseYear = 1994,
                    Genre = "Drama",
                    DurationMinutes = 142,
                    ImageUrl = "https://example.com/shawshank.jpg",
                    TrailerUrl = "https://example.com/shawshank-trailer.mp4",
                    Rating = 9.3,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new Movie
                {
                    Id = 2,
                    Title = "The Godfather",
                    Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                    ReleaseYear = 1972,
                    Genre = "Crime",
                    DurationMinutes = 175,
                    ImageUrl = "https://example.com/godfather.jpg",
                    TrailerUrl = "https://example.com/godfather-trailer.mp4",
                    Rating = 9.2,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new Movie
                {
                    Id = 3,
                    Title = "Pulp Fiction",
                    Description = "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                    ReleaseYear = 1994,
                    Genre = "Crime",
                    DurationMinutes = 154,
                    ImageUrl = "https://example.com/pulp-fiction.jpg",
                    TrailerUrl = "https://example.com/pulp-fiction-trailer.mp4",
                    Rating = 8.9,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            );
        }
    }
}
