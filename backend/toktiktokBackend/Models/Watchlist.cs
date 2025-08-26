using System.ComponentModel.DataAnnotations;

namespace toktiktokBackend.Models
{
    public class Watchlist
    {
        public int Id { get; set; }
        
        public int UserId { get; set; }
        public User User { get; set; } = null!;
        
        public int MovieId { get; set; }
        public Movie Movie { get; set; } = null!;
        
        public bool IsWatched { get; set; } = false;
        
        public DateTime? WatchedAt { get; set; }
        
        public DateTime AddedAt { get; set; } = DateTime.UtcNow;
        
        public int WatchProgress { get; set; } = 0; // Progress in seconds
    }
}
