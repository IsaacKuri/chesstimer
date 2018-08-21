/* Cambiar de Estado */
function playb(who){
  var text = document.getElementById(who);
  var tracker = text.getAttribute('playb');
  var block = document.getElementById('playblock');
  var which = text.getAttribute('which');
  if (which != null) {
    if(tracker=="play"){
      text.innerHTML ="Pause";
      text.setAttribute('playb', "pause");
      block.setAttribute('style', "background-color:black");
      test(which);
      yesclick();
    }
    if (tracker=="pause"){
      text.innerHTML="Resume";
      text.setAttribute('playb', "play");
      block.setAttribute('style', "background-color:grey");
      stop(which);
      noclick();
    }
    if (!tracker) {
      tracker = "play";
      text.setAttribute('playb', "play");
      block.setAttribute('style', "background-color:grey");
      text.innerHTML="Resume";
      stop(which);
      noclick();
    }
  }
}

/* Cambiar de Imagen
function playb(who){
  var image = document.getElementById(who);
  var tracker = image.getAttribute('playb');
  if(tracker=="play"){
    image.src='/home/isaac/Coding/chesstimer/isaacss/stop.png';
    image.setAttribute('playb', "stop");
  }
  if (tracker=="stop"){
    image.src='/home/isaac/Coding/chesstimer/isaacss/play.jpg';
    image.setAttribute('playb', "play");
  }
  if (!tracker) {
    tracker = "stop";
    image.setAttribute('playb', "stop");
    image.src='/home/isaac/Coding/chesstimer/isaacss/stop.png';
  }
}
*/

/* A quien aplico un timer */
function test(who){
  var idas = document.getElementById(who);
  var idbs = document.getElementById('playt');
  var timer = idas.getAttribute('timer');
  var tempo = idas.getAttribute('tempo');
  idbs.setAttribute('which',who);
  if (!tempo) {
    tempo = 70;
    idas.setAttribute('tempo',tempo);
  }

  if (!timer) {
    timer = setInterval(function() {
      var t = idas.getAttribute('tempo');
      var m = Math.floor(t/60) ;
      var s = Math.floor(t % 60);
      var msc = (t/1000);
      ms = msc.toString();
      mst = ms.substr(5, 2);
      if (s < 10) {
        var s = "0" + s;
      }
      idas.innerHTML = m + ":" + s;
      idas.setAttribute('tempo',t - 0.01);
      if (t < 60){
      idas.innerHTML = s + "." + mst;
      }
      if (t < 0) {
        noclick();
        idas.innerHTML = "Time Out";
        idas.removeAttribute('tempo');
        stop(who);
        resetplayb();
      }
    }, 10);
    idas.setAttribute('timer', timer);
  }
}

/* Funcion de stop */

function stop(who) {
  var idas = document.getElementById(who);
  var timer = idas.getAttribute('timer');
  timer = clearInterval(timer);
  idas.removeAttribute('timer',timer);
}
/* funcion de reset */

function reset(){
  var idas = document.getElementById('timer1');
  var idbs = document.getElementById('timer2');
  idas.innerHTML = "5:00";
  idas.removeAttribute('tempo');
  idbs.innerHTML = "5:00";
  idbs.removeAttribute('tempo');
  resetplayb();
  yesclick();
  stop('timer1');
  stop('timer2');
}
function resetplayb(){
  var text = document.getElementById('playt');
  var block = document.getElementById('playblock')
  text.innerHTML ="Pause";
  text.removeAttribute('playb');
  text.removeAttribute('which');
  block.setAttribute('style', "background-color:red");
}

function noclick(){
  var idas = document.getElementById('player1');
  var idbs = document.getElementById('player2');
  idas.removeAttribute('onclick');
  idbs.removeAttribute('onclick');
}

function yesclick(){
  var idas = document.getElementById('player1');
  var idbs = document.getElementById('player2');
  idas.setAttribute('onclick',"stop('timer1');test('timer2');");
  idbs.setAttribute('onclick',"stop('timer2');test('timer1');");
}
