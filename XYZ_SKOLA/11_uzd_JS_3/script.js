document.addEventListener("DOMContentLoaded", function(event) {

    var vards = form.vards.value;
    var uzvards = form.uzvards.value;
    var epasts = form.epasts.value;
    var vecums = form.vecums.value;
    var komentars = form.komentars.value;
    var piekritu = form.piekritu.value;

    document.getElementById('paradit').setAttribute('onchange','attirit();');



});

function attirit() {

    alert(tests);
}