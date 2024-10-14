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
//Add Event Listener to Array
