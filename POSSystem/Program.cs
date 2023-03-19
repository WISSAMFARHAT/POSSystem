using System.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using POSSystem.Data;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using AngryMonkey.CloudWeb;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

CloudWebConfig cloudWeb = new()
{
    PageDefaults = new()
    {
        Title = "POSSytem",
        Bundles = new()
         {
         new(){ Source = "css/site.css"},
         new(){ Source = "js/site.js"},
         },
        Features = new()
        {
            CloudPageFeatures.JQuery
        }
    },
    TitleSuffix = " - POSSytem",
};

builder.Services.AddCloudWeb(cloudWeb);

string connection = builder.Configuration.GetValue<string>("MySqlConnection")!;

// Add services to the container.

builder.Services.AddControllersWithViews();

using var context = new DikaneContext();

// Create the database if it doesn't already exist
context.Database.EnsureCreated();

builder.Services.AddDbContext<DikaneContext>(options =>
{
    options.UseMySql(connectionString: connection, serverVersion: ServerVersion.AutoDetect(connection));

});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

await app.RunAsync();
