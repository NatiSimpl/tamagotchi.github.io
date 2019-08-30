//-----------------reloj--------------------

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();


//-------------Feed timer-----------------

var timefeed = 0;
var runningfeed = 0;
var timeoutfeed;

function startPauseFeed() {
  if (runningfeed == 0) {
    runningfeed = 1;
    incrementFeed();
  } else {
    runningfeed = 0;
  }
}

function resetFeed() {
  runningfeed = 0;
  timefeed = 0;
  clearTimeout(timeoutfeed);
  startPauseFeed();
}

function initializeFeed() {
  runningfeed = 0;
  timefeed = 0;
  clearTimeout(timeoutfeed);
  var level = 100;
  var level = document.getElementById("feedbar").ldBar;
  levelbar.set(level);
}


function incrementFeed() {
  if (runningfeed == 1) {
    timeoutfeed = setTimeout(function () {

      timefeed++;
      var secs = Math.floor(timefeed / 10);

      var level = 100;
      level = level - secs;
      var levelbar = document.getElementById("feedbar").ldBar;
      levelbar.set(level);

      var elem = document.getElementById("toastfeedbar");
      var width = 100;
      elem.style.width = width - secs + "%";
      elem.innerHTML = width - secs + '%';

      if (secs >= 100) {
        stopFeed();
      } else if (secs >= 15 && secs < 16) {
        toastFeed();
        incrementFeed();
      } else if (secs >= 30 && secs < 31) {
        toastFeed();
        incrementFeed();
      } else if (secs >= 60 && secs < 61) {
        toastFeed();
        incrementFeed();
      } else if (secs >= 98 && secs >= 99) {
        gameOver();
      } else {
        incrementFeed();

      }

    }, 100);
  }
}

function stopFeed() {
  runningfeed = 0;
  clearTimeout(timeoutfeed);
  //document.getElementById("startPause").innerHTML = "Start";
}
function toastFeed() {
  if ($('#toastfeed').toast('show'));

}
//agregar boton para cerrar el toast

//-------------Sleep timer-----------------

var timesleep = 0;
var runningsleep = 0;
var timeoutsleep;

function startPauseSleep() {
  if (runningsleep == 0) {
    runningsleep = 1;
    incrementSleep();
  } else {
    runningsleep = 0;
  }
}

function resetSleep() {
  runningsleep = 0;
  timesleep = 0;
  clearTimeout(timeoutsleep);
  startPauseSleep();
}

function initializeSleep() {
  runningsleep = 0;
  timesleep = 0;
  clearTimeout(timeoutsleep);
  var level = 100;
  var levelbar = document.getElementById("sleepbar").ldBar;
  levelbar.set(level);
}

function incrementSleep() {
  if (runningsleep == 1) {
    timeoutsleep = setTimeout(function () {

      timesleep++;
      var secs = Math.floor(timesleep / 10);

      var level = 100;
      level = level - secs;
      var levelbar = document.getElementById("sleepbar").ldBar;
      levelbar.set(level);

      var elem = document.getElementById("toastsleepbar");
      var width = 100;
      elem.style.width = width - secs + "%";
      elem.innerHTML = width - secs + '%';

      if (secs >= 100) {
        stopSleep();
      } else if (secs >= 20 && secs < 21) {
        toastSleep();
        incrementSleep();
      } else if (secs >= 40 && secs < 41) {
        toastSleep();
        incrementSleep();
      } else if (secs >= 80 && secs < 81) {
        toastSleep();
        incrementSleep();
      } else if (secs >= 97 && secs < 98) {
        gameOver();
      } else {
        incrementSleep();
      }

    }, 100);
  }
}

function stopSleep() {
  runningsleep = 0;
  clearTimeout(timeoutsleep);
}

function toastSleep() {
  $('#toastsleep').toast('show');
}

//-------------Bath timer-----------------

var timebath = 0;
var runningbath = 0;
var timeoutbath;

function startPauseBath() {
  if (runningbath == 0) {
    runningbath = 1;
    incrementBath();
  } else {
    runningbath = 0;
  }
}

function resetBath() {
  runningbath = 0;
  timebath = 0;
  clearTimeout(timeoutbath);
  startPauseBath();
}

function initializeBath() {
  runningbath = 0;
  timebath = 0;
  clearTimeout(timeoutbath);
  var level = 100;
  var levelbar = document.getElementById("bathbar").ldBar;
  levelbar.set(level);
}

function incrementBath() {
  if (runningbath == 1) {
    timeoutbath = setTimeout(function () {

      timebath++;
      var secs = Math.floor(timebath / 10);

      var level = 100;
      level = level - secs;
      var levelbar = document.getElementById("bathbar").ldBar;
      levelbar.set(level);

      var elem = document.getElementById("toastbathbar");
      var width = 100;
      elem.style.width = width - secs + "%";
      elem.innerHTML = width - secs + '%';

      if (secs >= 100) {
        stopbath();
      } else if (secs >= 10 && secs < 11) {
        toastBath();
        incrementBath();
      } else if (secs >= 21 && secs < 22) {
        toastBath();
        incrementBath();
      } else if (secs >= 30 && secs < 31) {
        toastBath();
        incrementBath();
      } else if (secs >= 99 && secs < 100) {
        gameOver();
      } else {
        incrementBath();
      }

    }, 100);
  }
}

function stopBath() {
  runningbath = 0;
  clearTimeout(timeoutbath);
}

function toastBath() {
  $('#toastbath').toast('show');
}

//------------functionTypeInToEnergy  energy alertness cleanliness------------------------

let ingresaEnergy = "energy";
let ingresaAlertness = "alertness";
let ingresaClean = "cleanliness";
//get value
let textInput = document.getElementById("formGroupExampleInput");
//set value
function typeInToEnergy(event) { // lo que esta en (key) es un key holder
  if (event.keyCode == 13) {
    if (textInput.value == "energy") {
      resetFeed();
    }
    if (textInput.value == "alertness") {
      resetSleep();
    }
    if (textInput.value == ingresaClean) {
      resetBath();
    }
  }

}

textInput.addEventListener("keydown", typeInToEnergy); //typeInToEnergy es la funcion que voy a crear y false porque no esta devolviendo nada al programa

//----------funcionparalos3timers---------------------

function gameOver() {
  $('#gameover').toast('show');
}

function revive() {
  // initializeFeed();
  // initializeSleep();
  // initializeBath();
  window.location = window.location; //Julien propuso esto para cargar la pagina despues de game over
}

function playGame() {
  resetFeed();
  resetSleep();
  resetBath();
}

