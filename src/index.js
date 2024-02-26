import _ from "lodash";
import Icon from "./icon.png";
import "./style.css";

// import your function
import myName from "./myName";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

function component2() {
  const element = document.createElement("div");

  // use your function!
  element.textContent = myName("Cody");
  return element;
}

document.body.appendChild(component2());
