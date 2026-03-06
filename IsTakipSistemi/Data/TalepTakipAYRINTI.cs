using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public partial class TalepTakipAYRINTI
    {
        [Key]
        public int talepTakipID { get; set; }
        public int i_talepID { get; set; }
        public DateTime tarih { get; set; }
        public string talepDurumBilgi { get; set; }
        public DateTime talepTarihi { get; set; }
        public DateTime? guncellemeTarihi { get; set; }
        public string talepAyrinti { get; set; }
        public int i_personelID { get; set; }
        public string adi { get; set; }
        public string soyadi { get; set; }
        public int talepTamamlandimi { get; set; }

    }
}
