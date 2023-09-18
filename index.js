// Variables
let colors = [
  "#5ebec4",
  "#f92c85",
  "#fb8122",
  "#9daaf2",
  "#BCFD4C",
  "mediumseagreen",
  "mediumvioletred",
  "red",
];
let $Header = document.querySelector(".header");
function Header() {
  let Random = Math.floor(Math.random() * colors.length);
  // console.log(colors[Random]);
  colors[Random];
  $Header.style.background = colors[Random];
}
// setInterval(() => {
//   Header();
// }, 5000);

// Stopwatch Functions
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let toDisplay = document.getElementById("InputClock");

// stopWatch function
const stopWatch = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  if (hours == 24) {
    hours = 0;
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  toDisplay.innerHTML = h + ":" + m + ":" + s;
};

// WatchStart
const WatchStart = () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
};

// watchStop
const WatchStop = () => {
  clearInterval(timer);
};

//reset
const Reset = () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  toDisplay.innerHTML = "00:00:00";
};
