using IsTakipSistemi.Data;
using System.Collections.Generic;
using System.Linq;

namespace IsTakipSistemi.Models
{
    public class IsTalepModel
    {
        public IsTalebi kartVerisi { get; set; }
        public List<IsTalebiAYRINTI> dokumVerisi { get; set; }
      
   
        public  void veriCek()
        { Data.varlik vari = new varlik();
            kartVerisi = new IsTalebi();
            dokumVerisi = vari.IsTalebiAYRINTI.Where(q=>q.varmi==1).ToList();
        }
        public  void veriCek(int kimlik)
        { Data.varlik vari = new varlik();
            kartVerisi = vari.IsTalebiler.FirstOrDefault (q => q.talepID == kimlik);
            dokumVerisi = new List<IsTalebiAYRINTI>();
        }
    }
}
