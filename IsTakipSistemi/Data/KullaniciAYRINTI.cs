using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public  class KullaniciAYRINTI
    {
        [Key]
        public int kullaniciID { get; set; }
        public string adi { get; set; }
        public string soyadi { get; set; }
        public string TcNo { get; set; }
        public string telefon { get; set; }
        public string sifre { get; set; }
        public int i_kullaniciTuruID { get; set; }
        public byte kullaniciAktifmi { get; set; }
        public string kullaniciTuru { get; set; }
    }
}
