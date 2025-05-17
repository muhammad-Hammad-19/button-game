let red = document.getElementById("red");
let body = document.body;
let toggal = 1;
// console.log(red);
red.addEventListener("click", () => {
  if (toggal === 1) {
    body.style.backgroundColor = "green";
    red.style.backgroundColor = "green";
    toggal--;
    console.log(toggal);
  } else if (toggal === 0) {
    body.style.backgroundColor = "black";
    red.style.backgroundColor = "black";
    toggal++;
  }
});
let green = document.getElementById("green");
let togga2 = 1;
// console.log(green);
green.addEventListener("click", () => {
  if (togga2 === 1) {
    body.style.backgroundColor = "green";
    green.style.backgroundColor = "green";
    togga2--;
    console.log(togga2);
  } else if (togga2 === 0) {
    body.style.backgroundColor = "black";
    green.style.backgroundColor = "black";
    togga2++;
  }
});
let blue = document.getElementById("blue");
let togga5 = 1;
// console.log(red);
blue.addEventListener("click", () => {
  if (togga5 === 1) {
    body.style.backgroundColor = "blue";
    blue.style.backgroundColor = "blue";
    togga5--;
    console.log(togga5);
  } else if (togga5 === 0) {
    body.style.backgroundColor = "black";
    blue.style.backgroundColor = "black";
    togga5++;
  }
});
let black = document.getElementById("black");
let toggal3 = 1;
// console.log(black);
black.addEventListener("click", () => {
  if (toggal3 === 1) {
    body.style.backgroundColor = "blue";
    black.style.backgroundColor = "blue";
    toggal3--;
    console.log(toggal3);
  } else if (toggal3 === 0) {
    body.style.backgroundColor = "black";
    black.style.backgroundColor = "black";
    toggal3++;
  }
});
let yellow = document.getElementById("yellow");
let toggal4 = 1;
// console.log(red);
yellow.addEventListener("click", () => {
  if (toggal4 === 1) {
    body.style.backgroundColor = "green";
    yellow.style.backgroundColor = "green";
    toggal4--;
    console.log(toggal4);
  } else if (toggal4 === 0) {
    body.style.backgroundColor = "yellow";
    yellow.style.backgroundColor = "yellow";
    toggal4++;
  }
});
