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

/* run menu builders at startup */

function initialize() {
  initializeMenu();
  initializePages();
  initializeNextPrev();
  storyHlpMenu.helpMenu();
}

/* create top menu */

function initializeMenu() {

  var topMenu = document.getElementById("navbar");
  topMenu.innerHTML = "<div class='navbar'>\
    <div class='menuItem'>\
        Site&#9662\
        <div class='dropdown'>\
            <div style='height:0.25em;'></div>\
            <div class='ddItem'><a href='index.html'>Home</a></div>\
            <div class='ddItem'><a href='SiteMap.html'>SiteMap</a></div>\
            <div class='ddItem'><a href='SiteDemo.html'>SiteDemo</a></div>\
            <div class='ddItem'><a href='SiteDesign.html'>SiteDesign</a></div>\
            <div class='ddItem'><a target='_blank' href='https://github.com/JimFawcett.html'>github repos</a></div>\
            <div class='ddItem'><a target='_blank' href='https://ecs.syr.edu/faculty/fawcett/handouts/webpages/fawcettHome.htm'>SU Site</a></div>\
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
          <div class='ddItem'><a target='_parent' href='../../TOCBits.html'>&nbsp;Bits</a></div>\
          <div class='ddItem'><a target='_parent' href='../../TOCCpp.html'>&nbsp;C++</a></div>\
          <div class='ddItem'><a target='_parent' href='../../TOCRust.html'>&nbsp;Rust</a></div>\
          <div class='ddItem'><a target='_parent' href='../../TOCCSharp.html'>&nbsp;C#</a></div>\
          <div class='ddItem'><a target='_parent' href='../../TOCBasic.html'>&nbsp;Basics</a>&nbsp;</div>\
          <div class='ddItem'><a target='_parent' href='../../TOCWebDev.html'>&nbsp;WebDev</a></div>\
          <div class='ddItem'><a target='_parent' href='../../TOCDesign.html'>&nbsp;Design</a></div>\
          <div class='ddItem'><a target='_parent' href='../../TOCDeployment.html'>&nbsp;Deployment</a></div>\
          <div class='ddItem'><a target='_parent' href='../../TOCProjects.html'>&nbsp;Projects</a></div>\
          <div class='ddItem'><a target='_parent' href=.../../TOCPrototypes.html'>&nbsp;Prototypes</a></div>\
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
            <div class='ddItem'><a href='javascript:;'>None yet</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Cmps&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>SW Components</div>\
            <div class='ddItem'><a href='WebComponents.html'>WebComponents</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Libs&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Libraries</div>\
            <div class='ddItem'><a href='WebLibraries.html'>WebLibraries</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Prjs&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Projects</div>\
            <div class='ddItem'><a href='SitePages.html'>SitePages</a></div>\
            <div class='ddItem'><a href='StoryTellerRepo.html'>StoryTeller</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Dems&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Demonstrations</div>\
            <div class='ddItem'><a href='WebComponentTests.html'>WebComponentTests</a>\</div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'><a id='prevLink' href='#'>Prev</a></div>\
    <div class='menuItem'><a id='nextLink' href='#'>Next</a></div>\
  </div>\
  <div style='clear:all;'></div>";
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

