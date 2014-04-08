using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ZombieGuide.Api
{
    public class ZombieImageController : ApiController
    {
        public IEnumerable<String> GetZombieImages()
        {
            var filePath = HttpContext.Current.Server.MapPath("~/content/zombies/");
            var dirInfo = new DirectoryInfo(filePath);

            return dirInfo.EnumerateFiles().Select(fi => fi.Name);
        }
    }
}
