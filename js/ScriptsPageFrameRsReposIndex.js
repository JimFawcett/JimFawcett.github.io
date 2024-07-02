/*
 * ScriptsPageFrameOtherRepos.js
 * - Builds top menu so only one place to change for adding or removing link
 * - Builds bottom Pages menu since all pages in thread have same sibling pages
 * - Builds About popup, used by all pages
 *   - About gets its date last modified data from an element with id="modified"
 * - Builds Keys popup, used by all pages
 *   - Shows list of key actions, e.g., B is History.back()
 */

function isDefined(elem) {
  if (typeof elem === 'undefined' || elem === null || elem === undefined) {
    return false;
  }
  return true;
}

//function loadif() {
//  loc = window.location.href;
//  window.location.href = 'TOC.html?src=' + loc;
//}
function loadif() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOC.html?src=' + loc;
  }
  else {
    window.top.location.href = 'TOC.html?src=' + loc;
    /*location.reload();*/
  }
}

function loadifcpp() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCCpp.html?src=indexCpp.html';
  }
  else {
    window.top.location.href = 'TOCCpp.html';
  }
}

function loadifrust() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCRust.html?src=indexRust.html';
  }
  else {
    window.top.location.href = 'TOCRust.html';
  }
}

function loadifcsharp() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCCSharp.html?src=indexCs.html';
  }
  else {
    window.top.location.href = 'TOCCSharp.html';
  }
}

function loadifbasic() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCBasic.html?src=indexBasic.html';
  }
  else {
    window.top.location.href = 'TOCBasic.html';
  }
}

function loadifbits() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCBits.html?src=indexBits.html';
  }
  else {
    window.top.location.href = 'TOCBits.html';
  }
}

function loadifwebdev() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCWebDev.html?src=indexWebDev.html';
  }
  else {
    window.top.location.href = 'TOCWebDev.html';
  }
}

function loadifdesign() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCDesign.html?src=indexDesign.html';
  }
  else {
    window.top.location.href = 'TOCDesign.html';
  }
}

function loadifdeployment() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCDeployment.html?src=indexDeployment.html';
  }
  else {
    window.top.location.href = 'TOCDeployment.html';
  }
}

function loadifprojects() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCProjects.html?src=indexProjects.html';
  }
  else {
    window.top.location.href = 'TOCProjects.html';
  }
}

function loadifprototypes() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOCPrototypes.html?src=indexPrototypes.html';
  }
  else {
    window.top.location.href = 'TOCPrototypes.html';
  }
}
/* run menu builders at startup */

function initialize() {
  initializeMenu();
  initializePages();
  initializeNextPrev();
  storyHlpMenu.helpMenu();
}

function getHelp() {
  //window.open("Help.html", "help", "popup=1, height=700, width=600");
  window.open("Help.html", "_blank");
}

//function loadif() {
//  loc = window.location.href;
//  window.location.href = 'TOC.html?src=' + loc;
//}
/* create top menu */

