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

initBites = function() {
  //  // alert("init");
  //   var chaps = document.getElementById("chaps");
  //   //if (isDefined(chaps)) {
  //       chaps.style.display = "block";
  //    var sects = document.getElementById("sects");
  //    //if (isDefined(sects)) {
  //        sects.style.display = "block";
}

storyMenu.prev = function() {
  var prv = document.getElementById("prev");
  prv.click();
  // if(isDefined(prv)) {
  //   prv.click();
  // }
}

storyMenu.next = function() {
  var nxt = document.getElementById("next");
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
      // HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
    }
    // if (key === 'N') {
    //   let nxt = document.getElementById("Next");
    //   if (isDefined(nxt))
    //     nxt.click();
    // }
    // if (key === 'P') {
    //   let prv = document.getElementById('Prev');
    //   if (isDefined(prv))
    //     prv.click();
    // }
    // if (key === 'H') {
    //   HelpWin = window.open('Help.html', 'target=_blank',  'location=yes, width=900, height=650, resizable');
    // }
  };
  
