/////////////////////////////////////////////////////////////////////
// ScriptsKeyboard.js - defines behaviors for selected key presses //
//                                                                 //
// Jim Fawcett, 25 June 2018                                       //
/////////////////////////////////////////////////////////////////////

var HelpWin;

function keyAction(keyEvent) {
  keystate = 'down';
  var key = String.fromCharCode(keyEvent.which);
  if (key === 'C') {
    document.getElementById("Cour").click();
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
    document.getElementById("Next").click();
  }
  if (key === 'P') {
    document.getElementById('Prev').click();
  }
  if (key === 'H') {
    HelpWin = window.open('../../webpages/Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
  }
  if (key === 'R') {
    scrollMenuDown();
  }
  //if (key === 'S') {
  //  alert("S been clicked");
  //  var elem = document.createElement("a");
  //  //elem.setAttribute("target", "_blank");
  //  elem.setAttribute("href", "view-source:cse686L1.htm");
  //  var node = document.createTextNode("page source");
  //  elem.append(node);
  //  var bElem = document.getElementsByTagName("body")[0];
  //  bElem.append(elem);
  //  //elem.click();
  //}
}

function helpWin() {

  window.open('../../webpages/Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
}
