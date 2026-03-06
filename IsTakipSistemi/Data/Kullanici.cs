using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public class Kullanici
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
    }
}
