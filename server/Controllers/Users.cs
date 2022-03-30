using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.DataAccessLayer;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private UserDal  db = new UserDal();
        // GET: api/<Users>
        [HttpGet]
        public IEnumerable<Users> Get()
        {
            return db.GetUsers();
        }

        // GET api/<Users>/5
        [HttpGet("{id}")]
        public Users Get(int id)
        {
            return db.GetUser(id);
        }

        // POST api/<Users>
        [HttpPost]
        public IActionResult Post([FromBody] Users data)
        {
            db.CreateUser(data);
            return Ok(data);
        }

        // PUT api/<Users>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Users>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
