using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public  class TalepTakip
    {
        [Key]
        public int talepTakipID { get; set; }
        public int i_talepID { get; set; }
        public DateTime tarih { get; set; }
        public string talepDurumBilgi { get; set; }
    }
}
