//////////////////////////////////////////////////////////////////////////////
// ScriptsPageFrameKeyboard.js - defines behaviors for selected key presses //
//                                                                          //
// Jim Fawcett, 19 Jan 2022                                                 //
//////////////////////////////////////////////////////////////////////////////

var HelpWin
var actions = new Object();

function initHelp() {
  actions.keysMenu();
}

actions.keysMenu = function() {
  var hlpMenu = document.getElementById("hlp");
  hlpMenu.innerHTML = '<table id="keys">\
    <tr>\
      <td colspan=2 style="text-align:center; border-bottom:1px solid var(--light);">Key Commands</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.toggleTOC()">Esc</td>\
      <td>toggle&nbsp;menus</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="location.reload()">R</td><td>Refresh</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.next()">N</td><td>Next&nbsp;Page</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.prev()">P</td><td>Prev&nbsp;Page</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="window.history.back()">B</td><td>Back</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="window.history.forward()">F</td><td>Forward</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.top()">T</td><td>scroll&nbsp;to&nbsp;top</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.bottom()">E</td><td>scroll&nbsp;to&nbsp;end</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.home()">H</td><td>Home</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.siteMap()">S</td><td>SiteMap</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="javascript:;">K</td><td>keys</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.about()">A</td><td>about</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.incrZoomScreen()">I</td>\
      <td>increase font 22px</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.normZoomScreen()">U</td>\
      <td>usual font 18px</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="actions.decrZoomScreen()">D</td>\
      <td>decrease font 12px</td>\
    </tr>\
    <tr>\
      <td colspan=2><div style="height:0.25em;">&nbsp;</div></td>\
    </tr>\
  </table>';
}

actions.viewCode = function viewCode() {
  location.href = "#compare";
}

actions.incrZoomScreen = function () {
  /*alert("-Zoom");*/
  //document.body.style.zoom = "120%";
  document.body.style.fontSize = "22px";
}
actions.normZoomScreen = function () {
  /*alert("-Zoom");*/
  document.body.style.fontSize = "18px";
}
actions.decrZoomScreen = function () {
  /*alert("-Zoom");*/
  document.body.style.fontSize = "12px";
}

actions.prev = function () {
  var prv = document.getElementById("Prev");
  prv.click();
}

actions.next = function () {
  var nxt = document.getElementById("Next");
  nxt.click();
}
actions.chaps = function () {
  var menu = document.getElementById("pages");
  if (isDefined(menu)) {
    if (menu.style.display !== "block")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }
};

actions.sects = function () {
  var menu = document.getElementById("sections");
  if (isDefined(menu)) {
    if (menu.style.display !== "flex")
      menu.style.display = "flex";
    else
      menu.style.display = "none";
  }
};


actions.toggleTOC = function () {
  actions.chaps();
  actions.sects();
  var keys = document.getElementById("hlp");
  if (isDefined(keys)) {
    keys.style.display = "none";
  }
  var mod = document.getElementById("about");
  if (isDefined(mod)) {
    mod.style.display = "none";
  }
};

//actions.closeTOC = function () {
//  // let chaps = document.getElementById("chaps");
//  // chaps.style.display = "none";
//  // let sects = document.getElementById("sects");
//  // sects.style.display = "none";
//  let toc = document.getElementById("toc");
//  toc.style.display = "none";
//};

actions.top = function () {
  window.location = "#top";
}

actions.bottom = function () {
  location.hash = "#bottom";
}

actions.home = function () {
  window.location = "../../index.html";
}

actions.siteMap = function () {
  window.location = "../../SiteMap.html";
}

actions.keys = function () {
  var help = document.getElementById("hlp");
  if (isDefined(help)) {
    if (help.style.display !== "flex")
      help.style.display = "flex";
    else
      help.style.display = "none";
  }
}

actions.about = function () {
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
    window.location.href = "../../index.html";
  }
  if (key === 'S') {
    window.location.href = "../../SiteMap.html";
  }
  if (key === 'K') {
    actions.keys();
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
  if (key === 'A') {
    actions.about();
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
  if (key === 'C') {
    actions.viewCode();
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
  if (key === 'I') {
    actions.incrZoomScreen();
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
  if (key === 'U') {
    actions.normZoomScreen();
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
  if (key === 'D') {
    actions.decrZoomScreen();
    //HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
  }
};

function getHelp() {
  //window.open("Help.html", "help", "popup=1, height=700, width=600");
  window.open("Help.html", "_blank");
}

//function helpWin() {
//  window.open('Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
//}

document.addEventListener('keydown', (event) => { keyAction(event); }, false);
