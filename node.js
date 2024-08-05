let test = document.getElementById("money");
let display = document.getElementById("Broke?");
let button1 = document.getElementById("check")

button1.onclick = function () {
  console.log(test.value)
  if (test.value >= 2.70) {
    display.innerHTML = "You can buy a metro card"

  }
  else {

    display.innerHTML = "You can't buy a metro card"
  }
};
