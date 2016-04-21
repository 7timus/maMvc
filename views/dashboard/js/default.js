$(function() {

$.get('dashboard/xhrGetListings',function(o) {
    console.log('PUSSEJ');
    console.log(o[0].text);


    [   {"id":"1","text":"w"},
        {"id":"11","text":"w"},
        {"id":"21","text":"k"},
         {"id":"31","text":"k"}
    ]


   // $('$listInserts');
}, 'json');



$('#randomInsert').submit(function(){
     var url = $(this).attr('action')
    var data = $(this).serialize();


    $.post(url,data,function(o) {
        alert('SUBMITED')
    })
});



});



