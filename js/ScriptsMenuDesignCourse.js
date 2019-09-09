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
    <a href='Repositories.html' class='menuItem darkItem' style='margin:0px;'>Repos</a>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Notes &#9662;</button>\
      <div class='dropdown-content'>\
        <div class='darkTheme'>&nbsp;Developing&nbsp;Code</div>\
        <a href='DesignProcess.html'>Design Process</a>\
        <a href='ProjectsList.html'>Project suggestions</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Blogs &#9662;</button>\
      <div class='dropdown-content'>\
        <div class='darkTheme'>&nbsp;Opinions&nbsp;and&nbsp;Ideas</div>\
        <a href='Blog.html'>First&nbsp;Things</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Design&nbsp;--------------&nbsp;</div>\
        <a href='BlogDesign.html'>SW&nbsp;Design</a>\
        <a href='BlogPrinciples.html'>Design&nbsp;Principles</a>\
        <a href='BlogOOD.html'>OO&nbsp;Design</a>\
        <a href='BlogObjectModels.html'>Object&nbsp;Models</a>\
        <a href='BlogGlobals.html'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data&nbsp;&nbsp;</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Engineering&nbsp;SW&nbsp;---</div>\
        <a href='BlogOCD.html'>Concept&nbsp;Document</a>\
        <a href='BlogTesting.html'>SW&nbsp;Testing</a>\
        <a href='SummerReading.html'>Summer&nbsp;Reading</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Software&nbsp;Sys&nbsp;------</div>\
        <a href='BlogStructure.html'>SW&nbsp;Structure</a>\
        <a href='BlogMessagePassingComm.html'>Msg-Passing&nbsp;Comm</a>\
        <a href='BlogActiveObjects.html'>Active&nbsp;Objects</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Reusable&nbsp;Pkgs&nbsp;----</div>\
        <a href='BlogNoSql.html'>noSQL&nbsp;Database</a>\
        <a href='BlogParser.html'>Parsing</a>\
        <a href='BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a>\
        <a href='BlogMTree.html'>M-ary&nbsp;Trees</a>\
        <a href='BlogGraph.html'>Directed&nbsp;Graphs</a>\
        <a href='BlogFileSystem.html'>C++&nbsp;FileSystem</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Resources &#9662;</button>\
      <div class='dropdown-content'>\
        <div class='darkTheme'>&nbsp;Coding&nbsp;Resources</div>\
        <a href='https://en.cppreference.com/w/'>CppReference.com</a>\
        <a href='https://cs.lmu.edu/~ray/notes/regex/'>Regular Expressions</a>\
        <a href='http://cpprocks.com/files/c++11-regex-cheatsheet.pdf'>C++11 regex</a>\
        <a href='https://github.com/joshnh/Git-Commands'>git commands</a>\
        <a href='UML.html'>UML Diagrams</a>\
        <a href='Resources/VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a>\
        <a href='SummerReading.html'>Summer Reading</a>\
        <a href='Resources.html'>Presentations&nbsp;&amp;&nbsp;Diagrams</a>\
        <a href='WebNotes.html'>Web Notes</a>\
        <a href='https://encycolorpedia.com/named'>Web Colors</a>\
        <a href='CppReferences.html'>C++ References</a>\
        <a href='CppExamples.html'>C++ Examples</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Prog Lang &#9662;</button>\
      <div class='dropdown-content'>\
        <div class='darkTheme'>&nbsp;Programming&nbsp;Languages&nbsp;</div>\
        <a href='LangCpp.html'>C++</a>\
        <a class='disable' href='#'>C#</a>\
        <a class='disable' href='#'>HTML</a>\
        <a class='disable' href='#'>CSS</a>\
        <a class='disable' href='#'>JavaScript</a>\
        <a class='disable' href='#'>Java</a>\
        <a class='disable' href='#'>Rust</a>\
        <a class='disable' href='#'>Go</a>\
        <a class='disable' href='#'>Python</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Design Book &#9662;</button>\
      <div class='dropdown-content'>\
        <div class='darkTheme'>&nbsp;Book&nbsp;Contents&nbsp;</div>\
        <a class='disable' href='#'>Table of Contents</a>\
        <a class='disable' href='#'>Concept&nbsp;and&nbsp;Tasks&nbsp;(TextFinder)</a>\
        <a class='disable' href='#'>Classes (CppUtilities)</a>\
        <a class='disable' href='#'>Inheritance (XmlDocument)</a>\
        <a class='disable' href='#'>Templates (Properties)</a>\
        <a class='disable' href='#'>Flexible Designs (DirExplorer)</a>\
        <a class='disable' href='#'>Components (Parser)</a>\
        <a class='disable' href='#'>Project Structures</a>\
        <a class='disable' href='#'>Threads (ThreadPool)</a>\
        <a class='disable' href='#'>Sockets&nbsp;(MsgPassingCommunication)</a>\
        <a class='disable' href='#'>Build Process (TextFinder)</a>\
        <a class='disable' href='#'>Testing&nbsp;(FileSystem-Windows)</a>\
        <a class='disable' href='#'>Appendix:&nbsp;<u>U</u>niversal&nbsp;<u>M</u>odeling&nbsp;<u>L</u>anguage</a>\
        <a class='disable' href='#'>Appendix:&nbsp;Implementation&nbsp;metrics</a>\
        <a class='disable' href='#'>Appendix: Design Patterns</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>About &#9662;</button>\
      <div class='dropdown-content'>\
        <div class='darkTheme'>&nbsp;About&nbsp;this&nbsp;Site</div>\
        <a href='JimFawcett.html'>Jim Fawcett</a>\
        <a href='Help.html'>Help</a>\
        <a href='ToDo.html'>ToDo</a>\
        <a href='#' onclick='toggleNavKeys()'>Toggle Nav Keys</a>\
        <a href='#' onclick='toggleSwipeEvents()'>Toggle Swipe Events</a>\
        <a href='SiteDesign.html'>Site Design</a>\
        <a href='BookDesignCourse.html'>Design Course</a>\
        <a class='border' href='index.html'>L1 Site Home</a>\
        <a class='border' href='Repositories.html'>L2&nbsp;Repository&nbsp;webpage</a>\
        <a class='border' href='LangCpp.html'>L2&nbsp;C++&nbsp;webpage</a>\
        <a href='https://github.com/JimFawcett'>Repositories&nbsp;code</a>\
        <a href='SiteMap.html'>Site Map</a>\
        <a href='Menus.html'>Menus</a>\
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
  var nkc = document.getElementsByTagName("navKeys-Container");
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
  var nkc = document.getElementsByTagName("navKeys-Container");
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
      //toggleNavKeys();
      toggleNavKeys();
    }
  }
}
