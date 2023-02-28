using System;
using System.Collections.Generic;

namespace POSSystem.Data;

public partial class Product
{
    public string QrCode { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Price { get; set; } = null!;

    public bool Lbcheck { get; set; }
}
