using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public class IsOncelikBilgisi
    {
        [Key]
        public byte oncelikID { get; set; }
        public string detay { get; set; }
       
    }
}
