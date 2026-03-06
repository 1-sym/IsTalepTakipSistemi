using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public class IsTalebiAYRINTI
    {
        [Key]
        public int talepID { get; set; }
        public DateTime talepTarihi { get; set; }
        public DateTime? guncellemeTarihi { get; set; }
        public string talepAyrinti { get; set; }
        public byte talepTamamlandimi { get; set; }

        public int i_personelID { get; set; }
        public string adi { get; set; }
        public string soyadi { get; set; }
        public int i_birimID { get; set; }
        public int i_talepEdenKullaniciID { get; set; }
        
        public string detay { get; set; }
        public byte i_oncelikID { get; set; }
        public byte varmi { get; set; }
    }
}
