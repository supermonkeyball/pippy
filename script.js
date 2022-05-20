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
    document.getElementById("pippy").src = "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/55FCD628-4B8B-4D87-AEB9-5A8E46BCDE1E.gif?v=1653016028730"
  }

  meter.style.width = new_length + "px";
}

const the_depletion_of_hunger = setInterval(hungry, 2000);
window.onload = the_depletion_of_hunger;



let chicken = document.getElementById("chicken");

function eat() {
  console.log("clicked");

  var pippy = document.getElementById("pippy");
  var stomach = document.getElementById("hunger-meter");
  var bladder = document.getElementById("toilet-meter");
  var current_length = stomach.offsetWidth;
  var sideAffect_bladder = bladder.offsetWidth;
  var new_length = current_length + 12;

  if (new_length > 100) {
    new_length = 100;
  }
  
  setTimeout(function(){document.getElementById("pippy").src = "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/162C7935-0BA4-40CC-A51D-BF83BE2A0582.gif?v=1653015911736"}, 1200);
  document.getElementById("pippy").src = "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/CB92F614-5138-421B-B7ED-D9DA1771235D.gif?v=1653016002999";

  stomach.style.width = new_length + "px";
  bladder.style.width = 
}

chicken.addEventListener("click", eat);


// IF FEED = BLADDER DOWN
// IF PLAY = HUNGER DOWN
// IF WALK = ENERGY DOWN
// IF SLEEP = PLAY DOWN
// WHEN EAT = pippyHappy
// WHEN HUNGER/PLAY LOW = pippySad
