/////////////////////////////////////////////////////////////////////
// ScriptsMenu.js - Constructs dropdown menu for Top Level Pages   //
//                                                                 //
// Jim Fawcett, Website, 25 June 2018                              //
/////////////////////////////////////////////////////////////////////

//----< called in body.onload to initial menus and footer >----------
/*
 *  This function is specific for the menu on top-level pages 
 */
function initializeMenu() {

  // create top menu

  var topMenu = document.getElementsByTagName("nav");
  topMenu[0].innerHTML = "<div class='navbar'>\
    <a href='index.html' class='menuItem'>Home</a>\
    <a href='Repositories.html' class='menuItem'>Repositories</a>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Utils &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='CppUtilities.html'>CppUtilities</a>\
        <a href='FileUtilities.html'>FileUtilities</a>\
        <a href='Logger.html'>Logger</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Tools &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='TextFinder.html'>TextFinder</a>\
        <a href='Duplicates.html'>Duplicates</a>\
        <a href='FileDates.html'>FileDates</a>\
        <a href='FileSizes.html'>FileSizes</a>\
        <a href='FindFiles.html'>FindFiles</a>\
        <a href='Diff_WPF.html'>Diff_WPF</a>\
        <a href='CodeWebifier.html'>CodeWebifier</a>\
        <a href='PrettyPrint.html'>PrettyPrint</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Cmpnts &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='CppBlockingQueue.html'>CppBlockingQueue</a>\
        <a href='FileManager.html'>File Manager</a>\
        <a href='CppProperties.html'>CppProperties</a>\
        <a href='ThreadPool.html'>ThreadPool</a>\
        <a href='Process.html'>Process</a>\
        <a href='CppConcurrentFileAccess.html'>CppConcurrentFileAccess</a>\
        <a href='CppLexicalScanner.html'>CppLexicalScanner</a>\
        <a href='RetryWrapper.html'>RetryWrapper</a>\
        <a href='WebComponents.html'>WebComponents</a>\
        <a href='Tests.html'>Tests</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Libs &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='FileSystem.html'>FileSystem-Windows</a>\
        <a class='disable' href='FileSystem.html'>FileSystem-Linux</a>\
        <a href='Sockets.html'>Sockets-Windows</a>\
        <a class='disable' href='Sockets.html'>Sockets-Linux</a>\
        <a href='XmlDocument.html'>XmlDocument</a>\
        <a href='CppGraph.html'>CppGraph</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Prjts &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='SitePages.html'>SitePages</a>\
        <a href='CppParser.html'>CppParser</a>\
        <a href='CppCodeAnalyzer.html'>CppCodeAnalyzer</a>\
        <a href='CsDependencyAnalysis.html'>CsDependencyAnalysis</a>\
        <a href='CppCommWithFileXfer.html'>CppCommWithFileXfer</a>\
        <a href='CppHttpClientServer.html'>CppHttpClientServer</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Demos &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='CppBasicDemos.html'>C++&nbsp;Basic&nbsp;Demos</a>\
        <a href='STR.html'>STR&nbsp;Value&nbsp;Type</a>\
        <a href='CompoundObjects.html'>CompoundObjects</a>\
        <a href='STL-Containers.html'>STL-Containers</a>\
        <a href='IOStreams.html'>IOStreams</a>\
        <a href='CppThreads.html'>CppThreads</a>\
        <a href='ProcAndThreads.html'>ProcsAndThreads</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Build &#9662;</button>\
      <div class='dropdown-content'>\
        <a class='disable' href='#'>Build Demo</a>\
        <a class='disable' href='#'>Build Structure</a>\
        <a class='disable' href='#'>Build from repo</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>About &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='JimFawcett.html'>Jim Fawcett</a>\
        <a href='Help.html'>Help</a>\
        <a href='ToDo.html'>ToDo</a>\
        <a href='#' onclick='toggleNavKeys()'>Toggle Nav Keys</a>\
        <a href='SiteDesign.html'>Site Design</a>\
        <a href='BookDesignCourse.html'>Design Course</a>\
        <a class='border' href='index.html'>L1 Site Home</a>\
        <a class='border' href='Repositories.html'>L2 Repository&nbsp;webpage</a>\
        <a class='border' href='LangCpp.html'>L2 C++&nbsp;webpage</a>\
        <a href='https://github.com/JimFawcett'>Repositories&nbsp;code</a>\
        <a href='SiteMap.html'>Site Map</a>\
      </div>\
    </div>\
    <button class='pageScroll' onclick='scrollPageTop()'>Top</button>\
    <button class='pageScroll' onclick='scrollPageBottom()'>Bottom</button>\
    <a id='prevLink' class='nextprev' href='#'>Prev</a>\
    <a id='nextLink' class='nextprev' href='#'>Next</a>\
    <button class='menuScroll' onclick='scrollMenuLeft()'>&lt;</button>\
    <button class='menuUnscroll' onclick='scrollMenuRight()'>&gt;</button>\
  </div >\
  <div style='clear:all;'></div>";

  // hide Next and Prev links if page has no next or previous pages
  // otherwise load href from page link

  var nxt = document.getElementById("Next");
  if (nxt === null) {
    document.getElementById("nextLink").style.display = "none";  // button top right menu
  }
  else {
    document.getElementById("nextLink").href = nxt.href;
  }

  var prv = document.getElementById("Prev");
  if (prv === null) {
    document.getElementById("prevLink").style.display = "none";  // button top right menu
  }
  else {
    document.getElementById("prevLink").href = prv.href;
  }

  // show footer with copyright notice and revision date

  var rvsd = document.getElementsByTagName("info-bar");
  var date = document.lastModified;
  rvsd[0].innerHTML = "copyright &copy; Jim Fawcett, 2019&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page Revised: " + date;
  rvsd[0].addEventListener('click', function () { location.reload(); });

  // set display mode for navKeys from value in local storage

  setNavKeys();
  setImageSizer();

  // listen for keyboard events:
  // - key actions are defined in ScriptsKeyboard.js

  document.addEventListener('keydown', (event) => { keyAction(event); }, false);

  // listen for mouse events:
  // - mouse actions are defined below

  document.addEventListener('mousedown', (event) => { mouseAction(event); }, false);

  // bind more-less click event

  var elems = document.getElementsByTagName("more-less");
  for (var i = 0; i < elems.length; ++i) {
    elems[i].addEventListener("click", (event) => { toggleVisibility(event); }, false);
  }
}

