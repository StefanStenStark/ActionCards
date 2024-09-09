using Microsoft.EntityFrameworkCore;

    public class ActionCardAppContext : DbContext
    {
        public ActionCardAppContext (DbContextOptions<ActionCardAppContext> options)
            : base(options)
        {
        }

        public DbSet<ActionCard> ActionCard { get; set; } = default!;
        public DbSet<User> Users { get; set; } 
    }
