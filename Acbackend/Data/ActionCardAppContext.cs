using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