//----< load page defined in current page's Prev link >--------------

function loadPrev() {
  document.getElementById("Prev").click();
}
//----< load page defined in current page's Next link >--------------

function loadNext() {
  document.getElementById("Next").click();
}
//----< load page defined in current page's Lect link >--------------

function loadLect() {
  document.getElementById("Lect").click();  // Lect link is near top of first lect page
}
//----< load page defined in current page's Cour link >--------------

function loadCour() {
  document.getElementById("Cour").click();  // Cour link is near top of course page
}
//----< hide, progressively, menu items on the left >----------------
/*
*  This let's user see menu items that overflow on the right
*  due to page size.
*/
function scrollMenuLeft() {
  var items = document.getElementsByClassName("menuItem");
  var i;
  for (i = 0; i < items.length; ++i) {
    var cpprp = window.getComputedStyle(items[i], null).getPropertyValue("display");
    if (cpprp !== "none") {
      items[i].style.display = "none";
      break;
    }
  }
}
//----< restore, progressively, menu items on the left >-------------
/*
*  This let's user restore menu items hidden by the previous
*  function.
*/
function scrollMenuRight() {
  var items = document.getElementsByClassName("menuItem");
  var len = items.length;
  var i;
  for (i = 0; i < items.length; ++i) {
    var cpprp = window.getComputedStyle(items[len - i - 1], null).getPropertyValue("display");
    if (cpprp !== "block") {
      items[len-i-1].style.display = "block";
      break;
    }
  }
}
//----< scroll page to top >-----------------------------------------

function scrollPageTop() {
  window.scrollTo(0, 0);
}
//----< scroll page to bottom >--------------------------------------

function scrollPageBottom() {
  window.scrollTo(0, 100000);
}
//----< toggle nav keys display >------------------------------------
/*
*  NavKeys are TBHNP keys at bottom right of each page
*/
function toggleNavKeys() {
  var nkc = document.getElementsByTagName("navKeysContainer");
  var tog = window.getComputedStyle(nkc[0], null).getPropertyValue("display");
  if (tog === "none") {
    nkc[0].style.display = "inline";
    window.localStorage.setItem("navKeyState", "show");  // persist change across pages
  }
  else {
    nkc[0].style.display = "none";
    window.localStorage.setItem("navKeyState", "hide");  // persist chage across pages
  }
}
//----< setNavKeys display >-----------------------------------------

function setNavKeys() {
  var nkc = document.getElementsByTagName("navKeysContainer");
  var navKeyState = window.localStorage.getItem("navKeyState");
  if (navKeyState === null) {
    nkc[0].style.display = "inline";
    window.localStorage.setItem("navKeyState", "show");
    return;
  }
  if (navKeyState === "show") {
    nkc[0].style.display = "inline";
  }
  else {
    nkc[0].style.display = "none";
  }
}
//----< toggle image sizer display >-----------------------------------
/*
*  Image sizers appear to the right of some images
*/
function toggleImageSizer() {
  var nkc = document.getElementsByTagName("sizer-Container");
  var tog = window.getComputedStyle(nkc[0], null).getPropertyValue("display");
  for (let i = 0; i < nkc.length; ++i) {
    if (tog === "none") {
      nkc[i].style.display = "inline";
      window.localStorage.setItem("imageSizerState", "show");  // persist change across pages
    }
    else {
      nkc[i].style.display = "none";
      window.localStorage.setItem("imageSizerState", "hide");  // persist chage across pages
    }
  }
}
//----< set image sizer display >-----------------------------------------

function setImageSizer() {
  var nkc = document.getElementsByTagName("sizer-Container");
  var navKeyState = window.localStorage.getItem("imageSizerState");

  for (let i = 0; i < nkc.length; ++i) {
    if (navKeyState === null) {
      nkc[i].style.display = "inline";
      window.localStorage.setItem("imageSizerState", "show");
      return;
    }
    if (navKeyState === "show") {
      nkc[i].style.display = "inline";
    }
    else {
      nkc[i].style.display = "none";
    }
  }
}
//----< toggle nav keys display >------------------------------------
/*
*   On right click, Toggle display of NavKeys TBHNP
*     unless target is anchor, then
*   open link in new tab 
*/
function mouseAction(event) {

  if (event.button === 2) {
    if (event.target.tagName === 'A') {
      window.open(event.target, "_newtab" + Math.floor(Math.random() * 999999));
    }
    else {
      toggleNavKeys();
    }
  }
}
