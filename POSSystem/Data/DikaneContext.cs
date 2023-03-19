using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace POSSystem.Data;

public partial class DikaneContext : DbContext
{
  
    public DikaneContext()
    {
    }

    public DikaneContext(DbContextOptions<DikaneContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Product> Data { get; set; }
    public virtual DbSet<Rate> RateDollar { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySql("server=localhost;port=3306;database=Dikane;uid=root", Microsoft.EntityFrameworkCore.ServerVersion.AutoDetect("server=localhost;port=3306;database=Dikane;uid=root"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.QrCode).HasName("PRIMARY");

            entity.ToTable("data");

            entity.HasIndex(e => e.Lbcheck, "LBCheck");

            entity.Property(e => e.QrCode).HasMaxLength(100);
            entity.Property(e => e.Lbcheck).HasColumnName("LBCheck");
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Price).HasMaxLength(100);
        });

        modelBuilder.Entity<Rate>(entity =>
        {
            entity.HasKey(e => e.ID).HasName("PRIMARY");

            entity.ToTable("rate");

            entity.Property(e => e.ID).HasMaxLength(100);
            entity.Property(e => e.Dollar).HasMaxLength(100);
  
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
