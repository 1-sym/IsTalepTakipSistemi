using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public class Birim
    {
        [Key]
        public int birimID { get; set; }
            public string birimAdi { get; set; }
           
        
    }
}
