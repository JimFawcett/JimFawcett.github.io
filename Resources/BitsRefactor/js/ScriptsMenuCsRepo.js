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
    <a href='index.html' class='menuItem'>&nbsp;&nbsp;Home</a>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Tracks&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Language&nbsp;Tracks&nbsp;&nbsp;</div>\
        <a href='indexBasic.html'>Basics&nbsp;&nbsp;</a>\
        <a href='indexCpp.html'>C++&nbsp;Track&nbsp;&nbsp;</a>\
        <a href='https://www.w3schools.com/cpp/trycpp.asp?filename=demo_compiler' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a>\
        <a href='indexRust.html'>Rust&nbsp;Track&nbsp;&nbsp;</a>\
        <a href='https://play.rust-lang.org/' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a>\
        <a href='indexCs.html'>C#&nbsp;Track&nbsp;&nbsp;</a>\
        <a href='https://dotnetfiddle.net/' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a>\
        <div style='padding:0px 10px; margin:0px; font-size:smallest;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Repos&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Code&nbsp;Repositories&nbsp;&nbsp;</div>\
        <a href='CppRepositories.html'>C++&nbsp;Repositories&nbsp;&nbsp;</a>\
        <a href='CsRepositories.html'>C#&nbsp;Repositories&nbsp;&nbsp;</a>\
        <a href='RsRepositories.html'>Rust&nbsp;Repositories&nbsp;&nbsp;</a>\
        <a href='JsRepositories.html'>JS&nbsp;Repositories&nbsp;&nbsp;</a>\
        <a href='OtherRepositories.html'>Other&nbsp;Repositories&nbsp;&nbsp;</a>\
        <div style='padding:0px 10px; margin:0px; font-size:smallest;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Utils&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Utilities</div>\
        <div class='maxWidth'>&nbsp;None yet&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Tools&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Tools</div>\
        <a href='Diff_WPF.html'>Diff_WPF</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Cmps&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Components</div>\
        <a href='CsBlockingQueue.html'>CsBlockingQueue</a>\
        <a href='CsNavigator.html'>CsNavigator</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Libs&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Libraries</div>\
        <a href='CsConcurrentFileAccess.html'>CsConcurrentFileAccess</a>\
        <a href='CsGraph.html'>CsGraph</a>\
        <a href='CsParser.html'>CsParser</a>\
        <a href='CsXDocument.html'>CsXDocument</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Prjs&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Projects</div>\
        <a href='CsDependencyAnalysis.html'>CsDependencyAnalysis</a>\
        <a href='CsCommPrototype.html'>CsCommPrototype</a>\
        <a href='CsRemotePluggableRepo.html'>CsRemotePluggableRepo</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Dems&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Demonstrations</div>\
        <a href='CsBasicDemos.html'>CsBasicDemos</a>\
        <a href='Cs_WCF_Demos.html'>WCF Demos</a>\
        <a href='Cs_WPF_Demos.html'>WPF Demos</a>\
        <a href='CsProcess.html'>CsProcess</a>\
        <a href='CsPublisherSubscriber.html'>CsPublisherSubscriber</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Stories&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Stories&nbsp;&amp;&nbsp;Bites</div>\
        <a href='Stories.html'>What is a Story?</a>\
        <a href='BasicBiteByByte.html'>Basics Story</a>\
        <a href='DesignBites.html'>Design Story</a>\
        <a href='CppStoryRepo.html'>C++ Story</a>\
        <a href='RustStoryRepo.html'>Rust Story</a>\
        <a href='RustBiteByByte.html'>Rust&nbsp;bite&nbsp;by&nbsp;byte&nbsp;</a>\
        <a href='BuildOn.html'>BuildOn:&nbsp;learn&nbsp;Rust&nbsp;&nbsp;</a>\
        <a href='IdiomsAndPatterns.html'>Idioms&nbsp;&amp;&nbsp;Patterns&nbsp;</a>\
        <a href='IndexPage.html'>Rust Glossary</a>\
        <a href='InfDataLib_1.html'>Inf Data Lib - A.Zaitsev</a>\
        <a href='MLiPS_1.html'>MLiPS - M.Corley</a>\
        <a href='StoryTeller_LocalStorage.html'>StoryTeller&nbsp;depricated</a>\
        <a href='StoryTellerDesign.html'>StoryTeller Design</a>\
        <a href='Resources/PublishingSourceCode.pdf'>Site&nbsp;Presentation</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div >\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>About&#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;About&nbsp;this&nbsp;Site</div>\
        <a href='JimFawcett.html'>Jim Fawcett</a>\
        <a href='Interesting.html'>Interesting&nbsp;things&nbsp;&nbsp;</a>\
        <a href='Friends.html'>Friends&nbsp;&amp&nbsp;Collaborators&nbsp;&nbsp;</a>\
        <a href='Help.html'>Help</a>\
        <a href='SitePlans.html'>Site Plans</a>\
        <a href='#' onclick='togglenavKeys()'>Toggle Nav Keys</a>\
        <a href='#' onclick='toggleSwipeEvents()'>Toggle Swipe Events</a>\
        <a href='SiteDesign.html'>Site Design</a>\
        <a href='BookDesignCourse.html'>Design Course</a>\
        <a class='border' href='index.html'>L1 Site Home</a>\
        <a class='border' href='CsRepositories.html'>L2&nbsp;C#&nbsp;Repository&nbsp;webpage</a>\
        <a class='border' href='CppStory_Prologue.html'>L3&nbsp;C++&nbsp;Story</a>\
        <a href='https://github.com/JimFawcett'>Repositories&nbsp;code</a>\
        <a href='SiteMap.html'>Site Map</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <a id='prevLink' class='menuItem' href='#'>Prev</a>\
    <a id='nextLink' class='menuItem' href='#'>Next</a>\
    <button class='pageScroll' onclick='scrollPageTop()'>Top</button>\
    <button class='pageScroll' onclick='scrollPageBottom()'>Bottom</button>\
    <button class='menuScroll' onclick='scrollMenuLeft()'>&lt;</button>\
    <button class='menuUnscroll' onclick='scrollMenuRight()'>&gt;</button>\
  </div >\
  <div style='clear:all;'></div>";

  // hide Next and Prev links if page has no next or previous pages
  // otherwise load href from page link

  var nxt = document.getElementById("Next");
  var nKey = document.getElementById("nKey");
  var swKey = document.getElementById("sKey");
  if (nxt === null) {
    document.getElementById("nextLink").style.display = "none";  // button top right menu
    if (isDefined(nKey))
      nKey.style.display = "none";
    if (isDefined(swKey))
      swKey.style.display = "none";
  }
  else {
    document.getElementById("nextLink").href = nxt.href;
    if (isDefined(nKey))
      nKey.style.display = "inline";
    if (isDefined(swKey))
      swKey.style.display = "inline";
  }

  var prv = document.getElementById("Prev");
  var pKey = document.getElementById("pKey");
  if (prv === null) {
    document.getElementById("prevLink").style.display = "none";  // button top right menu
    if (isDefined(pKey))
      pKey.style.display = "none";
  }
  else {
    document.getElementById("prevLink").href = prv.href;
    if (isDefined(pKey))
      pKey.style.display = "inline";
  }

  // show footer with copyright notice and revision date

  var rvsd = document.getElementsByTagName("info-bar");
  var date = document.lastModified;
  rvsd[0].innerHTML = "copyright &copy; Jim Fawcett, 2019&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page Revised: " + date;
  rvsd[0].addEventListener('click', function () { location.reload(); });

  // set display mode for navKeys from value in local storage

  setnavKeys();
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
  let sKey = document.getElementById('sKey');
  let test = getSwipeEvents();
  if (test === 'true') {
    addSwipeListeners();
    sKey.innerHTML = 'S';
  }
  else {
    sKey.innerHTML = '<del>S</del>';
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
      items[len - i - 1].style.display = "block";
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
*  navKeys are TBHNP keys at bottom right of each page
*/
function togglenavKeys() {
  try {
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
  catch (err) {
    return;
  }
}
//----< setnavKeys display >-----------------------------------------

function setnavKeys() {
  try {
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
  catch (err) {
    console.log('exception: ' + err);
    return;
  }
}
//----< toggle image sizer display >-----------------------------------
/*
*  Image sizers appear to the right of some images
*/
function toggleImageSizer() {
  try {
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
  catch (err) {
    console.log('exception: ' + err);
    return;
  }
}
//----< set image sizer display >-----------------------------------------

function setImageSizer() {
  try {
    var nkc = document.getElementsByTagName("sizer-Container");
    var imageSizerState = window.localStorage.getItem("imageSizerState");

    for (let i = 0; i < nkc.length; ++i) {
      if (imageSizerState === null) {
        nkc[i].style.display = "inline";
        window.localStorage.setItem("imageSizerState", "show");
        return;
      }
      if (imageSizerState === "hide") {
        nkc[i].style.display = "none";
      }
      if (imageSizerState === "show") {
        nkc[i].style.display = "inline";
      }
      else {
        nkc[i].style.display = "none";
      }
    }
  }
  catch (err) {
    console.log('exception: ' + err);
    return;
  }
}
//----< toggle nav keys display >------------------------------------
/*
*   On right click, Toggle display of navKeys TBHNP
*     unless target is anchor, then
*   open link in new tab 
*/
function mouseAction(event) {

  if (event.button === 2) {
    if (event.target.tagName === 'A') {
      window.open(event.target, "_newtab" + Math.floor(Math.random() * 999999));
    }
    else {
      //togglenavKeys();
      togglenavKeys();
    }
  }
}
