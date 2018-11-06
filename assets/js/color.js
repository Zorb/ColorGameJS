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
function switcheroo() {
    setTimeout(function(){
    var x = document.getElementById("tail").innerText;
    var y = $('#switch').val();
    document.getElementById("tail").innerText = y;
        document.getElementById("switch").value = x;
    }, 1000);
};

function overel(color) {

    var x = document.getElementById("tail");
    x.style.color = color;
    // var y = document.getElementById("div2");
    // x.style.color = 'red';
    // y.style.color = 'black';
};