var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked!");
    });
}

// Below is a more advanced way of doing the above with forEach and arrow functions.
// let buttons = document.querySelectorAll("button");

// let clickEvent = () => {
//     alert("I got clicked!");
// }

// buttons.forEach((item) => item.addEventListener("click", clickEvent));