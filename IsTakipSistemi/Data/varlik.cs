using Microsoft.EntityFrameworkCore;
using System;
namespace IsTakipSistemi.Data
{
    public class varlik : DbContext
    {
        public varlik()
        {
        }
        /// <summary>
        /// Tekrar genel veri tabanına uyarlandı.
        /// </summary>
        /// <param name="optionsBuilder"></param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
          
            string tum = String.Format("Data Source=DESKTOP-TQ4QKBP\\SQLEXPRESS;Database=IsTakip; Max Pool Size=10000;Trusted_Connection=True;TrustServerCertificate=True; ");
            optionsBuilder.UseSqlServer(tum);
        }
        public varlik(DbContextOptions<varlik> options) : base(options)
        {
            var nedir = options;
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                string ad = entity.Name.Substring(0, entity.Name.Length);
                int yer = ad.LastIndexOf(".");
                if (yer != -1)
                    ad = ad.Substring(yer);
                ad = ad.Replace(".", "").Trim();
                modelBuilder.Entity(entity.Name).ToTable(ad);
            }
        }
        #region ogeler
        public DbSet<KullaniciTuru> KullaniciTuruler { get; set; }
        public DbSet<Kullanici> Kullaniciler { get; set; }
        public DbSet<KullaniciAYRINTI> KullaniciAYRINTIler { get; set; }
        public DbSet<Birim> Birimler { get; set; }
        public DbSet<Personel> Personeller { get; set; }
        public DbSet<PersonelAYRINTI> PersonelAYRINTIler { get; set; }
        public DbSet<IsOncelikBilgisi> IsOncelikBilgisiler { get; set; }
        public DbSet<IsTalebi> IsTalebiler { get; set; }
        public DbSet<IsTalebiAYRINTI> IsTalebiAYRINTI { get; set; }
        public DbSet<TalepTakip> TalepTakipler { get; set; }
        public DbSet<TalepTakipAYRINTI> TalepTakipAYRINTIler { get; set; }

        #endregion
    }
}

