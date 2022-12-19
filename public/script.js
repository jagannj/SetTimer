window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var array = [];
  localStorage.setItem('Timer', JSON.stringify(array));
  var OutputSeconds = document.getElementById('second');
  var OutputTens = document.getElementById('tens');
  var buttonStart = document.getElementById('btn-start');
  var buttonStop = document.getElementById('btn-stop');
  var buttonReset = document.getElementById('btn-reset');
  var Interval;

  buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10); // millisecond 10 = 0.01 second
  });

  buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
    const timerObj = seconds;
    array.push(timerObj);
    console.log(array);
    let Data = JSON.parse(localStorage.getItem('Timer'));
    Data.push(timerObj);
    console.log("arr",Data);
    localStorage.setItem('Timer', JSON.stringify(Data));
  });

  buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    array = [];
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
  });
  console.log(ar);

  function startTimer() {
    tens++;

    if (tens <= 9) {
      OutputTens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
      OutputTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;

      OutputSeconds.innerHTML = '0' + seconds;
      tens = 0;
      OutputTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
      OutputSeconds.innerHTML = seconds;
    }
  }
};
