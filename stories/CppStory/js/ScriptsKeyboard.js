/////////////////////////////////////////////////////////////////////
// ScriptsKeyboard.js - defines behaviors for selected key presses //
//                                                                 //
// Jim Fawcett, 25 June 2018                                       //
/////////////////////////////////////////////////////////////////////

var HelpWin

function keyAction(keyEvent) {
  keystate = 'down';
  var key = String.fromCharCode(keyEvent.which);
  if (key === 'R') {
    location.reload();
  }
  if (key === 'S')
    toggleSwipeEvents();
  if (key === 'T')
    window.scrollTo(0, 0);
  if (key === 'B')
    window.scrollTo(0, 10000);
  if (key === 'U')
    window.scrollBy(0, -200);
  if (key === 'D')
    window.scrollBy(0, 200);
  if (key === 'N') {
    let nxt = document.getElementById("Next");
    if (isDefined(nxt))
      nxt.click();
  }
  if (key === 'P') {
    let prv = document.getElementById('Prev');
    if (isDefined(prv))
      prv.click();
  }
  if (key === 'H') {
    HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
};


function helpWin() {
  window.open('Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
}
