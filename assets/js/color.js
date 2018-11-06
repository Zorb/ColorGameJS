$(document).ready(function () {




    $(document).bind('mousemove', function(e){
        $('#tail').css({
            left: e.pageX + 5,
            top: e.pageY - 20
        });
    });


    $(document).keydown(function(event){
        var fontSize = $('#tail').css('font-size');
        var newFontSize=fontSize;
    if(event.ctrlKey){
        //console.log("cwcwac");
        //var tmp = event.clientX;


         newFontSize= parseInt(fontSize)+5;



        // evt.clientX + "\n"
        // + "clientY value: " + evt.clientY + "\n"
        }else if(event.shiftKey){
         newFontSize= parseInt(fontSize)-5;

    }
        $('#tail').css('font-size', newFontSize+'px')
    })
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
};
