// Code for Making Responsive Nav Bar

function myFunction() {
    var x = document.querySelectorAll(".nav-hide");
    x.forEach(function(element) {
      element.classList.toggle("responsive");
      console.log("The class was added")
    });
    console.log("The button was clicked");
  }
  