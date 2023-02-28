using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using POSSystem.Data;


namespace POSSystem.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        private readonly DikaneContext _context;

        public ApiController(DikaneContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add([FromBody] Product product)
        {
            try
            {
                Product item = await _context.Data.FindAsync(product.QrCode);

                if (item != null)
                {
                    item.Price = product.Price;
                    item.Lbcheck = product.Lbcheck;
                    item.Name = product.Name;
                    _context.Data.Update(item);
                    await _context.SaveChangesAsync();

                    return Content("Done");
                }

                await _context.Data.AddAsync(product);
                await _context.SaveChangesAsync();

                return Content("Done");

            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }

        }

        [HttpPost]
        [Route("ChangeRate")]
        public async Task<IActionResult> ChangeRate([FromBody] Rate rate)
        {
            try
            {
                List<Rate> items = await _context.RateDollar.ToListAsync();

                if (items.Count() != 0)
                {
                    Rate item = items.FirstOrDefault()!;

                    if (item != null)
                    {
                        item.Dollar = rate.Dollar;

                        _context.RateDollar.Update(item);

                        await _context.SaveChangesAsync();
                    }

                    return Content("Done");
                }

                rate.ID = Guid.NewGuid().ToString();

                await _context.RateDollar.AddAsync(rate);
                await _context.SaveChangesAsync();

                return Content("Done");

            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        [HttpPost]
        [Route("fetch")]
        public async Task<IActionResult> Fetch([FromBody] string QrCode)
        {
            try
            {
                Product item = await _context.Data.FindAsync(QrCode);

                if (item == null)
                    return Json("Done");

                return Json(item);

            }
            catch (Exception ex)
            {
                return Json(ex.Message);
            }
        }

    }
}