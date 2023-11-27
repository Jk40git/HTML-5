
    $(document).ready(function () {

        const toggleNavbar = $('#toggleNavbar');
        const navbar = $('#navbar');
    
        toggleNavbar.click(function () {
            navbar.toggle(100, function () {
                const isNavbarHidden = $(this).css('display') === 'none';
                if (isNavbarHidden) {
                    toggleNavbar.text('Show');
                } else {
                    toggleNavbar.text('Hide');
                }
            });
        });
    
        
        if ($(window).width() >= 768) {
            navbar.show();
              } else {
                    toggleNavbar.text('Hide');
                }
            });
       
        if ($(window).width() >= 768) {
            navbar.show();
            toggleNavbar.hide();
        } else {
            navbar.hide();
            toggleNavbar.show();
        }
    
       
        $(window).on('resize', function () {
            if ($(window).width() >= 768) {
                navbar.show();
                toggleNavbar.hide();
            } else {
                navbar.hide();
                toggleNavbar.show();}
             });
    
    // console.log(navbar.css('display'));

//     navbar.toggle(100, function () {
//         toggleNavbar.text(
//             this.style.display === 'block' ? 'show': 'hide'
//         )
//     })
//     toggleNavbar.click(function () {
//         if (navbar.css('display') == "block") {
//             $("#navbar").css("display", "none");
//         } else {

//             $("#navbar").css("display", "block");

//         }
//     });
   
// });

// const toggleButton = document.getElementById("toggleButton");
// const item = document.getElementById("item");

// toggleButton.addEventListener("click", function () {
//     if (item.style.display === "none") {
//         item.style.display = "block"; // Show the item
//     } else {
//         item.style.display = "none"; // Hide the item
//     }
// });




