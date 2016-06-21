document.addEventListener("DOMContentLoaded", function(event) {
    var varianti = [];
    var i;
    var temp = {};
     var old = "";

    varianti = document.getElementsByClassName('variants');
    console.log('IET');
    console.log(varianti.length);

// SALIEKU VISIEM  variantiem funkciju
    for (i = 0; i != varianti.length; i++) {
        varianti[i].addEventListener("click", function(){mark(this);});
    }
    document.getElementById("nakamais").addEventListener("click", function(){nextQuestion();});


// Iezime clickoto elementu
    function mark (obj) {
        temp.className = old;
        old = obj.className;
        temp = obj;
        obj.className += " iezimets";
    }
// nakama jautajuma pogas funckija
    function nextQuestion() {
        if(old != "") {
            console.log(old);
            alert("Iezimets " + temp.innerHTML );
        } else {
            alert('Iezime kadu');
        }


    }
});

