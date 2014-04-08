using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ZombieGuide.Models
{
    public class Zombie
    {
        public Int32 Id { get; set; }
        public String Name { get; set; }
        public String Notes { get; set; }
        public String ImageName { get; set; }
    }
}