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
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Repositories &#9662;</button>\
      <div class='dropdown-content'>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Utilities&nbsp;----------&nbsp;</div>\
        <a href='../cppUtilities'>CppUtilities</a>\
        <a class='disable' href='../Documentation/Experiment.htm'>Logger</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Tools&nbsp;------------&nbsp;</div>\
        <a href='../Documentation/Experiment.htm'>TextFinder</a>\
        <a class='disable' href='../Documentation/Experiment.htm'>Duplicates</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Components&nbsp;---&nbsp;</div>\
        <a class='disable' href='../Documentation/Experiment.htm'>Blocking Queue</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Demos&nbsp;---------&nbsp;</div>\
        <a class='disable' href='../Documentation/Experiment.htm'>IOStreams</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Documents &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../Documentation/Experiment.htm'>Repository Index</a>\
        <a href='../Documentation/Experiment.htm'>Blog Index</a>\
        <a href='../Documentation/Experiment.htm'>Design Notes</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Blogs &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../webpages/Blog.htm'>First&nbsp;Things</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Design&nbsp;--------------&nbsp;</div>\
        <a href='../webpages/BlogDesign.htm'>SW&nbsp;Design</a>\
        <a href='../webpages/BlogPrinciples.htm'>Design&nbsp;Principles</a>\
        <a href='../webpages/BlogOOD.htm'>OO&nbsp;Design</a>\
        <a href='../webpages/BlogObjectModels.htm'>Object&nbsp;Models</a>\
        <a href='../webpages/BlogGlobals.htm'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data&nbsp;&nbsp;</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Engineering&nbsp;SW&nbsp;---</div>\
        <a href='../webpages/BlogOCD.htm'>Concept&nbsp;Document</a>\
        <a href='../webpages/BlogTesting.htm'>SW&nbsp;Testing</a>\
        <a href='../webpages/SummerReading.htm'>Summer&nbsp;Reading</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Software&nbsp;Sys&nbsp;------</div>\
        <a href='../webpages/BlogStructure.htm'>SW&nbsp;Structure</a>\
        <a href='../webpages/BlogMessagePassingComm.htm'>Msg-Passing&nbsp;Comm</a>\
        <a href='../webpages/BlogActiveObjects.htm'>Active&nbsp;Objects</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Reusable&nbsp;Pkgs&nbsp;----</div>\
        <a href='../webpages/BlogNoSql.htm'>noSQL&nbsp;Database</a>\
        <a href='../webpages/BlogParser.htm'>Parsing</a>\
        <a href='../webpages/BlogCodeAnalyzer.htm'>Code&nbsp;Analyzer</a>\
        <a href='../webpages/BlogMTree.htm'>M-ary&nbsp;Trees</a>\
        <a href='../webpages/BlogGraph.htm'>Directed&nbsp;Graphs</a>\
        <a href='../webpages/BlogFileSystem.htm'>C++&nbsp;FileSystem</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Resources &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../webpages/Help/VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a>\
        <a href='../Webpages/SummerReading.htm'>Reading</a>\
        <a href='../Webpages/SummerProjects.htm'>Projects</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>About &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../webpages/FawcettAbout.htm'>Jim Fawcett</a>\
        <a href='../webpages/Help.html'>Help</a>\
        <a href='#' onclick='toggleNavKeys()'>Nav Keys</a>\
        <a href='../webpages/SiteDesign.htm'>Site Design</a>\
        <a href='../Webpages/FawcettHome.htm'>Site Home</a>\
        <a href='../Webpages/SiteMap.htm'>Site Map</a>\
      </div>\
    </div>\
    <button class='pageScroll' onclick='scrollPageTop()'>Top</button>\
    <button class='pageScroll' onclick='scrollPageBottom()'>Bottom</button>\
    <a id='prevLink' class='nextprev' href='#'>Prev</a>\
    <a id='nextLink' class='nextprev' href='#'>Next</a>\
    <button class='menuScroll' onclick='scrollMenuLeft()'>&lt;</button>\
    <button class='menuUnscroll' onclick='scrollMenuRight()'>&gt;</button>\
  </div >\
  <div style='clear:all;'></div>"

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
  rvsd[0].innerHTML = "copyright &copy; Jim Fawcett, 2018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page Revised: " + date;

  // set display mode for navKeys from value in local storage

  setNavKeys();

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
    if (cpprp != "block") {
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
