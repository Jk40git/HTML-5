$(document).ready(function(){

    //$("#result-box").load("random.txt");
     $.ajax({
     	url: "https://catfact.ninja/fact", 
     	type: "GET",
      	success: function(result,status){
      	console.log(status);
      		$("#result-box").html(result.fact);
      		}
      });

});
