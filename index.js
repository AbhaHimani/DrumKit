for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener(
    "click",
    function () {
      /* dont use parenthesis here */
      //Finds the first button, adds eventlistener to the button
      var buttonInnerHTML = this.innerHTML;
      switch (buttonInnerHTML) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "k":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
        case "l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
      }
    },
    //this is the identity of the button that triggered the action

    //Java Script objects
    /*
  If we were to create a housekeeper onjects
  var housekeeper1{
    
  }
 */

    document.addEventListener("keypress", function (event) {
      console.log(event);
    })
  );
}
