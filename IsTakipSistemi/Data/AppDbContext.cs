using Microsoft.EntityFrameworkCore;
using IsTakipSistemi.Data;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<KullaniciTuru> KullaniciTuruler { get; set; }
    public DbSet<Kullanici> Kullaniciler { get; set; }
    public DbSet<KullaniciAYRINTI> KullaniciAYRINTIler { get; set; }
    public DbSet<Birim> Birimler { get; set; }
    public DbSet<Personel> Personeller { get; set; }
    public DbSet<PersonelAYRINTI> PersonelAYRINTIler{ get; set; }
    public DbSet<IsOncelikBilgisi> IsOncelikBilgisiler { get; set; }
    public DbSet<IsTalebi> IsTalebiler { get; set; }
    public DbSet<IsTalebiAYRINTI> IsTalebiAYRINTI { get; set; }
    public DbSet<TalepTakip> TalepTakipler { get; set; }
    public DbSet<TalepTakipAYRINTI> TalepTakipAYRINTIler { get; set; }
    

}