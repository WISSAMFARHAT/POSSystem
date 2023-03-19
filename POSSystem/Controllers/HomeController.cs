using Microsoft.AspNetCore.Mvc;
using POSSystem.Data;
using POSSystem.Model;
using QRCoder;
using System.Diagnostics;
using System.Globalization;
using System.IO.Ports;

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
            CloudPage().SetDescription("Pos System for add Dollar and lebanon Price");

            Rate rate = _context.RateDollar.ToList().FirstOrDefault();

            if (rate != null)
                ViewData["rate"] = rate.Dollar;




            return View();
        }

        [Route("CashDraswer")]
        [HttpPost]
        public IActionResult CashDraswer()
        {
            try
            {
                // Create a new SerialPort object
                SerialPort serialPort = new();

                // Set the serial port settings
                serialPort.PortName = "COM1";
                serialPort.BaudRate = 9600;

                // Open the serial port
                serialPort.Open();

                // Send the open command to the cash drawer
                byte[] openCommand = new byte[] { 27, 112, 0, 25, 250 };
                serialPort.Write(openCommand, 0, openCommand.Length);


                // Close the serial port
                serialPort.Close();

                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
     

    }
}