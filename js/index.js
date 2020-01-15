// Your code goes here

// Variables

const body = document.querySelector("body");
const header = document.querySelector(".main-navigation");
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");
const h4 = document.querySelectorAll("h4");
const imgs = document.querySelectorAll("img");
const paragraph = document.querySelectorAll("p");

// Event Listeners

window.addEventListener("load", () => {
  alert("Congratulations! You Won! Claim your free vacation!");
});

body.addEventListener("keydown", function() {
  this.style.backgroundColor = "dodgerblue";
});

body.addEventListener("keyup", function() {
  this.style.backgroundColor = "orange";
});

navLinks.addEventListener("mouseover", event => {
  event.target.style.color = "orange";
});

navLinks.addEventListener("mouseleave", event => {
  event.target.style.color = "black";
});

const buttons = document.querySelectorAll(".btn");
const buttonEvents = Array.from(buttons);

buttonEvents.forEach(function(element) {
  element.addEventListener("click", event => {
    event.target.style.backgroundColor = "black";
  });
  element.addEventListener("click", event => {
    alert("You are signed up for your trip!");
  });
});

const navigationBar = document.querySelectorAll("nav a");
const navLinks = Array.from(navigationBar);

navLinks.forEach(function(element) {
  element.addEventListener("mouseover", event => {
    event.target.style.color = "orange";
    event.preventDefault();
    event.stopPropagation();
  });
  element.addEventListener("mouseout", event => {
    event.target.style.color = "black";
    event.preventDefault();
    event.stopPropagation();
  });
  element.addEventListener("click", event => {
    event.target.style.fontSize = "20px";
    event.preventDefault();
    event.stopPropagation();
  });
});
