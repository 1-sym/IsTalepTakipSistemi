using System.ComponentModel.DataAnnotations;

namespace IsTakipSistemi.Data
{
    public  class Personel
    {
        [Key]
        public int personelID { get; set; }
        public string adi { get; set; }
        public string soyadi { get; set; }
        public string TcNo { get; set; }
        public string telefon { get; set; }
        public byte calisiyormu { get; set; }
        public int i_birimID { get; set; }
        public DateTime girisTarihi { get; set; }
        public DateTime? ayrilisTarihi { get; set; }

    }
}
