let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;

let timer = null;

function updateDisplay() {

  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let milli = ms < 10 ? "0" + ms : ms;

  document.getElementById("display").innerText =
    `${h}:${m}:${s}:${milli}`;
}

function stopwatch() {

  ms++;

  if (ms == 100) {
    ms = 0;
    sec++;
  }

  if (sec == 60) {
    sec = 0;
    min++;
  }

  if (min == 60) {
    min = 0;
    hr++;
  }

  updateDisplay();
}

function start() {

  if (timer !== null) {
    return;
  }

  timer = setInterval(stopwatch, 10);
}

function pause() {

  clearInterval(timer);
  timer = null;
}

function reset() {

  clearInterval(timer);
  timer = null;

  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;

  updateDisplay();

  document.getElementById("laps").innerHTML = "";
}

function lap() {

  if (timer === null) {
    return;
  }

  let lapTime = document.getElementById("display").innerText;

  let li = document.createElement("li");

  li.innerText = "Lap : " + lapTime;

  document.getElementById("laps").appendChild(li);
}