

document.addEventListener("DOMContentLoaded", function(event) {
var pirmais = document.getElementById('pirmais');
var otrais = document.getElementById('otrais');
var rezultats = document.getElementById('rezultats');
var izteiksme = document.getElementById('izteiksme');
document.getElementById('plus').setAttribute('onclick','saskaitit();');
document.getElementById('minus').setAttribute('onclick','atnemt();');
document.getElementById('reiz').setAttribute('onclick','reizinat();');
document.getElementById('dalit').setAttribute('onclick','dalit();');
document.getElementById('rekinat').setAttribute('onclick','rekinat();');
document.getElementById('attirit').setAttribute('onclick','attirit();');
document.getElementById('tabula').setAttribute('onclick','reizrekinaTabula();');
});



function saskaitit() {
    izteiksme.value=otrais.value +' + '+pirmais.value;
    console.log(otrais.value);
    console.log(pirmais.value);
}
function atnemt() {
    izteiksme.value=otrais.value +' - '+pirmais.value;
    console.log(otrais.value);
    console.log(pirmais.value);
}
function reizinat() {
    izteiksme.value=otrais.value +' * '+pirmais.value;
    console.log(otrais.value);
    console.log(pirmais.value);
}
function dalit() {
    izteiksme.value=otrais.value +' / '+pirmais.value;
    console.log(otrais.value);
    console.log(pirmais.value);
}
function attirit() {
    pirmais.value = ' ';
    otrais.value = ' ';
    izteiksme.value = ' ';
    rezultats.value = ' ';
    document.getElementById('tukss').value=' ';

}

function rekinat() {
   var sum = eval(izteiksme.value);
    console.log(sum);
    rezultats.value = parseFloat(sum);

}
function reizrekinaTabula() {
    console.log('START');
    var vieta = document.getElementById('reizrekins');

    // OTRS VARIANTS
     for(var i=1;i<=10;i++) {
         vieta.inneHTML+='SHITAS STRADA';
         var divs = document.createElement('div');
         var att = document.createAttribute('class');
         att.value = 'kaste';
         vieta.appendChild(divs);
         divs.setAttributeNode(att);
     for(var a = 1; a<=10;a++){
         var content = document.createTextNode(i+ ' * ' +a+' = '+i*a+' ');
         divs.appendChild(content);
         divs.appendChild(document.createElement('br'));
         }
     }


}