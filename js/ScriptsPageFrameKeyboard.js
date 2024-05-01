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
      <td>toggle&nbsp;menus</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="location.reload()">R</td><td>Refresh</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.next()">N</td><td>Next&nbsp;Page</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.prev()">P</td><td>Prev&nbsp;Page</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="window.history.back()">B</td><td>Back</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="window.history.forward()">F</td><td>Forward</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.top()">T</td><td>scroll&nbsp;to&nbsp;top</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.bottom()">E</td><td>scroll&nbsp;to&nbsp;end</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.home()">H</td><td>Home</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.siteMap()">M</td><td>SiteMap</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.siteX()">X</td><td>Explorer</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.sects()">S</td><td>page sections</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="javascript:;">K</td><td>keys</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.about()">A</td><td>about</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.incrZoomScreen()">I</td>\
      <td>increase font 22px</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.normZoomScreen()">U</td>\
      <td>usual font 18px</td>\
    </tr>\
    <tr>\
      <td class="key" onclick="storyHlpMenu.decrZoomScreen()">D</td>\
      <td>decrease font 12px</td>\
    </tr>\
    <tr>\
      <td colspan=2><div style="height:0.25em;">&nbsp;</div></td>\
    </tr>\
  </table>';
}

storyHlpMenu.incrZoomScreen = function () {
  /*alert("-Zoom");*/
  //document.body.style.zoom = "120%";
  document.body.style.fontSize = "22px";
}
storyHlpMenu.normZoomScreen = function () {
  /*alert("-Zoom");*/
  document.body.style.fontSize = "18px";
}
storyHlpMenu.decrZoomScreen = function () {
  /*alert("-Zoom");*/
  document.body.style.fontSize = "12px";
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

storyHlpMenu.siteX = function () {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOC.html?src=' + loc;
  }
  else {
    location.reload();
  }
}
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

storyHlpMenu.TOC = function () {
  window.location = "TOC.html";
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
  var page = document.getElementById("page");
  menu.innerHTML = "copyright(&#xA9;) Jim Fawcett, 2021-2024" + "<br />"
    + page.textContent + "<br />" + "Page last modified: " + date;
  if (isDefined(menu)) {
    if (menu.style.display !== "flex") {
      menu.style.display = "flex";
    }
    else {
      menu.style.display = "none";
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
  if (key === 'M') {
    window.location.href = "SiteMap.html";
  }
  //if (key === 'C') {
  //  window.location.href = "TOC.html";
  //}
  if (key === 'X') {
    let top = window.top;
    loc = window.location.href;
    //let url = (location.protocol).concat('//').concat(location.pathname).concat(location.hash);
    //let url = (location.protocol).concat('//').concat(location.pathname);
    let url = location.pathname;
    let filename = url.split('/').pop();
    if (filename === 'TOC.html') {
      return;
    }
    window.top.location.href = 'TOC.html?src=' + loc;
  }
  if (key === 'S') {
    storyHlpMenu.sects();
  }
  if (key === 'K') {
    storyHlpMenu.keys();
  }
  if (key === 'A') {
    storyHlpMenu.about();
  }
  if (key === 'I') {
    storyHlpMenu.incrZoomScreen();
  }
  if (key === 'U') {
    storyHlpMenu.normZoomScreen();
  }
  if (key === 'D') {
    storyHlpMenu.decrZoomScreen();
  }
};


function helpWin() {
  window.open('Help.html', 'target=_blank', 'location=yes, width=900, height=650, resizable');
}

