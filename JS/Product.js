//Get access to DOM and store amounts
const sizeButtons = document.getElementsByClassName("SelectRadio");
var ButtonsList = [...sizeButtons];
console.log(ButtonsList)
//Make Array from Nodelist
ButtonsList.forEach((button) => {
    button.addEventListener("click", function(){
        clearActivebtn();
        button.classList.add("active");
        console.log(button)
        console.log(sizeButtons)
    });
});

//Delete the Active style function
function clearActivebtn(){
    ButtonsList.forEach((button) => button.classList.remove("active"));
}

//Set Default
ButtonsList[0].classList.add("active");


//Apply same setting for color selector
//Get access to DOM and store amounts
const colorButtons = document.getElementsByClassName("SelectColor");
var ColorList = [...colorButtons];
console.log(ColorList)
//Make Array from Nodelist
ColorList.forEach((color) => {
    color.addEventListener("click", function(){
        clearActiveCl();
        color.classList.add("ActiveColor");

    });
});

//Delete the Active style function
function clearActiveCl(){
    ColorList.forEach((color) => color.classList.remove("ActiveColor"));
}
//Default

ColorList[0].classList.add("ActiveColor");

