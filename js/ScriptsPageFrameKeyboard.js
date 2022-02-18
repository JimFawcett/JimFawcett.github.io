//////////////////////////////////////////////////////////////////////////////
// ScriptsPageFrameKeyboard.js - defines behaviors for selected key presses //
//                                                                          //
// Jim Fawcett, 19 Jan 2022                                                 //
//////////////////////////////////////////////////////////////////////////////

var HelpWin
var storyHlpMenu = new Object();

function initHelp() {
  storyHlpMenu.helpMenu();
}


storyHlpMenu.helpMenu = function() {
  var hlpMenu = document.getElementById("hlp");
  hlpMenu.innerHTML = '<table id="keys">\
    <tr>\
      <td colspan=2 style="text-align:center; border-bottom:1px solid var(--light);">Key Commands</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.toggleTOC()">Esc</td>\
      <td>toggle menus</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="location.reload()">R</td><td>Refresh</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.next()">N</td><td>Next Page</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.prev()">P</td><td>Prev Page</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.top()">T</td><td>scroll to top</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.bottom()">E</td><td>scroll to bottom</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.home()">H</td><td>Home</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.siteMap()">S</td><td>SiteMap</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="javascript:;">K</td><td>keys</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.about()">A</td><td>about</td>\
    </tr>\
    <tr>\
      <td colspan=2><div style="height:0.25em;">&nbsp;</div></td>\
    </tr>\
  </table>';
}

storyHlpMenu.prev = function () {
  var prv = document.getElementById("Prev");
  prv.click();
}

storyHlpMenu.next = function () {
  var nxt = document.getElementById("Next");
  nxt.click();
}
storyHlpMenu.chaps = function () {
  var menu = document.getElementById("pages");
  if (isDefined(menu)) {
    if (menu.style.display !== "block")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }
};

storyHlpMenu.sects = function () {
  var menu = document.getElementById("sections");
  if (isDefined(menu)) {
    if (menu.style.display !== "flex")
      menu.style.display = "flex";
    else
      menu.style.display = "none";
  }
};


storyHlpMenu.toggleTOC = function () {
  storyHlpMenu.chaps();
  storyHlpMenu.sects();
  var keys = document.getElementById("hlp");
  if (isDefined(keys)) {
    keys.style.display = "none";
  }
  var mod = document.getElementById("about");
  if (isDefined(mod)) {
    mod.style.display = "none";
  }
};

//storyHlpMenu.closeTOC = function () {
//  // let chaps = document.getElementById("chaps");
//  // chaps.style.display = "none";
//  // let sects = document.getElementById("sects");
//  // sects.style.display = "none";
//  let toc = document.getElementById("toc");
//  toc.style.display = "none";
//};

storyHlpMenu.top = function () {
  window.location = "#top";
}

storyHlpMenu.bottom = function () {
  location.hash = "#bottom";
}

storyHlpMenu.home = function () {
  window.location = "index.html";
}

storyHlpMenu.siteMap = function () {
  window.location = "SiteMap.html";
}

storyHlpMenu.keys = function () {
  var help = document.getElementById("hlp");
  if (isDefined(help)) {
    if (help.style.display !== "flex")
      help.style.display = "flex";
    else
      help.style.display = "none";
  }
}

storyHlpMenu.about = function () {
  var date = document.getElementById("modified").innerText;
  var menu = document.getElementById("about");
  menu.innerHTML = "copyright(&#xA9;) Jim Fawcett, 2021" + "<br />" + "Page last modified: " + date;
  if (isDefined(menu)) {
    if (menu.style.display == "block") {
      menu.style.display = "none";
    }
    else {
      menu.style.display = "block";
    }
  }
}

function keyAction(keyEvent) {
  keystate = 'down';
  var key = String.fromCharCode(keyEvent.which);
  //var key = keyEvent.key();
  if (event.keyCode == 27) {
    var menu = document.getElementById("pages");
    if (isDefined(menu)) {
      if (menu.style.display !== "flex")
        menu.style.display = "flex";
      else
        menu.style.display = "none";
    }
    var menu = document.getElementById("sections");
    if (isDefined(menu)) {
      if (menu.style.display !== "flex")
        menu.style.display = "flex";
      else
        menu.style.display = "none";
    }
    var keys = document.getElementById("hlp");
    if (isDefined(keys)) {
      keys.style.display = "none";
    }
    var mod = document.getElementById("about");
    if (isDefined(mod)) {
      mod.style.display = "none";
    }
  }
  if (key === 'R') {
    location.reload();
  }
  //if (key === 'S') {
  //  toggleSwipeEvents();
  //}
  if (key === 'T') {
    location.hash = "#top";
  }
  if (key === 'E')
    location.hash = "#bottom";
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
    window.location.href = "index.html";
  }
  if (key === 'S') {
    window.location.href = "SiteMap.html";
  }
  if (key === 'K') {
    storyHlpMenu.keys();
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
  if (key === 'A') {
    storyHlpMenu.about();
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
};


function helpWin() {
  window.open('Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
}

