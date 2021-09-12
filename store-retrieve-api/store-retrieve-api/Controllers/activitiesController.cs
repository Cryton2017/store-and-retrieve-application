using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using store_retrieve_api.Models;

namespace store_retrieve_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class activitiesController : ControllerBase
    {
        private readonly activitiesContext _context;

        public activitiesController(activitiesContext context)
        {
            _context = context;
        }

        // GET: api/activities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<activities>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        // GET: api/activities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<activities>> Getactivities(long id)
        {
            var activities = await _context.Activities.FindAsync(id);

            if (activities == null)
            {
                return NotFound();
            }

            return activities;
        }

        // PUT: api/activities/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putactivities(long id, activities activities)
        {
            if (id != activities.Id)
            {
                return BadRequest();
            }

            _context.Entry(activities).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!activitiesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/activities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<activities>> Postactivities(activities activities)
        {
            _context.Activities.Add(activities);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Getactivities), new { id = activities.Id }, activities);

        }

        // DELETE: api/activities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteactivities(long id)
        {
            var activities = await _context.Activities.FindAsync(id);
            if (activities == null)
            {
                return NotFound();
            }

            _context.Activities.Remove(activities);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool activitiesExists(long id)
        {
            return _context.Activities.Any(e => e.Id == id);
        }
    }
}
