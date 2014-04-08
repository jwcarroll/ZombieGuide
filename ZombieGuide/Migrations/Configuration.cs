namespace ZombieGuide.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using ZombieGuide.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<ZombieGuide.Models.ZombieGuideContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "ZombieGuide.Models.ZombieGuideContext";
        }

        protected override void Seed(ZombieGuide.Models.ZombieGuideContext context)
        {
            context.Zombies.AddOrUpdate(
                z => new
                {
                    z.Name,
                    z.Notes,
                    z.ImageName
                },
                new Zombie { Name = "Walker", Notes = "Slow moving reanimated corpse. Head shot required.", ImageName = "walker.jpg" },
                new Zombie { Name = "28 Days Later", Notes = "Fast infected human. Very contagious!", ImageName = "28-days-later.jpg" }
                );
        }
    }
}
