// $(document).ready(function () {
// const topNav= $("#top-nav");
// console.log(topNav);
// $("#btn-greeting").click(()=> {
//     alert('I am greeting you');
// })
// $("#loginForm").submit(function(e){
// e.preventDefault();
// // console.log(e.target);
// console.log(this.children);
// const userInput= new FormData(this)
// console.log(userInput)

// })
// })

$(document).ready(function () {


    const btnUpload = $("#btn-upload");
    const uploadInput = $("[name=upload-input]");

    btnUpload.click(function () {
        uploadInput.click();

        uploadInput.change(function () {
            console.log(uploadInput);
            console.log(uploadInput[0].files[0].name);
            const fileName = uploadInput[0].files[0];

            const imageUrl =  URL.createObjectURL(fileName)

            $('#image-container').css('background-image',`url(${imageUrl})`)




            console.log(imageUrl);
        })





    })



});
