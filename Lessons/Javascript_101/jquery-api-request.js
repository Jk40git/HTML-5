$(document).ready(function(){
    $("#btnLoadFact").click (function(){
        ($.ajax({
        url:"https://catfact.ninja/fact",
        type: "GET",
        success: function(result){
            $("#result-box").html(result.fact);
        }
    }))})
})