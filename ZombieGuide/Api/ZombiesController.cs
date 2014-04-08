using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ZombieGuide.Models;

namespace ZombieGuide.Api
{
    public class ZombiesController : ApiController
    {
        private ZombieGuideContext db = new ZombieGuideContext();

        // GET: api/Zombies
        public IQueryable<Zombie> GetZombies()
        {
            return db.Zombies;
        }

        // GET: api/Zombies/5
        [ResponseType(typeof(Zombie))]
        public async Task<IHttpActionResult> GetZombie(int id)
        {
            Zombie zombie = await db.Zombies.FindAsync(id);
            if (zombie == null)
            {
                return NotFound();
            }

            return Ok(zombie);
        }

        // PUT: api/Zombies/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutZombie(int id, Zombie zombie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != zombie.Id)
            {
                return BadRequest();
            }

            db.Entry(zombie).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZombieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Zombies
        [ResponseType(typeof(Zombie))]
        public async Task<IHttpActionResult> PostZombie(Zombie zombie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Zombies.Add(zombie);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = zombie.Id }, zombie);
        }

        // DELETE: api/Zombies/5
        [ResponseType(typeof(Zombie))]
        public async Task<IHttpActionResult> DeleteZombie(int id)
        {
            Zombie zombie = await db.Zombies.FindAsync(id);
            if (zombie == null)
            {
                return NotFound();
            }

            db.Zombies.Remove(zombie);
            await db.SaveChangesAsync();

            return Ok(zombie);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ZombieExists(int id)
        {
            return db.Zombies.Count(e => e.Id == id) > 0;
        }
    }
}