function initializeMenu() {

  var topMenu = document.getElementById("navbar");
  topMenu.innerHTML = "<div class='navbar'>\
    <div class='menuItem'>\
        Site&#9662\
        <div class='dropdown'>\
            <div style='height:0.25em;'></div>\
            <div class='ddItem'><a href='index.html'>Home</a></div>\
            <div class='ddItem'><a target='_parent' href='TOC.html'>Site Explorer</a></div>\
            <!--<div class='ddItem'><a target='_parent' onclick='loadif()'>Site Explorer</a></div>-->\
            <div class='ddItem'><a href='SiteMap.html'>SiteMap</a></div>\
            <div class='ddItem'><a href='SiteDemo.html'>SiteDemo</a></div>\
            <div class='ddItem'><a href='SiteDesign.html'>SiteDesign</a></div>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>About&nbsp;Site&nbsp;&nbsp;&nbsp;</summary>\
              <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='JimFawcett.html'>Jim Fawcett</a></div>\
              <div class='ddItem ddDetails'><a href='Interesting.html'>Interesting&nbsp;things&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a href='Friends.html'>Friends&nbsp;&amp;&nbsp;Collaborators</a></div>\
              <div class='ddItem ddDetails'><a href='Help.html'>Help</a></div>\
              <div class='ddItem ddDetails'><a href='SitePlans.html'>Site Plans</a></div>\
              <div class='ddItem ddDetails'><a href='#' onclick='togglenavKeys()'>Toggle Nav Keys</a></div>\
              <div class='ddItem ddDetails'><a href='#' onclick='toggleSwipeEvents()'>Toggle Swipe Events</a></div>\
              <div class='ddItem ddDetails'><a href='BookDesignCourse.html'>Design Course</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='index.html'>L1 Site Home</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='RsRepositories.html'>L2&nbsp;Repository&nbsp;webpage</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='RustBiteByByte.html'>L3&nbsp;Rust&nbsp;Bites</a></div>\
              <div class='ddItem ddDetails'><a href='https://github.com/JimFawcett'>Repositories&nbsp;code</a></div>\
              <div style='height:1em;'></div>\
            </div>\
          </details>\
          <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Tracks&#9662\
        <div class='dropdown'>\
          <div class='ddLabel darkItem'>Code Tracks</div>\
          <div class='ddItem'><a target='_parent' onclick='loadifbasic()'>&nbsp;Basics</a>&nbsp;</div>\
          <div class='ddItem'><a target='_parent' onclick='loadifcpp()'>&nbsp;C++</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifrust()'>&nbsp;Rust</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifcsharp()'>&nbsp;C#</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifbits()'>&nbsp;Bits</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifwebdev()'>&nbsp;WebDev</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifdesign()'>&nbsp;Design</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifdeployment()'>&nbsp;Deployment</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifprojects()'>&nbsp;Projects</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifprototypes()'>&nbsp;Prototypes</a></div>\
          <div style='height:2em;'>&nbsp;</div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Repos&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Repositories</div>\
            <div class='ddItem'><a href='CppRepositories.html'>C++</a></div>\
            <div class='ddItem'><a href='RsRepositories.html'>Rust</a></div>\
            <div class='ddItem'><a href='CsRepositories.html'>C#</a></div>\
            <div class='ddItem'><a href='JsRepositories.html'>JavaScript</a></div>\
            <div class='ddItem'><a href='OtherRepositories.html'>Other</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Utils&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Utilities</div>\
            <div class='ddItem'><a href='javascript:;'>None yet</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Tools&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>SW Tools</div>\
            <div class='ddItem'><a href='RustLogger.html'>RustLogger</a></div>\
            <div class='ddItem'><a href='RustTextFinder.html'>RustTextFinder</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Cmps&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>SW Components</div>\
            <div class='ddItem'><a href='RustBlockingQueue.html'>BlockingQueue</a>&nbsp;</div>\
            <div class='ddItem'><a href='RustThreadPool.html'>ThreadPool&nbsp;</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Libs&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Libraries</div>\
            <div class='ddItem'><a href='RustCmdLine.html'>CmdLine</a></div>\
            <div class='ddItem'><a href='RustDisplayLib.html'>DisplayLib</a></div>\
            <div class='ddItem'><a href='RustDirNav.html'>DirNav</a></div>\
            <div class='ddItem'><a href='RustComm.html'>Comm Prototype</a></div>\
            <div class='ddItem'><a href='RustCommWithThreadPool.html'>Comm Prototype with TP&nbsp;</a></div>\
            <div class='ddItem'><a href='RustStringConversions.html'>String&nbsp;Conv&nbsp;</a>\</div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Prjs&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Projects</div>\
            <div class='ddItem'><a href='BuildOn.html'>BuildOn</a></div>\
            <div class='ddItem'><a href='RustCommExperiments.html'>RustComm&nbsp;Exper&nbsp;&nbsp;</a></div>\
            <div class='ddItem'><a href='CommCompare.html'>CommCompare&nbsp;&nbsp;</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Dems&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Demonstrations</div>\
            <div class='ddItem'><a href='RustByteRecord.html'>Rust&nbsp;Byte&nbsp;Record&nbsp;</a></div>\
            <div class='ddItem'><a href='RustBasicDemos.html'>Rust&nbsp;Basic&nbsp;Demos</a></div>\
            <div class='ddItem'><a href='RustErrorHandling.html'>Rust&nbsp;Error&nbsp;Handling&nbsp;</a></div>\
            <div class='ddItem'><a href='RustModels.html'>Rust&nbsp;Models&nbsp;</a></div>\
            <div class='ddItem'><a href='RustLibraryDemos.html'>Rust&nbsp;Librarys&nbsp;Demos&nbsp;</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'><a id='help' onclick='getHelp()'>Help</a></div>\
    <div class='menuItem'>\
        Pages&#9662\
        <div class='dropdown'>\
          <div class='ddLabel darkItem'>Repositories&nbsp;thread</div>\
            <div style='height:0.0em;'></div>\
            <div class='ddItem'><a href='CppRepositories.html'>C++</a></div>\
            <div class='ddItem'><a href='RsRepositories.html'>Rust</a></div>\
            <div class='ddItem'><a href='CsRepositories.html'>C#</a></div>\
            <div class='ddItem'><a href='JsRepositories.html'>JavaScript</a></div>\
            <div class='ddItem'><a href='OtherRepositories.html'>Other</a></div>\
          <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'><a id='prevLink' href='#'>Prev</a></div>\
    <div class='menuItem'><a id='nextLink' href='#'>Next</a></div>\
  </div>\
  <div style='clear:all;'></div>";
}

