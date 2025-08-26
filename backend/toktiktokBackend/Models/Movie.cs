using System.ComponentModel.DataAnnotations;

namespace toktiktokBackend.Models
{
    public class Movie
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Title { get; set; } = string.Empty;
        
        [StringLength(1000)]
        public string Description { get; set; } = string.Empty;
        
        public int ReleaseYear { get; set; }
        
        [StringLength(100)]
        public string Genre { get; set; } = string.Empty;
        
        public int DurationMinutes { get; set; }
        
        [StringLength(500)]
        public string ImageUrl { get; set; } = string.Empty;
        
        [StringLength(500)]
        public string TrailerUrl { get; set; } = string.Empty;
        
        public double Rating { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
