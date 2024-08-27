using Amex_Test.Server.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Amex_Test.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RestaurantsController : ControllerBase
    {
        // GET: api/<RestaurantsController>
        [HttpGet]
        public IEnumerable<Restaurant> Get()
        {
            return FetchRestaurants();
        }

        // POST api/<RestaurantsController>
        [HttpPost("InsertRestaurant")]
        public IEnumerable<Restaurant> Post([FromBody] Restaurant restaurant)
        {
            var list = FetchRestaurants();
            list.Add(restaurant);
            SaveRestaurants(list);
            return list;
        }

      
      

        private List<Restaurant> FetchRestaurants()
        {
            try
            {
                if (System.IO.File.Exists("restaurants.json"))
                {
                    var file = System.IO.File.ReadAllText("restaurants.json");
                    var list = JsonSerializer.Deserialize<List<Restaurant>>(file);
                    return list?? new List<Restaurant>();
                }
                return new List<Restaurant>();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        private void SaveRestaurants(List<Restaurant> list)
        {
            try
            {
                var json = JsonSerializer.Serialize(list);
                System.IO.File.WriteAllText("restaurants.json", json);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
