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
      <button class='dropbutton'>Repos &#9662;</button>\
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
    <a href='Videos.html' class='menuItem'>Videos</a>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Blogs &#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Opinions&nbsp;and&nbsp;Ideas&nbsp;</div>\
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
      <button id=res class='dropbutton'>Res &#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Coding&nbsp;Resources&nbsp;</div>\
        <a href='Videos.html' class='menuItem'>Videos</a>\
        <a href='Resources.html'>Presentations&nbsp;&amp;&nbsp;Diagrams&nbsp;&nbsp;</a>\
        <a href='Conferences.html'>Conferences:&nbsp;videos&nbsp;&amp;&nbsp;slides&nbsp;&nbsp;</a>\
        <a href='Design.html'>Design Process</a>\
        <a href='ProjectsList.html'>Project suggestions</a>\
        <a href='RustStory_CodeIndex.html'>Rust code index</a>\
        <a href='LangCpp.html'>C++ Language Resources</a>\
        <a href='https://en.cppreference.com/w/'>CppReference.com</a>\
        <a href='https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md'>C++ Core Guidelines</a>\
        <a href='CppReferences.html'>C++ References</a>\
        <a href='CppExamples.html'>C++ Example Code</a>\
        <a href='CppSynopsis.html'>C++ Synopsis</a>\
        <a href='DesignNote-Cpp11.html'>C++11 Survey</a>\
        <a href='https://cs.lmu.edu/~ray/notes/regex/'>Regular Expressions</a>\
        <a href='https://dev.to/chrisachard/intro-to-regex-for-web-developers-2fj4'>RegExp&nbsp;for&nbsp;JavaScript</a>\
        <a href='http://cpprocks.com/files/c++11-regex-cheatsheet.pdf'>C++11 regex</a>\
        <a href='TechnicalLinks.html'>Technical Links</a>\
        <a href='WebNotes.html'>Web Notes</a>\
        <a href='WebComponentTests.html'>UI Widget Tests</a>\
        <a href='https://encycolorpedia.com/named'>Web Colors</a>\
        <a href='UML.html'>UML Diagrams</a>\
        <a href='Resources/PublishingSourceCode.pdf'>Site&nbsp;Presentation</a>\
        <a href='https://github.com/joshnh/Git-Commands'>git commands</a>\
        <a href='Resources/VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a>\
        <a href='SummerReading.html'>Summer Reading</a>\
        <a href='Interviews.html'>Job Interviews</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Nbrhds &#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Site&nbsp;Neighborhoods&nbsp;-&nbsp;related&nbsp;content&nbsp;&nbsp;</div>\
        <a href='https://JimFawcett.github.io'>JimFawcett-github</a>\
        <a href='https://ecs.syr.edu/faculty/fawcett'>JimFawcett-SyracuseUniv</a>\
        <a href='https://mwcorley79.github.io/MikeCorley/'>Mike Corley</a>\
        <a href='https://github.com/CommProjectComparisons'>CommProjectComparisons-github</a>\
        <a href='https://csiac.org'>CSIAC</a>\
        <a href='https://www.fluentcpp.com'>Fluent {C++}</a>\
        <a href='https://www.boost.org/'>Boost&nbsp;Library&nbsp;(C++)</a>\
        <a href='https://www.pocoproject.org/'>poco&nbsp;Library&nbsp;(C++ networking)</a>\
        <a href='https://openframeworks.cc/'>openFrameworks&nbsp;(C++ graphics)</a>\
        <a href='https://github.com/microsoft'>github.com/Microsoft</a>\
        <a href='https://www.taniarascia.com/'>taniarascia.com (JavaScript, CSS)</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div >\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Stories &#9662;</button>\
      <div class='dropdown-content noScrollX'>\
        <div class='darkItem maxWidth'>&nbsp;Ordered&nbsp;Content</div>\
        <a href='Stories.html'>What is a Story?</a>\
        <a href='IdiomsAndPatterns.html'>Idioms&nbsp;&amp;&nbsp;Patterns&nbsp;</a>\
        <a href='CppStory_Prologue.html'>C++ Story</a>\
        <a href='RustStory_Prologue.html'>Rust Story</a>\
        <a href='IndexPage.html'>Rust Glossary</a>\
        <a href='RustBiteByByte.html'>Rust&nbsp;bite&nbsp;by&nbsp;byte&nbsp;</a>\
        <a href='BuildOn.html'>BuildOn:&nbsp;learn&nbsp;Rust&nbsp;&nbsp;</a>\
        <a href='RustStory_CodeIndex.html'>Rust Code Index</a>\
        <a href='InfDataLib_1.html'>Inf Data Lib - A.Zaitsev</a>\
        <a href='MLiPS_1.html'>MLiPS - M.Corley</a>\
        <a href='StoryTeller_LocalStorage.html'>Load Story List</a>\
        <a href='StoryTellerDesign.html'>StoryTeller Design</a>\
        <a href='Resources/PublishingSourceCode.pdf'>Site&nbsp;Presentation</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div >\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>About &#9662;</button>\
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
        <a class='border' href='RsRepositories.html'>L2&nbsp;Repository&nbsp;webpage</a>\
        <a class='border' href='RustBiteByByte.html'>L3&nbsp;Rust&nbsp;Bites</a>\
        <a href='https://github.com/JimFawcett'>Repositories&nbsp;code</a>\
        <a href='SiteMap.html'>Site Map</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <a id='prevLink' class='nextprev' href='#'>Prev</a>\
    <a id='nextLink' class='nextprev' href='#'>Next</a>\
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
    if(isDefined(nKey))
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
    if(isDefined(pKey))
      pKey.style.display = "none";
  }
  else {
    document.getElementById("prevLink").href = prv.href;
    if(isDefined(pKey))
      pKey.style.display = "inline";
  }

  // show footer with copyright notice and revision date

  var rvsd = document.getElementsByTagName("info-bar");
  var date = document.lastModified;
  rvsd[0].innerHTML = 
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
    "copyright &copy; Jim Fawcett, 2020" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
    "Page Revised: " + date + "&nbsp;&nbsp;&nbsp;&nbsp;"
  rvsd[0].addEventListener('click', function () { location.reload(); });
  //rvsd[0].appendChild(nxt);
  //pKey.style.display = "inline";
  //rvsd[0].appendChild(prv);
  //rvsd[0].innerHTML = rvsd[0].innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;"
  //rvsd[0].appendChild(prv);
  //console.log(rvsd[0].innerHTML);
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
  if (!isDefined(sKey))
    return;
  //  if (typeof getSwipeEvents === 'function') {
  //  if (isDefined(getSwipeEvents))
  //  
  if (typeof getSwipeEvents === 'function') {
    let test = getSwipeEvents();
    if (test === 'true') {
      addSwipeListeners();
      sKey.innerHTML = 'S';
    }
    else {
      sKey.innerHTML = '<del>S</del>';
    }
  }
}

//----< load page defined in current page's Prev link >--------------

function loadPrev() {
  try {
    document.getElementById("Prev").click();
  }
  catch (err) {
    console.log('exception: ' + err);
  }
}
//----< load page defined in current page's Next link >--------------

function loadNext() {
  try {
    document.getElementById("Next").click();
  }
  catch (err) {
    console.log('exception: ' + err);
  }
}
//----< load page defined in current page's Lect link >--------------

//function loadLect() {
//  document.getElementById("Lect").click();  // Lect link is near top of first lect page
//}
////----< load page defined in current page's Cour link >--------------

//function loadCour() {
//  document.getElementById("Cour").click();  // Cour link is near top of course page
//}
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
    console.log('exception: ' + err);
    return;
  }
}
//----< setnavKeys display >-----------------------------------------

function setnavKeys() {
  try {
    var nkc = document.getElementsByTagName("navKeys-Container");
    if (!isDefined(localStorage))
      return;
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
//----< close TOC bar >----------------------------------------------
/*
 *  Developed for CppStory pages
 */
function closeTOC() {
  let toc = document.getElementById("toc");
  toc.style.display = "none";
}

