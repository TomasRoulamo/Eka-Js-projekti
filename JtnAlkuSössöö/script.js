/*var etunimi = 'Tomas';
var sukunimi = 'Roulamo';
var ika = '17';
var postinro = '01450';
var puhelinnro = '0452033707';
var lahiosoite = 'Hirvitie 25 C A 2';
var tunnit = 10;
var minuutit = 52;
var sekunnit = 23
var minuuteiksi = tunnit * 60 + minuutit;
var sekunneiksi = tunnit * 60 + minuutit + sekunnit * 60;*/

//alert ('Minun nimeni on' + ' ' + etunimi + ' ' + sukunimi + ' ' + 'ja ikäni on' + ' ' + ika + '.');
//alert ('Minun osoitteeni on' + ' ' + lahiosoite + ' ' + postinro + '. ' + 'Ja minun puhelinnumero on' + ' ' + puhelinnro + '.')
//alert ('Tänään on kulunut ' + minuuteiksi + ' minuuttia.');
//alert ('Tänään on kulunut ' + sekunneiksi + 'sekunttia.');

/*function laskeminuutit();
{
    var tun= document.getElementById('tunnit').Value;
    var min= document.getElementById('minuutit').Value;
    var laske= tun *60 + min;
    tun = parseInt(tun);
    min = parseInt(min);
    document.write('Tähän mennessä tänään minuutteja on kulunut ' + laske + '.');
}

function vertaile()
{
    var luku1, luku2;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    if (luku1 > luku2) document.write (luku1 + " on suurempi kuin " + luku2);
    else if (luku2 > luku1) document.write (luku2 + " on suurempi kuin " + luku1);
} 

function laskeYhteen()
{
    var luku1, luku2;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    document.write("Lukujen summa on: " + (luku1 + luku2));
}

function kerro()
{
    var luku1, luku2;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    document.write("Lukujen kertoma on: " + (luku1 * luku2));  
}

function jaa()
{
    var luku1, luku2;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    document.write("Lukujen jako on: " + (luku1 / luku2));
}

function JarjestaLuvut()
{
    var luku1, luku2, luku3;
    luku1 = parseInt(document.getElementById('eka').value);
    luku2 = parseInt(document.getElementById('toka').value);
    luku3 = parseInt(document.getElementById('kolmas').value);
    

}

var i = 0;
var muuttuja;
do
{
    console.log(i + '\n');
    i++;
}while(i < 10);
*/
function Tili(tilinro, etunimi, sukunimi, saldo){
    this.tilinro = tilinro;
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.saldo = saldo;

    this.tiedot = NaytaTiedot;
}

var Erkki = new Tili('390201-532', 'Erkki', 'Perhonen', '654');
var Pirkko = new Tili('42323-643', 'Pirkko', 'Perhonen', '312');

function NaytaTeidot(){
    var tilinro = this.tilinro;
    var etunimi = this.etunimi;
    var sukunimi = this.sukunimi;
    var ika = this.saldo;

    document.write('Henkilön tilinumero on ' + tilinro + ' ja nimi on ' + etunimi + ' ' + sukunimi + ' ja hänen saldo on ' + ika + ' e.');
}
Erkki.tiedot();  "Henkilön tilinumero on 390201-532 ja nimi on Erkki Perhonen ja hänen saldo on 654 e.";
Pirkko.tiedot(); "Henkilön tilinumero on 42323-643 ja nimi on Pirkko Perhonen ja hänen saldo on 312 e.";

function talleta(summa){
var saldo = this.saldo;
var summa = summa;
saldo += summa;
document.write("Uusi saldo on: " + saldo);
}

function otaRahaa(summa){
    var saldo = this.saldo;
    var summa = this.summa;
    
    if (summa <= saldo){
    saldo -= summa;
    }

    else {
        document.write ("Sinulla ei ole riittävästi rahaa tilillä");
    }
    document.write("Uusi saldo on: " + saldo);
    
}