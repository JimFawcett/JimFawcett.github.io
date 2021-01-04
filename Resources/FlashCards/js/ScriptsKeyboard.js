/////////////////////////////////////////////////////////////////////
// ScriptsKeyboard.js - defines behaviors for selected key presses //
//                                                                 //
// Jim Fawcett, 25 June 2018                                       //
/////////////////////////////////////////////////////////////////////

var HelpWin

function keyAction(keyEvent) {
  //alert('in keyAction');
  keystate = 'down';
  var key = String.fromCharCode(keyEvent.which);
  var content = document.getElementById("content");

  if (key === 'R') {
    location.reload();
  }
  else if (key === 'S')
    toggleSwipeEvents();
  else if (key === 'T')
    content.scrollTo(0, 0);
  else if (key === 'B')
    content.scrollTo(0, 100000);
  else if (key === 'U')
    content.scrollBy(0, -200);
  else if (key === 'D')
    content.scrollBy(0, 200);
  else if (key === 'N') {
    let nxt = document.getElementById("Next");
    if (isDefined(nxt))
      nxt.click();
  }
  else if (key === 'P') {
    let prv = document.getElementById('Prev');
    if (isDefined(prv))
      prv.click();
  }
  else if (key === 'H') {
    HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
};


function helpWin() {
  window.open('Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
}
