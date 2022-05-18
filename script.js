function hungry() {
  var meter = document.getElementById("hunger-meter");
  var current_length = meter.offsetWidth;

  console.log(current_length);

  if (current_length == 0) {
    console.log("death");
    clearInterval(the_depletion_of_hunger);
  }

  var new_length = current_length - 4;

  if (new_length < 0) {
    new_length = 0;
  }

  meter.style.width = new_length + "px";
}

const the_depletion_of_hunger = setInterval(hungry, 2000);
window.onload = the_depletion_of_hunger;



function eat() {
  var chicken = document.getElementById("chicken")
  
  console.log("Clicked");
  
  
  
}

button.addEventListener("click", eat);