function Annakortit(){
    var kasi = [''];
    var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
    var nrot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    laskuri = 0;

    for(var K = 0; K < maat.length; K++) {

        for(var L = 0; L < nrot.length; L++){

            if(K == maat.length-1 && L == nrot.length-1){
                kasi[laskuri] = maat[K] + nrot[L];
            }

            else{
                kasi[laskuri] = maat[K]+nrot[L];
                laskuri++;
            }
        }
    }
    console.log(kasi);
    var kortit = [''];
    for(var m = 0; m < 5; m++){

        temp = Math.floor(Math.random()*52);
        kortit[m] = kasi[temp];
    }
    document.getElementById('kasi').innerHTML = kortit;
}
