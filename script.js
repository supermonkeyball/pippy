function hungry() {
  var meter = document.getElementById("hunger-meter");
  var current_length = meter.offsetWidth;

  console.log(current_length);

  if (current_length == 0) {
    console.log("death");
    clearInterval(the_depletion_of_hunger);
    chicken.removeEventListener("click", eat);
  }

  var new_length = current_length - 4;

  if (new_length < 0) {
    new_length = 0;
  }
  
  if (current_length < 30) {
  }

  meter.style.width = new_length + "px";
}

const the_depletion_of_hunger = setInterval(hungry, 2000);
window.onload = the_depletion_of_hunger;

let chicken = document.getElementById("chicken");

function eat() {
  console.log("clicked");

  var pippy = document.getElementById("pippy");
  var pippyHappy = "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/trim.0E08199C-AAEA-4D2A-B8EE-5B093ED9848D.MOV?v=1653010433703";

  var meter = document.getElementById("hunger-meter");
  var current_length = meter.offsetWidth;
  var new_length = current_length + 12;

  if (new_length > 100) {
    new_length = 100;
  }

  meter.style.width = new_length + "px";
  document.getElementById("pippy").src = pippyHappy;
}

chicken.addEventListener("click", eat);

function mood() {

}

// IF FEED = BLADDER DOWN
// IF PLAY = HUNGER DOWN
// WHEN EAT = pippyHappy
// WHEN HUNGER/PLAY LOW = pippySad
