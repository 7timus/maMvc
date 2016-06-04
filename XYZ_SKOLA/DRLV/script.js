document.addEventListener("DOMContentLoaded", function(event) {
    var varianti = [];
    var i;
    var temp = {};
    var old;

    varianti = document.getElementsByClassName('variants');
    console.log('IET');
    console.log(varianti.length);

// SALIEKU VISIEM  variantiem funkciju
   
    
    for (i = 0; i != varianti.length; i++) {
      console.log(typeof(varianti[i]));
        varianti[i].addEventListener("click", function(){mark(this)});
    }

    function mark (obj) {
        temp.className = old;
        old = obj.className;
        temp = obj;
            alert("temp added");
             obj.innerHTML = "Clicked";

    }

});

