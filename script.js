let container = document.getElementById("container");
let squares = 504;
let colors = [
  "#7400B8",
  "#6930C3",
  "#5E60CE",
  "#5390D9",
  "#4EA8DE",
  "#48BFE3",
  "#56CFE1",
  "#64DFDF",
  "#72EFDD",
  "#80FFDB",
];

for (let i = 0; i < squares; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.addEventListener("mouseover", function () {
    changeColor(square);
  });

  square.addEventListener("mouseout", function () {
    defaultColor(square);
  });
}

function changeColor(box) {
  let randomNumber = Math.floor(Math.random() * colors.length);
  let color = colors[randomNumber];
  box.style.background = color;
  box.style.boxShadow = `0px 0px 2px ${color} , 0px 0px 10px ${color}`;
}

function defaultColor(box) {
  box.style.background = "rgb(61, 59, 59)";
  box.style.boxShadow = "0 0 2px #000";
}
