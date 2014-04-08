using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ZombieGuide.Controllers
{
    public class ZombieController : Controller
    {
        // GET: Zombie
        public ActionResult List()
        {
            return PartialView();
        }

        public ActionResult Detail()
        {
            return PartialView();
        }
    }
}