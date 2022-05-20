var pippy = document.getElementById("pippy");
var death = document.getElementById("death");

let button = document.getElementById("button");

function save() {
  console.log("clicked");
  
  var content = document.getElementById("text").value;
  var intro = document.getElementById("intro");
  var name = document.getElementById("name");
  var name2 = document.getElementById("name2");
  
  localStorage.setItem("content", content);
  intro.style.display = 'none';
  name.innerHTML = content;
  name2.innerHTML = content;
}

button.addEventListener("click", save);

//stomach

function stomach() {
  var meter = document.getElementById("hunger-meter");
  var current_length = meter.offsetWidth;

  console.log(current_length);

  if (current_length == 0) {
    console.log("death");
    death.style.display = 'flex';
  }

  var new_length = current_length - 4;

  if (new_length < 0) {
    new_length = 0;
  }

  if (current_length < 30) {
    document.getElementById("pippy").src =
      "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/55FCD628-4B8B-4D87-AEB9-5A8E46BCDE1E.gif?v=1653016028730";
  }

  meter.style.width = new_length + "px";
}

const the_depletion_of_hunger = setInterval(stomach, 2000);
window.onload = the_depletion_of_hunger;

// bladder

function bladder() {
  var meter = document.getElementById("toilet-meter");
  var current_length = meter.offsetWidth;

  console.log(current_length);

  if (current_length == 0) {
    console.log("death");
    death.style.display = 'flex';
  }

  var new_length = current_length - 1;

  if (new_length < 0) {
    new_length = 0;
  }

  if (current_length < 30) {
    document.getElementById("pippy").src =
      "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/55FCD628-4B8B-4D87-AEB9-5A8E46BCDE1E.gif?v=1653016028730";
  }

  meter.style.width = new_length + "px";
}

const the_depletion_of_toilet = setInterval(bladder, 1200);
window.onload = the_depletion_of_toilet;

// feelings

function feelings() {
  var meter = document.getElementById("fun-meter");
  var current_length = meter.offsetWidth;

  console.log(current_length);

  if (current_length == 0) {
    console.log("death");
    death.style.display = 'flex';
  }

  var new_length = current_length - 2;

  if (new_length < 0) {
    new_length = 0;
  }

  if (current_length < 30) {
    document.getElementById("pippy").src =
      "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/55FCD628-4B8B-4D87-AEB9-5A8E46BCDE1E.gif?v=1653016028730";
  }

  meter.style.width = new_length + "px";
}

const the_depletion_of_fun = setInterval(feelings, 3400);
window.onload = the_depletion_of_fun;

// stamina

function stamina() {
  var meter = document.getElementById("energy-meter");
  var current_length = meter.offsetWidth;

  console.log(current_length);

  if (current_length == 0) {
    console.log("death");
    death.style.display = 'flex';
  }

  var new_length = current_length - 2;

  if (new_length < 0) {
    new_length = 0;
  }

  if (current_length < 30) {
    document.getElementById("pippy").src =
      "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/55FCD628-4B8B-4D87-AEB9-5A8E46BCDE1E.gif?v=1653016028730";
  }

  meter.style.width = new_length + "px";
}

const the_depletion_of_energy = setInterval(stamina, 3400);
window.onload = the_depletion_of_energy;



// eat chicken, regain hunger (lose bladder)

let chicken = document.getElementById("chicken");

function eat() {
  console.log("clicked");

  var stomach = document.getElementById("hunger-meter");
  var current_length = stomach.offsetWidth;
  var new_length = current_length + 12;

  var bladder = document.getElementById("toilet-meter");
  var bladder_before = bladder.offsetWidth;
  var bladder_after = bladder_before - 12;

  if (new_length > 100) {
    new_length = 100;
  }

  setTimeout(function () {
    document.getElementById("pippy").src =
      "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/162C7935-0BA4-40CC-A51D-BF83BE2A0582.gif?v=1653015911736";
  }, 1200);
  document.getElementById("pippy").src =
    "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/CB92F614-5138-421B-B7ED-D9DA1771235D.gif?v=1653016002999";

  stomach.style.width = new_length + "px";
  bladder.style.width = bladder_after + "px";
}

chicken.addEventListener("click", eat);

// go to bathroom, regain bladder (lose brain)

let hydrant = document.getElementById("hydrant");

function gopee() {
  console.log("clicked");

  var bladder = document.getElementById("toilet-meter");
  var current_length = bladder.offsetWidth;
  var new_length = current_length + 20;

  var feelings = document.getElementById("fun-meter");
  var feelings_before = feelings.offsetWidth;
  var feelings_after = feelings_before - 12;

  if (new_length > 100) {
    new_length = 100;
  }

  setTimeout(function () {
    document.getElementById("pippy").src =
      "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/162C7935-0BA4-40CC-A51D-BF83BE2A0582.gif?v=1653015911736";
  }, 1200);
  document.getElementById("pippy").src =
    "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/CB92F614-5138-421B-B7ED-D9DA1771235D.gif?v=1653016002999";

  bladder.style.width = new_length + "px";
  feelings.style.width = feelings_after + "px";
}

hydrant.addEventListener("click", gopee);

// play, regain feelings (lose stamina)

let ball = document.getElementById("ball");

function play() {
  console.log("clicked");

  var feelings = document.getElementById("fun-meter");
  var current_length = feelings.offsetWidth;
  var new_length = current_length + 12;

  var stamina = document.getElementById("energy-meter");
  var stamina_before = stamina.offsetWidth;
  var stamina_after = stamina_before - 12;

  if (new_length > 100) {
    new_length = 100;
  }

  setTimeout(function () {
    document.getElementById("pippy").src =
      "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/162C7935-0BA4-40CC-A51D-BF83BE2A0582.gif?v=1653015911736";
  }, 1200);
  document.getElementById("pippy").src =
    "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/CB92F614-5138-421B-B7ED-D9DA1771235D.gif?v=1653016002999";

  feelings.style.width = new_length + "px";
  stamina.style.width = stamina_after + "px";
}

ball.addEventListener("click", play);

// sleep, regain stamina (lose hunger)

let nyquil = document.getElementById("nyquil");

function sleep() {
  console.log("clicked");

  var stamina = document.getElementById("energy-meter");
  var current_length = stamina.offsetWidth;
  var new_length = current_length + 12;

  var hunger = document.getElementById("hunger-meter");
  var hunger_before = hunger.offsetWidth;
  var hunger_after = hunger_before - 12;

  if (new_length > 100) {
    new_length = 100;
  }

  setTimeout(function () {
    document.getElementById("pippy").src =
      "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/162C7935-0BA4-40CC-A51D-BF83BE2A0582.gif?v=1653015911736";
  }, 1200);
  document.getElementById("pippy").src =
    "https://cdn.glitch.global/f991fb0b-d232-4af4-8263-8db275e14328/CB92F614-5138-421B-B7ED-D9DA1771235D.gif?v=1653016002999";

  stamina.style.width = new_length + "px";
  hunger.style.width = hunger_after + "px";
}

nyquil.addEventListener("click", sleep);


// local storage for color
// button cooldown

