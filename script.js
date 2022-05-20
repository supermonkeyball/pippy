//stomach

function stomach() {
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
    clearInterval(the_depletion_of_toilet);
    hydrant.removeEventListener("click", gopee);
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

const the_depletion_of_toilet = setInterval(bladder, 1500);
window.onload = the_depletion_of_toilet;

// feelings

function feelings() {
  var meter = document.getElementById("fun-meter");
  var current_length = meter.offsetWidth;

  console.log(current_length);

  if (current_length == 0) {
    console.log("death");
    clearInterval(the_depletion_of_fun);
    ball.removeEventListener("click", play);
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

const the_depletion_of_fun = setInterval(feelings, 4400);
window.onload = the_depletion_of_fun;

// eat chicken, regain hunger (lose bladder)

let chicken = document.getElementById("chicken");

function eat() {
  console.log("clicked");

  var pippy = document.getElementById("pippy");
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

  var pippy = document.getElementById("pippy");
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

// play, regain feelings (lose sta,mina)

let ball = document.getElementById("ball");

function play() {
  console.log("clicked");

  var pippy = document.getElementById("pippy");
  var bladder = document.getElementById("fun-meter");
  var current_length = feelings.offsetWidth;
  var new_length = current_length + 20;

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

  bladder.style.width = new_length + "px";
  feelings.style.width = feelings_after + "px";
}

hydrant.addEventListener("click", gopee);




// IF PLAY = HUNGER DOWN
// IF SLEEP = PLAY DOWN
// WHEN HUNGER/PLAY LOW = pippySad