function postMsg(msg) {
  let parent = window.parent;
  parent.postMessage(msg, '*');
}
window.onmessage = function (e) {
  // alert('into msg handler - Bits_Stuff');
  // alert(e.data);
  let msg = e.data;
  if (e === null | e.data === 'sections') {
    bottomMenu.sections();
  } else {
    if (e.data === 'exit') {
      // alert('into exit handler - Bits_Intro');
      let url = window.location.href;
      // alert(url);
      postMsg(url);
    }
  }
}
/* define page object with page methods and data fields */

let page = new Object();

function initializeNextPrev() {

  /* these page items cannot be boosted to global level (not defined there) */

  page.nxt = document.getElementById("Next");
  page.prv = document.getElementById("Prev");
  page.nxtlnk = document.getElementById("nextLink");
  page.prvlnk = document.getElementById("prevLink");
  page.nxtlnk2 = document.getElementById("nextLink2");
  page.prvlnk2 = document.getElementById("prevLink2");

  if (!isDefined(page.nxt)) {
    page.nxtlnk.style.display = "none";  // button top right menu
    page.nxtlnk2.style.display = "none";  // button bottom right menu
  }
  else {
    page.nxtlnk.setAttribute('href', page.nxt.href);
    page.nxtlnk2.setAttribute('href', page.nxt.href);
  }

  if (page.prv === null) {
    page.prvlnk.style.display = "none";  // button top right menu
    page.prvlnk2.style.display = "none";  // button bottom right menu
  }
  else {
    page.prvlnk.href = page.prv.href;
    page.prvlnk2.href = page.prv.href;
  }
}

function initializePages() { }
/* provide click functionality for menu buttons */

var bottomMenu = new Object();

bottomMenu.next = function () {
  page.nxt.click();
}
bottomMenu.prev = function () {
  page.prv.click();
}
bottomMenu.top = function () {
  location.hash = "#top";
}

bottomMenu.bottom = function () {
  location.hash = "#bottom";
}

bottomMenu.home = function () {
  window.location.assign("index.html");
}

bottomMenu.siteMap = function () {
  window.location.assign("SiteMap.html");
}

bottomMenu.pages = function () {
  var menu = document.getElementById("pages");
  var pageStyle = menu.style.display;
  if (isDefined(menu)) {
    if (menu.style.display == "flex")
      menu.style.display = "none";
    else
      menu.style.display = "flex";
  }
};

bottomMenu.sections = function () {
  var menu = document.getElementById("sections");
  if (isDefined(menu)) {
    if (menu.style.display == "flex")
      menu.style.display = "none";
    else
      menu.style.display = "flex";
  }
}

bottomMenu.keys = function () {
  storyHlpMenu.keys();
}

bottomMenu.toggleMenus = function () {
  bottomMenu.pages();
  bottomMenu.sections();
}

bottomMenu.about = function () {
  var page = document.getElementById("page");
  var date = document.getElementById("modified");
  var menu = document.getElementById("about");
  menu.innerHTML = "copyright(&#xA9;) Jim Fawcett, 2021";
  if (isDefined(page)) {
    menu.innerHTML += "<br />" + page.innerText;
  }
  if (isDefined(date)) {
    menu.innerHTML += "<br />" + "Page last modified: " + date.innerText;
  }
  if (isDefined(menu)) {
    if (menu.style.display == "block") {
      menu.style.display = "none";
    }
    else {
      menu.style.display = "block";
    }
  }
}

//bottomMenu.showHelp = function () {
//  var helpMenu = document.getElementById("hlp");
//  helpMenu.style.display = "block";
//  alert('PageFrame');
//  helpMenu.innerHTML = '<table>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="bottomMenu.toggleMenus()">Esc</td>\
//      <td>toggle&nbsp;menus</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="location.reload()">R</td><td>Refresh</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="bottomMenu.next()">N</td><td>Next Bite</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="bottomMenu.prev()">P</td><td>Prev Bite</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="history.back()">B</td><td>Back</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="bottomMenu.top()">T</td><td>scroll&nbsp;to&nbsp;top</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="bottomMenu.bottom()">E</td><td>scroll&nbsp;to&nbsp;end</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="bottomMenu.home()">H</td><td>Home</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="bottomMenu.siteMap()">S</td><td>SiteMap</td>\
//    </tr>\
//    <tr>\
//      <td style="cursor:pointer;" class="helpItem" onclick="bottomMenu.showHelp()">K</td><td>Show this</td>\
//    </tr>\
//  </table>';
//}
// listen for keyboard events:
// - key actions are defined in ScriptsPageFrameKeyboard.js

document.addEventListener('keydown', (event) => { keyAction(event); }, false);

