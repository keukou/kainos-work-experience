function checkAvailability() {
var holoView = 0
  
  if(holoView > 0) {
      alert("Item in Stock")
  } else if (holoView == 0) {
      alert("Out of Stock");
  } else {
      alert("something has gone wrong");
  }
  }



var Email = []

function SubmitEmail(){
      var emails = {
    email:email};
      
  email = document.getElementById("email").value;
  console.log(email)
 
  Email.push(emails)
  }
  
  

var acc = document.getElementsByClassName("accordion");
var i;
 
function doAccordian(){ 
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
}