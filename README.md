# IsTalepTakipSistemi
Bir kurum içinde kullanılacak basit bir iş talep ve takip sistemi tasarımı

İş Takip Sistemi Veritabanı Projesi (IsTakip)
Bu proje, bir kurum içerisindeki iş taleplerinin oluşturulması, personellere atanması ve bu taleplerin süreç içindeki takibini yönetmek amacıyla 
tasarlanmış bir SQL veritabanı şemasıdır.

Veritabanı Mimarisi
Sistem, ilişkisel bir veritabanı yapısı üzerine kuruludur ve veriye erişimi kolaylaştırmak adına özelleştirilmiş View yapıları içerir.

Temel Tablolar
KullaniciTuru & Kullanici: Sistemi kullanan kişilerin yetkilerini (Yönetici, Operatör vb.) ve giriş bilgilerini tutar.

Birim & Personel: Kurum içindeki departmanları ve bu departmanlarda çalışan, işi asıl yürütecek personelleri tanımlar.

IsOncelikBilgisi: Taleplerin aciliyet durumunu (Düşük, Orta, Yüksek, Acil) belirlemek için kullanılır.

IsTalebi: Sistemin merkezidir; talebi kimin açtığını, hangi personele atandığını ve işin detaylarını barındırır.

TalepTakip: Bir iş talebi üzerinde yapılan ara işlemleri ve durum güncellemelerini tarih bazlı kaydeder.


KullaniciTuru, Birim, IsOncelikBilgisi (Bağımsız tablolar)

