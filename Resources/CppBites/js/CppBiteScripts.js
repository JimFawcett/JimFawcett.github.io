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
  bitesMenu.innerHTML = '<a href="CppBites_Intro.html">Introduction</a><br />\
    <a class="undefined" href="javascript:;">memory</a><br />\
    <a class="undefined" href="javascript:;">types</a><br />\
    <a class="undefined" href="javascript:;">classes</a><br />\
    <a class="undefined" href="javascript:;">templates</a><br />\
    <a class="undefined" href="javascript:;">STL</a><br />\
    <div class="lightItem" style="padding:0em 0.5em;">C++11</div>\
    <a class="undefined" href="javascript:;">auto</a><br />\
    <a class="undefined" href="javascript:;">shared_ptr</a><br />\
    <a class="undefined" href="javascript:;">range-based for</a><br />\
    <a class="undefined" href="javascript:;">move</a><br />\
    <a class="undefined" href="javascript:;">lambdas</a><br />\
    <a class="undefined" href="javascript:;">variadic templs</a><br />\
    <a class="undefined" href="javascript:;">few more things</a><br />\
    <div class="lightItem" style="padding:0em 0.5em;">C++14</div>\
    <a class="undefined" href="javascript:;">func rtn type deduct</a><br />\
    <a class="undefined" href="javascript:;">var templs</a><br />\
    <a class="undefined" href="javascript:;">agg initialization</a><br />\
    <a class="undefined" href="javascript:;">generic lambdas</a><br />\
    <a class="undefined" href="javascript:;">shared mutex</a><br />\
    <a class="undefined" href="javascript:;">tuple member access by type</a><br />\
    <a class="undefined" href="javascript:;">quoted stream</a><br />\
    <a class="undefined" href="javascript:;">few more things</a><br />\
    <div class="lightItem" style="padding:0em 0.5em;">C++17</div>\
    <a class="undefined" href="javascript:;">if constexpr</a><br />\
    <a class="undefined" href="javascript:;">structured bindings</a><br />\
    <a class="undefined" href="javascript:;">fold expressions</a><br />\
    <a class="undefined" href="javascript:;">std::filesystem()</a><br />\
    <a class="undefined" href="javascript:;">std::apply()</a><br />\
    <a class="undefined" href="javascript:;">std::any()</a><br />\
    <a class="undefined" href="javascript:;">few more things</a><br />\
    <div class="lightItem" style="padding:0em 0.5em;">C++20</div>\
    <a class="undefined" href="javascript:;">concepts</a><br />\
    <a class="undefined" href="javascript:;">modules</a><br />\
    <a class="undefined" href="javascript:;">coroutines</a><br />\
    <a class="undefined" href="javascript:;">ranges</a><br />\
    <a class="undefined" href="javascript:;">std::format</a><br />\
    <a class="undefined" href="javascript:;">operator &lt;=&gt;</a><br />\
    <a class="undefined" href="javascript:;">__FILE__</a><br />\
    <a class="undefined" href="javascript:;">__LINE__</a><br />\
    <a class="undefined" href="javascript:;">few more things</a><br />\
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
      <td>toggle&nbsp;menus</td>\
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
      <td onclick="storyMenu.top()">T</td><td>scroll&nbsp;to&nbsp;top</td>\
    </tr>\
    <tr>\
      <td onclick="storyMenu.bottom()">E</td><td>scroll&nbsp;to&nbsp;end</td>\
    </tr>\
    <tr>\
      <td onclick="storyMenu.help()">H</td><td>SiteMap</td>\
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
  
