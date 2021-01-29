/////////////////////////////////////////////////////////////////////
// ScriptsKeyboard.js - defines behaviors for selected key presses //
//                                                                 //
// Jim Fawcett, 25 June 2018                                       //
/////////////////////////////////////////////////////////////////////

var HelpWin
var storyHlpMenu = new Object();

function initHelp() {
  storyHlpMenu.helpMenu();
}


storyHlpMenu.helpMenu = function() {
  //alert('helpMenu');
  var hlpMenu = document.getElementById("hlp");
  hlpMenu.innerHTML = '<table>\
    <tr>\
      <td style="padding-right:5px;" onclick="storyHlpMenu.toggleTOC()">Esc</td>\
      <td>toggle menus</td>\
    </tr>\
    <tr>\
      <td onclick="storyHlpMenu.closeTOC()">C</td>\
      <td>close menus</td>\
    </tr>\
    <tr>\
      <td onclick="location.reload()">R</td><td>Refresh</td>\
    </tr>\
    <tr>\
      <td onclick="storyHlpMenu.next()">N</td><td>Next Bite</td>\
    </tr>\
    <tr>\
      <td onclick="storyHlpMenu.prev()">P</td><td>Prev Bite</td>\
    </tr>\
    <tr>\
      <td onclick="storyHlpMenu.top()">T</td><td>scroll to top</td>\
    </tr>\
    <tr>\
      <td onclick="storyHlpMenu.bottom()">B</td><td>scroll to bottom</td>\
    </tr>\
    <tr>\
      <td onclick="storyHlpMenu.help()">H</td><td>Help</td>\
    </tr>\
  </table>';
}

storyHlpMenu.prev = function () {
  var prv = document.getElementById("Prev");
  prv.click();
  // if(isDefined(prv)) {
  //   prv.click();
  // }
}

storyHlpMenu.next = function () {
  var nxt = document.getElementById("Next");
  nxt.click();
  // if(isDefined(nxt)) {
  //   nxt.click();
  // }
}
storyHlpMenu.chaps = function () {
  var menu = document.getElementById("chaps");
  if (isDefined(menu)) {
    if (menu.style.display !== "block")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }
};

storyHlpMenu.sects = function () {
  var menu = document.getElementById("sects");
  if (isDefined(menu)) {
    if (menu.style.display !== "block")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }
};


storyHlpMenu.toggleTOC = function () {
  storyHlpMenu.chaps();
  storyHlpMenu.sects();
  // let chaps = document.getElementById("chaps");
  // chaps.style.display = "none";
  // let sects = document.getElementById("sects");
  // sects.style.display = "none";
  // let toc = document.getElementById("toc");
  // toc.style.display = "none";
};

storyHlpMenu.closeTOC = function () {
  // let chaps = document.getElementById("chaps");
  // chaps.style.display = "none";
  // let sects = document.getElementById("sects");
  // sects.style.display = "none";
  let toc = document.getElementById("toc");
  toc.style.display = "none";
};

//storyHlpMenu.scrollTo(id) {
//  location.id = "#" + id;
//}
storyHlpMenu.top = function () {
  window.location = "#top";
}

storyHlpMenu.bottom = function () {
  window.scrollTo(0, 100000);
}

storyHlpMenu.help = function () {
  var help = document.getElementById("hlp");
  if (isDefined(help)) {
    if (help.style.display !== "block")
      help.style.display = "block";
    else
      help.style.display = "none";
  }
}

function keyAction(keyEvent) {
  keystate = 'down';
  var key = String.fromCharCode(keyEvent.which);
  if (event.keyCode == 27) {
    // alert("escape");
    var menu = document.getElementById("chaps");
    if (isDefined(menu)) {
      if (menu.style.display !== "block")
        menu.style.display = "block";
      else
        menu.style.display = "none";
    }
    var menu = document.getElementById("sects");
    if (isDefined(menu)) {
      if (menu.style.display !== "block")
        menu.style.display = "block";
      else
        menu.style.display = "none";
    }
  }
  if (key === 'R') {
    location.reload();
  }
  if (key === 'S')
    toggleSwipeEvents();
  if (key === 'T')
    window.scrollTo(0, 0);
  if (key === 'E')
    window.scrollTo(0, 100000);
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
  if (key === 'F') {
    window.history.forward();
  }
  if (key === 'B') {
    window.history.back();
  }
  if (key === 'H') {
    window.location.href = "../../SiteMap.html";
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
};


function helpWin() {
  window.open('Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
}

