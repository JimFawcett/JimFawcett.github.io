// ScriptsUtilities.js

/* --------------------------------------------------------------
 *  window.onerror
 * --------------------------------------------------------------
 * This code binds a display function to window error events.
 * - Each JavaScript execution error causes an alert to popup
 *   with useful information.
 * - Combining this with use of the JavaScript console to spot
 *   compilation errors and log values makes debugging much
 *   easier.
 */
window.onerror = function (msg, url, linenumber) {
    alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
    return true;
  }
  /* --------------------------------------------------------------
   *  isDefined(elem)
   * --------------------------------------------------------------
   *  Checks to see if a JavaScript variable has been declared and
   *  initialized
   */
  function isDefined(elem) {
    //if (typeof elem === 'function')
    //  return true;
    if (elem === null || elem === undefined || typeof elem === 'undefined') {
      return false;
    }
    return true;
  }
  
// RustBiteByByte.js

var storyMenu = new Object();

initBites = function () {
  storyMenu.bitesMenu();
  storyMenu.bottomMenu();
  storyMenu.helpMenu();
  //  // alert("init");
  //   var chaps = document.getElementById("chaps");
  //   //if (isDefined(chaps)) {
  //       chaps.style.display = "block";
  //    var sects = document.getElementById("sects");
  //    //if (isDefined(sects)) {
  //        sects.style.display = "block";
}

storyMenu.bitesMenu = function () {
  var bitesMenu = document.getElementById("chaps");
  bitesMenu.innerHTML = '<a href="Design.html">Design</a><br />\
    <a href="DesignBites_Intro.html">Introduction</a><br />\
    <a href="DesignBites_Structure.html">Structure</a><br />\
    <a href="DesignBites_StructureBasic.html">Basic</a><br />\
    <a href="DesignBites_StructureFactored.html">Factored</a><br />\
    <a href="DesignBites_StructureDataFlow.html">DataFlow</a><br />\
    <a href="DesignBites_StructureTypeErase.html">TypeErase</a><br />\
    <a href="DesignBites_StructurePlugIn.html">PlugIn</a><br />\
    <a href="Javascript.;#"></a><br />\
    <a href="../../Design.html">Design</a><br />\
    <a href="Javascript.;#"></a><br />';
}

storyMenu.bottomMenu = function () {
  var bottomMenu = document.getElementById("bottom-menu");
  bottomMenu.innerHTML = '<a href="Javascript:;" onclick="storyMenu.help()" style="color:#fefefa;">Hlp</a>&nbsp;\
  <a href = "Javascript:;" onclick = "storyMenu.toggleTOC()" style = "color:#fefefa;" >Esc</a>&nbsp;\
  <a href="Javascript:;" onclick="storyMenu.closeTOC()" style="color:#fefefa;">Cls</a> &nbsp;\
  <a href="Javascript:;" onclick="storyMenu.sects()" style="color: #fefefa; ">Sects</a> &nbsp;\
  <a href="Javascript:;" onclick="storyMenu.chaps()" style="color:#fefefa;">Bites</a> &nbsp;';
}

storyMenu.helpMenu = function () {
  var helpMenu = document.getElementById("hlp");
  helpMenu.innerHTML = '<table>\
    <tr>\
      <td style="padding-right:5px;" onclick="storyMenu.toggleTOC()">Esc</td>\
      <td>toggle menus</td>\
    </tr>\
    <tr>\
      <td onclick="storyMenu.closeTOC()">C</td>\
      <td>close menus</td>\
    </tr>\
    <tr>\
      <td onclick="location.reload()">R</td><td>Refresh</td>\
    </tr>\
    <tr>\
      <td onclick="storyMenu.next()">N</td><td>Next Bite</td>\
    </tr>\
    <tr>\
      <td onclick="storyMenu.prev()">P</td><td>Prev Bite</td>\
    </tr>\
    <tr>\
      <td onclick="storyMenu.top()">T</td><td>scroll to top</td>\
    </tr>\
    <tr>\
      <td onclick="storyMenu.bottom()">B</td><td>scroll to bottom</td>\
    </tr>\
    <tr>\
      <td onclick="storyMenu.help()">H</td><td>Help</td>\
    </tr>\
  </table>';
}

storyMenu.prev = function() {
  var prv = document.getElementById("Prev");
  prv.click();
  // if(isDefined(prv)) {
  //   prv.click();
  // }
}

storyMenu.next = function() {
  var nxt = document.getElementById("Next");
  nxt.click();
  // if(isDefined(nxt)) {
  //   nxt.click();
  // }
}

storyMenu.chaps = function () {
  var menu = document.getElementById("chaps");
  if (isDefined(menu)) {
    if (menu.style.display !== "block")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }
};

storyMenu.sects = function () {
  var menu = document.getElementById("sects");
  if (isDefined(menu)) {
    if (menu.style.display !== "block")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }
};

storyMenu.toggleTOC = function () {
  storyMenu.chaps();
  storyMenu.sects();
  // let chaps = document.getElementById("chaps");
  // chaps.style.display = "none";
  // let sects = document.getElementById("sects");
  // sects.style.display = "none";
  // let toc = document.getElementById("toc");
  // toc.style.display = "none";
};

storyMenu.closeTOC = function () {
  // let chaps = document.getElementById("chaps");
  // chaps.style.display = "none";
  // let sects = document.getElementById("sects");
  // sects.style.display = "none";
  let toc = document.getElementById("toc");
  toc.style.display = "none";
};

//storyMenu.scrollTo(id) {
//  location.id = "#" + id;
//}
storyMenu.top = function () {
  window.location = "#top";
}

storyMenu.bottom = function () {
  window.scrollTo(0, 100000);
}

storyMenu.help = function () {
  var help = document.getElementById("hlp");
  if (isDefined(help)) {
    if (help.style.display !== "block")
      help.style.display = "block";
    else
      help.style.display = "none";
  }
}

// listen for keyboard events:
  // - key actions are defined in ScriptsKeyboard.js

  document.addEventListener('keydown', (event) => { keyAction(event); }, false);

  // listen for mouse events:
  // - mouse actions are defined below

  //document.addEventListener('mousedown', (event) => { mouseAction(event); }, false);

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
    if (key === 'P') {
      storyMenu.prev();
    }
    if (key === 'N') {
      storyMenu.next();
    }
    if (key === 'R') {
      location.reload();
    }
    if (key === 'C') {
      storyMenu.closeTOC();
    }
    // if (key === 'S')
    //   toggleSwipeEvents();
    if (key === 'T')
      window.scrollTo(0, 0);
    if (key === 'B')
      window.scrollTo(0, 100000);
    if (key === 'U')
      window.scrollBy(0, -200);
    if (key === 'D')
      window.scrollBy(0, 200);
    if (key === 'H') {
      var help = document.getElementById("hlp");
      if (isDefined(help)) {
        if (help.style.display !== "block")
          help.style.display = "block";
        else
          help.style.display = "none";
      }
    }
  };
  
