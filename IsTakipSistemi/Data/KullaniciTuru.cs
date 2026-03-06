using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public  class KullaniciTuru
    {
        [Key]
        public int kullaniciTuruID { get; set; } 
            public string kullaniciTuru { get; set; }
            
        
    }
}
