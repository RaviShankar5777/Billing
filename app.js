function navSlide() {
  const nav = document.querySelector(".navbar");
  const links = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    links.classList.toggle("nav-active");
  });
}

navSlide();

// calculator

const Name1 = document.getElementById("name1");
const Name2 = document.getElementById("name2");

const Phone1 = document.getElementById("phn");
const Phone2 = document.getElementById("phn2");

const payment = document.getElementsByClassName("payment");

Name1.addEventListener("keyup", () => {
  Name2.value = Name1.value;
});

Phone1.addEventListener("keyup", () => {
  Phone2.value = Phone1.value;
});

let corn = document.getElementById("corn").value;
let chilli = document.getElementById("chilli").value;
let prawns = document.getElementById("prawns").value;
let fish = document.getElementById("fish").value;
let chicken = document.getElementById("Cb").value;
let mutton = document.getElementById("mb").value;
let panner = document.getElementById("pb").value;
let mockTail = document.getElementById("mt").value;
let cooler = document.getElementById("mc").value;
let iceCream = document.getElementById("ice").value;


let tip = document.getElementById("tip").value;
let button = document.getElementById("btn");

function sample(event, value1) {
  console.log(event);
  let x = document.getElementById(value1);
  menuObject[value1] = parseInt(x.value);
  console.log(menuObject.value, event.key);
}




let menuObject = {};

button.addEventListener("click", () => {
  let sum = 0;

  for (const item in menuObject) {
    sum = sum + menuObject[item];
  }
  console.log(sum);
  let Gst = document.getElementById("gst").value;
  let Gst_val = (sum* parseInt(Gst)/100);

  let total = document.getElementById("total");
  total.value = sum + Gst_val;
});
