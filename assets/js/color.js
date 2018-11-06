$(document).ready(function () {




    $(document).bind('mousemove', function(e){
        $('#tail').css({
            left: e.pageX + 5,
            top: e.pageY - 20
        });
    });


    // function resizeText(multiplier) {
    //     if (document.body.style.fontSize == "") {
    //         document.body.style.fontSize = "1.0em";
    //     }
    //     document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
    // }


});
function overel(color) {

    var x = document.getElementById("tail");
    x.style.color = color;
    // var y = document.getElementById("div2");
    // x.style.color = 'red';
    // y.style.color = 'black';
};