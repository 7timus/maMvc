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

///

<!DOCTYPE html>
<html lang="en">
<head>
    <script src="XYZ_SKOLA/DRLV/script.js"></script>
    <link rel="stylesheet" href="XYZ_SKOLA/DRLV/style.css">
    <meta charset="UTF-8">
    <title> Draugiem</title>
</head>
<body>


<div class="container">
    <div class="header">
        <div class="logo">
            Lofbergs:
        </div>
    </div>
    <div class="jautajums">
        jautajums  jautajumsjautajumsjautajumsjautajumsjautajumsjautajums </br> jautajums

    </div>
    <div class="atbildes">
        <a href="#" class="variants A">A. Gaiss</a>
        <a href="#" class="variants B">B. Gaiss</a>
        <a href="#" class="variants C">C. Gaiss</a>
        <a href="#" class="variants D iezimets">D. Gaiss</a>
        <a href="#" class="variants E">E. Gaiss</a>
        <a href="#" class="variants F">F. Gaiss</a>
        <a href="#" class="variants G">G. Gaiss</a>
        <a href="#" class="variants H">H. Gaiss</a>
    </div>
    <a href="#" class="variants" id="nakamais" type="toggled">Nakamais jautajums</a>
    <span class="count"> X/X jautâjumiem</span>
<div class="footer"></div>
</div>




</body>
</html>


///

* {
    margin:0;
    padding:0;
    font-family:Arial,sans-serif;
}
a{
    text-decoration: none;
    outline: none;
}
body {
    margin:auto;
    width: 1200px;
    height:800px;
    background:gray;
}

a.variants {
    display: inline-block;
    width: 300px;
    padding: 15px 1px;
    margin: 8px;
    font-size: 14px;
    text-align: center;
    background-color: #3a3a3a;
    color: #fff;
    font-weight: bold;


}
a.variants:hover{
    background-color:#85b140;
}
.container {
    margin:auto;
    background:#e7e7dd;
    width: 800px;
    float: left;
    padding: 10px;
    overflow: hidden;
    text-align:center;
}
.count{
    margin-top:30px;
    display:block;

}
.header {
    float:left;
    clear:both;
    width:100%;
    background:blue;
}
.jautajums {
    color:#4b166e;
    font-weight: 800;
    font-size: 14px;
    text-align: center;
    margin:20px;

}
.atbildes {
    background:red;

}
.footer {
    clear:both;
    width:100%;
    height:1px;
    background:blue;
}
#nakamais{
    background-color:#4b166e;
    color:#f6b80d;
}
#nakamais:hover{
    background-color:#85b140;
}
a.variants.iezimets {
    background-color:#85b140;
}

