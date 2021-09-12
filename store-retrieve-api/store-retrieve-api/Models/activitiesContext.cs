using Microsoft.EntityFrameworkCore;

namespace store_retrieve_api.Models
{
    public class activitiesContext : DbContext
    {
        public activitiesContext(DbContextOptions<activitiesContext> options)
            : base(options)
        {
        }

        public DbSet<activities> Activities { get; set; }
    }
}
