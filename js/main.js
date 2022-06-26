$(document).ready(function() { 
    $( "#search-cat" ).submit(function( event ) {
        $("#not-found").hide();
        var code = $("#search").val();
        if(code == "90023300057121"){
            window.location.href = "/lorin";
        }else if(code == "900233000571820"){
            window.location.href = "/concon";
        }else{
            $("#cat-code").text(code);
            $("#not-found").show();
        }
        event.preventDefault();
    });
    
    $( ".btn-search" ).click(function() {
        $( "#search-cat" ).submit();
    });
});