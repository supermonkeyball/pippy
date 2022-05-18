function hungry() {
  let x = HUNGER-METER WIDTH
  document.getElementById("hunger-meter").width = ${x - 0.5}vh;
}

setInterval(hungry, 500);
