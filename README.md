# egyeni_feladat

Ez egy teljesen HTML alapú Javascriptes weboldal lesz.

Itthoni járművek karbantartási naplójának a követését hivatott megjelníteni.

Adatbázi nélkül lesz megvalósítva JSON file tipusba lesz mentve minden adat jelszavakat és érzékény adatokat nem fog tartalmazni az oldal így a titkosítást el lehet hanyagolni.

RideLog – Motoros és kerékpáros szerviznapló

Indítás: nyisd meg az index.html fájlt egy böngészőben.
Technológiák: HTML, CSS, vanilla JavaScript. Nem kell szerver vagy telepítés.

Az adatok a böngésző localStorage tárhelyén maradnak.
A „JSON letöltése” gombbal lementheted a teljes állományt.
A „JSON betöltése” gombbal visszaállíthatod a korábban mentett adatokat.
A data.json egy üres mintaállomány, amit a böngésző nem ír felül automatikusan.

A következő szerviz számítása egyszerű becslés: a legmagasabb rögzített
szerviz-kilométerállás + megadott szervizintervallum.
