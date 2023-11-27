$(document).ready(function(){

    $("#show-mobile-nav").click(function () {

        const listItems = $(".list-items")

        console.log(listItems.css('display'));

        if(listItems.css('display') == "block"){
            $(".list-items").css("display","none");
            this.textContent = 'show'
        }else{

            $(".list-items").css("display","block");
            
            this.textContent  = 'hide';
        }
        
    });


});