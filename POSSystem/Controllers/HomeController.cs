using Microsoft.AspNetCore.Mvc;
using POSSystem.Data;
using System.Diagnostics;
using System.Globalization;

namespace POSSystem.Controllers
{
    [Route("")]
    public class HomeController : BaseController
    {

        private readonly DikaneContext _context;

        public HomeController(DikaneContext context)
        {
            _context = context;
        }

        [Route("")]       
        public IActionResult Index()
        {
            CorePage(string.Empty).SetDescription("Pos System for add Dollar and lebanon Price");

            Rate rate= _context.RateDollar.ToList().FirstOrDefault();

            if (rate != null)
                ViewData["rate"]=rate.Dollar;


            return View();
        }

    }
}