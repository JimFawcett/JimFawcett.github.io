/*
 * ScriptsPageFrame.js
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

//function getBodyScrollTop() {
//  let body = document.querySelector("body");
//  let scroll = localStorage.getItem("body-scroll");
//  if (isDefined(scroll)) {
//    body.scrollTop = parseInt(scroll, 10);
//  }
//  window.addEventListener("beforeunload", () => {
//    localStorage.setItem("body-scroll", body.scrollTop);
//  })
//}

/* create top menu */

function goHome() {
  window.location.href = "index.html";
}

function getHelp() {
  //window.open("Help.html", "help", "popup=1, height=700, width=600");
  window.open("Help.html", "_blank");
}
function closeQuickStatus() {
  let qstat = document.getElementsByClassName("quickStatus");
  if (qstat) {
    for (item of qstat) {
      let det = item.parentElement;
      det.removeAttribute('open');
    }
    //let det = qstat[0].parentElement;
    //det.removeAttribute('open');
    let dummy = true;
  }
}

function loadif() {
  var loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOC.html?src=' + loc;
  }
  else {
    window.top.location.href = loc;
    /*window.top.location.href = 'TOC.html?src=index.html';*/
    /*location.reload();*/
  }
}

function loadifcpp() {
  var loc = window.location.href;
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

function toggleShow(id, width) {
  let showit = document.getElementById(id);
  if (showit) {
    if (showit.style.display === 'none') {
      showit.style.display = 'block';
      showit.firstElementChild.style.width = width + "px";
    }
    else {
      let d3 = showit.style.width;
      showit.firstElementChild.style.width = width + "px";
      showit.style.display = 'None';
    }
  }
  else {
    //alert('showit not defined');
  }
}
function bigger(img) {
  img.style.width = (img.clientWidth * 1.25) + "px";
}

function initializeMenu() {
  var topMenu = document.getElementById("navbar");
  if (!isDefined(topMenu)) {
    return;
  }
  topMenu.innerHTML = "<div style='position: relative; width:100%;' class='navbar'>\
    <div class='menuItem'><a id='site' target='_parent' href='index.html'>Site</a></div>\
    <div class='menuItem'>\
      Blogs&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Posts:&nbsp;Opinions&nbsp;&amp;&nbsp;Ideas</div>\
          <div class='ddItem'><a href='Post_DistinguishedRust.html'>Distinguished Rust</a></div>\
          <div class='ddItem'><a href='Post_RustSafety.html'>Rust Safety</a></div>\
          <div class='ddItem'><a href='Post_RustTooling.html'>Rust Tooling</a></div>\
          <div class='ddItem'><a href='Post_RustStrings.html'>Rust Strings</a></div>\
          <div class='ddItem'><a href='Post_RustData.html'>Rust Data</a></div>\
          <div class='ddItem'><a href='Post_RustOperations.html'>Rust Operations</a></div>\
          <div class='ddItem'><a href='Post_CommCompare.html'>Comm Compare</a></div>\
          <div style='height:0.25em;'></div>\
          <div class='ddLabel darkItem'>Syracuse Univ Blogs</div>\
          <div class='ddItem'><a href='Blog.html'>First&nbsp;Things</a></div>\
          <div class='ddItem'><a href='BlogDesign.html'>SW&nbsp;Design</a></div>\
          <div class='ddItem'><a href='BlogPrinciples.html'>Design&nbsp;Principles</a></div>\
          <div class='ddItem'><a href='BlogOOD.html'>OO&nbsp;Design</a></div>\
          <div class='ddItem'><a href='BlogObjectModels.html'>Object&nbsp;Models</a></div>\
          <div class='ddItem'><a href='BlogGlobals.html'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data</a></div>\
          <div style='height:0.5em;'></div>\
          <div class='ddItem'><a href='BlogOCD.html'>Concept&nbsp;Document</a></div>\
          <div class='ddItem'><a href='BlogTesting.html'>SW&nbsp;Testing</a></div>\
          <div class='ddItem'><a href='BlogStructure.html'>SW&nbsp;Structure</a></div>\
          <div class='ddItem'><a href='BlogMessagePassingComm.html'>Msg-Passing&nbsp;Comm</a></div>\
          <div class='ddItem'><a href='BlogActiveObjects.html'>Active&nbsp;Objects</a></div>\
          <div style='height:0.5em;'></div>\
          <div class='ddItem'><a href='BlogNoSql.html'>noSQL&nbsp;Database</a></div>\
          <div class='ddItem'><a href='BlogParser.html'>Parsing</a></div>\
          <div class='ddItem'><a href='BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a></div>\
          <div class='ddItem'><a href='BlogMTree.html'>M-ary&nbsp;Trees</a></div>\
          <div class='ddItem'><a href='BlogGraph.html'>Directed&nbsp;Graphs</a></div>\
          <div class='ddItem'><a href='BlogFileSystem.html'>C++&nbsp;FileSystem</a></div>\
          <div class='ddItem'><a href='Blog_Prototype.html'>Blog Prototype</a></div>\
          <div style='height:1em;'>&nbsp;</div>\
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

  if (isDefined(page.nxtlnk)) {
    page.nxtlnk.setAttribute('href', page.nxt.href);
  }
  if (isDefined(page.nxtlnk2)) {
    page.nxtlnk2.setAttribute('href', page.nxt.href);
  }
  if (isDefined(page.prvlnk)) {
    page.prvlnk.setAttribute('href', page.prv.href);
  }
  if (isDefined(page.prvlnk2)) {
    page.prvlnk2.setAttribute('href', page.prv.href);
  }
  //page.nxt = document.getElementById("Next");
  //page.prv = document.getElementById("Prev");
  //page.nxtlnk = document.getElementById("nextLink");
  //page.prvlnk = document.getElementById("prevLink");
  //page.nxtlnk2 = document.getElementById("nextLink2");
  //page.prvlnk2 = document.getElementById("prevLink2");

  //if (isDefined(page.nxt)) {
  //  page.nxtlnk.setAttribute('href', page.nxt.href);
  //  page.nxtlnk2.setAttribute('href', page.nxt.href);
  //}
  //else {
  //  page.nxtlnk.style.display = "none";
  //  page.nxtlnk2.style.display = "none";
  //}

  //if (isDefined(page.prv)) {
  //  page.prvlnk.setAttribute('href', page.prv.href);
  //  page.prvlnk2.setAttribute('href', page.prv.href);
  //}
  //else {
  //  page.prvlnk.style.display = "none";
  //  page.prvlnk2.style.display = "none";
  //}


  //{
  //  if (isDefined(page.nxtlnk)) {
  //    page.nxtlnk.setAttribute('href', page.nxt.href);
  //  }
  //  else {
  //    page.nxtlnk.style.display = "none";
  //  }
  //  if (isDefined(page.nxtlnk2)) {
  //    page.nxtlnk2.setAttribute('href', page.nxt.href);
  //  }
  //  else {
  //    page.nxtlnk2.style.display = "none";
  //  }
  //}
  ////if (isDefined(page.prv))
  //if (!isDefined(page.prv)) {
  //  page.prv.style.display = "none";
  //}
  //{
  //  if (isDefined(page.prvlnk)) {
  //    page.prvlnk.setAttribute('href', page.prv.href);
  //  }
  //  else {
  //    page.prvlnk.style.display = "none";
  //  }
  //  if (isDefined(page.prvlnk2)) {
  //    page.prvlnk2.setAttribute('href', page.prv.href);
  //  }
  //  else {
  //    page.prvlnk2.style.display = "none";
  //  }
  //}

  //if (isDefined(page.nxtlnk) & isDefined(page.nxtlnk2)) {
  //  if (!isDefined(page.nxt)) {
  //    page.nxtlnk.style.display = "none";  // button top right menu
  //    page.nxtlnk2.style.display = "none";  // button bottom right menu
  //  }
  //  else {
  //    page.nxtlnk.setAttribute('href', page.nxt.href);
  //    page.nxtlnk2.setAttribute('href', page.nxt.href);
  //  }
  //}

//  if (isDefined(page.nxtlnk) & isDefined(page.nxtlnk2)) {
//    if (!isDefined(page.nxt)) {
//      page.nxtlnk.style.display = "none";  // button top right menu
//      page.nxtlnk2.style.display = "none";  // button bottom right menu
//    }
//    else {
//      page.nxtlnk.setAttribute('href', page.nxt.href);
//      page.nxtlnk2.setAttribute('href', page.nxt.href);
//    }
//  }

//  if (isDefined(page.prvlnk) & isDefined(page.prvlnk2))
//  {
//    if (!isDefined(page.prv))
//    {
//      page.prvlnk.style.display = "none";  // button top right menu
//      page.prvlnk2.style.display = "none";  // button bottom right menu
//    }
//    else {
//      page.prvlnk.setAttribute('href', page.prv.href);
//      page.prvlnk2.setAttribute('href', page.prv.href);
//    }
//  }
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
  document.getElementById("sections").style.display = "none";
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
  document.getElementById("pages").style.display = "none";
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
  menu.innerHTML = "About this page:" + "<br />";
  menu.innerHTML += "copyright(&#xA9;) Jim Fawcett, 2022-2024";
  if (isDefined(page)) {
    menu.innerHTML += "<br />" + page.innerText;
  }
  if (isDefined(date)) {
    menu.innerHTML += "<br />" + "Page last modified: " + date.innerText;
  }
  if (isDefined(menu)) {
    if (menu.style.display === "block") {
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

