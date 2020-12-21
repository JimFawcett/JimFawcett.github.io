///////////////////////////////////////////////////////////////////////////
// ScriptsStoryKeyboard.js - defines behaviors for selected key presses  //
//                                                                       //
// Jim Fawcett, 25 June 2018                                             //
///////////////////////////////////////////////////////////////////////////

var HelpWin;

//document.addEventListener('keydown', (event) => { keyAction(event); }, false);

function keyAction(keyEvent) {
  keystate = 'down';
  var key = String.fromCharCode(keyEvent.which);
  if (key === "r" || key === 'R') {
    location.reload();
  }
  if (key === 'T')
    window.scrollTo(0, 0);
  if (key === 'B')
    window.scrollTo(0, 10000);
  if (key === 'U')
    window.scrollBy(0, -200);
  if (key === 'D')
    window.scrollBy(0, 200);
  if (key === 'N') {
    forward();
    //document.getElementById("Next").click();
  }
  if (key === 'P') {
    backward();
    //document.getElementById('Prev').click();
  }
  if (key === 'H') {
    HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
};


function helpWin() {
  window.open('Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
}
