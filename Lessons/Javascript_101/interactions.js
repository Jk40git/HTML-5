// const showAlert = (e) => {

//     const element = e.target;

//     const pageWrapper = document.getElementById("wrapper");

    // for (const childElement of pageWrapper.children) {
    //     childElement.style.color = "black";
    //     childElement.style.textDecoration = "none";
       
    // }
    const showAlert = (e) => {
        const clickedElement = e.target;
        // console.log(e.target.innerText)
        
        // Check if there is a previously clicked element
          if (showAlert.prevElement) {
            showAlert.prevElement.innerText = showAlert.prevText;
            showAlert.prevElement.style.color= "black";
          }
        // Save the current text and element as the previously clicked ones
          showAlert.prevText = clickedElement.innerText;
          showAlert.prevElement = clickedElement;
        
        
        clickedElement.innerText="Confirmed";
        clickedElement.style.color="#0f0";
        }
        // alert("Hello")
        // console.log(showAlert)
        // }

    // element.style.color = "red";
    // element.style.textDecoration = "underline";
    // element.innerText="Confirmed"
    // element.style.color="#0f0"





    // if(element.style.color === "red"){
    //     element.style.color = "black";
    // }else{
    //     element.style.color = "red";
    // }

    // element.style.color = "red";
    // element.style.textDecoration = "underline";
    // alert("Hello")


document.addEventListener("DOMContentLoaded", () => {

    // document.getElementById(); look for id attribute
    // document.getElementsByClassName(); look for class attribute
    // document.getElementsByName(); look for name attribute
    // document.getElementsByTagName(); look the html tag name

    // return HTML collection
    // const entireBody = document.getElementsByTagName("body"); 

    // const allHTags = document.getElementsByTagName("h1");

    const pageWrapper = document.getElementById("wrapper");

    // console.log(entireBody);
    // console.log(allHTags);
    // console.log(pageWrapper.children);



    for (const childElement of pageWrapper.children) {
        childElement.addEventListener("click", showAlert);
    }



});