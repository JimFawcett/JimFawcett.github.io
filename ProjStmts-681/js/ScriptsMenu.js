/////////////////////////////////////////////////////////////////////
// ScriptsMenu.js - Constructs dropdown menu for top-level pages   //
//                                                                 //
// Jim Fawcett, 25 June 2018                                       //
/////////////////////////////////////////////////////////////////////

//----< called in body.onload to initial menus and footer >----------
/*
 *  This function is specific for the menu on top-level pages 
 */
function initializeMenu() {

  // create top menu

  var topMenu = document.getElementsByTagName("nav");
  topMenu[0].innerHTML = "<div class='navbar'>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Courses &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../../webpages/CSE681.htm#syllabus'>CSE681&nbsp;Syllabus</a>\
        <a href='../../webpages/CSE681.htm'>CSE681-SMA</a>\
        <a href='../../webpages/CSE686.htm'>CSE686-IP</a>\
        <a href='../../webpages/CSE687.htm'>CSE687-OOD</a>\
        <a href='../../webpages/CSE775.htm'>CSE775-DO</a>\
        <a href='../../webpages/CSE776.htm'>CSE776-DP</a>\
        <a href='../../webpages/Code.htm'>Code</a>\
        <a href='../../webpages/Presentations.htm'>Presentations</a>\
        <a href='../../webpages/OfficeHours.htm'>Office Hours</a>\
        <a href='../../webpages/FawcettHome.htm'>Site Home</a>\
        <a href='../../Webpages/SiteMap.htm'>Site Map</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Lectures &#9662;</button>\
      <div class='dropdown-content'>\
        <a class='lectItem' href='CSE681codeL1.htm'>L01&nbsp;-&nbsp;Introduction</a>\
        <a class='lectItem' href='CSE681codeL2.htm'>L02&nbsp;-&nbsp;SW&nbsp;Arch</a>\
        <a class='lectItem' href='CSE681codeL3.htm'>L03&nbsp;-&nbsp;SW&nbsp;Arch</a>\
        <a class='lectItem' href='CSE681codeL4.htm'>L04&nbsp;-&nbsp;C#&nbsp;Language</a>\
        <a class='lectItem' href='CSE681codeL5.htm'>L05&nbsp;-&nbsp;C#&nbsp;Language</a>\
        <a class='lectItem' href='CSE681codeL6.htm'>L06&nbsp;-&nbsp;C#&nbsp;Language</a>\
        <a class='lectItem' href='CSE681codeL7.htm'>L07&nbsp;-&nbsp;XML</a>\
        <a class='lectItem' href='CSE681codeL8.htm'>L08&nbsp;-&nbsp;Linq</a>\
        <a class='lectItem' href='CSE681codeL9.htm'>L09&nbsp;-&nbsp;Threads</a>\
        <a class='lectItem' href='CSE681codeL10.htm'>L10&nbsp;-&nbsp;Threads</a>\
        <a class='lectItem' href='CSE681codeL11.htm'>L11&nbsp;-&nbsp;WCF</a>\
        <a class='lectItem' href='CSE681codeL12.htm'>L12&nbsp;-&nbsp;WCF</a>\
        <a class='lectItem' href='CSE681codeL13.htm'>L13&nbsp;-&nbsp;Win&nbsp;GUIs</a>\
        <a class='lectItem' href='CSE681codeL14.htm'>L14&nbsp;-&nbsp;WPF</a>\
        <a class='lectItem' href='CSE681codeL15.htm'>L15&nbsp;-&nbsp;WPF</a>\
        <a class='lectItem' href='CSE681codeL16.htm'>L16&nbsp;-&nbsp;Projects&nbsp;#3&nbsp;&amp;&nbsp;#4</a>\
        <a class='lectItem' href='CSE681codeL17.htm'>L17&nbsp;-&nbsp;Async&nbsp;Systems</a>\
        <a class='lectItem' href='CSE681codeL18.htm'>L18&nbsp;-&nbsp;Test&nbsp;Harness</a>\
        <a class='lectItem' href='CSE681codeL19.htm'>L19&nbsp;-&nbsp;Midterm&nbsp;Review</a>\
        <a class='lectItem' href='CSE681codeL20.htm'>L20&nbsp;-&nbsp;Midterm</a>\
        <a class='lectItem' href='CSE681codeL21.htm'>L21&nbsp;-&nbsp;CLR</a>\
        <a class='lectItem' href='CSE681codeL22.htm'>L22&nbsp;-&nbsp;Interop</a>\
        <a class='lectItem' href='CSE681codeL23.htm'>L23&nbsp;-&nbsp;System&nbsp;Structure</a>\
        <a class='lectItem' href='CSE681codeL24.htm'>L24&nbsp;-&nbsp;Midterm&nbsp;Results</a>\
        <a class='lectItem' href='CSE681codeL25.htm'>L25&nbsp;-&nbsp;Qing</a>\
        <a class='lectItem' href='CSE681codeL26.htm'>L26&nbsp;-&nbsp;Enterprise&nbsp;Systems</a>\
        <a class='lectItem' href='CSE681codeL27.htm'>L27&nbsp;-&nbsp;FP&nbsp;Help</a>\
        <a class='lectItem' href='CSE681codeL28.htm'>L28&nbsp;-&nbsp;Where&nbsp;Next?</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Projects &#9662;</button>\
      <div class='dropdown-content'>\
        <a class='projItem' href='Project1-F2018.htm'>Project&nbsp;#1</a>\
        <a class='projItem' href='Project2-F2018.htm'>Project&nbsp;#2</a>\
        <a class='projItem' href='Project3-F2018.htm'>Project&nbsp;#3</a>\
        <a class='projItem' href='Project4-F2018.htm'>Project&nbsp;#4</a>\
        <a href='../Projects/ArchGradeSheet.pdf'>Arch&nbsp;Grade&nbsp;Sheet</a>\
        <a href='../Projects/CSE681gs.pdf'>Code&nbsp;Grade&nbsp;Sheet</a>\
        <a href='../../Repository/Tools/CodeAnalyzerExesAndCleanBat'>CodeAnalExes&nbsp;+&nbsp;Clean.bat</a>\
        <a href='../../webpages/Code.htm'>Code</a>\
        <a href='../../webpages/Presentations.htm'>Presentations</a>\
        <a href='../../webpages/OfficeHours.htm'>Office Hours</a>\
        <a href='Project1Sample.htm'>Project&nbsp;#1&nbsp;Sample</a>\
        <a href='Project2Sample.htm'>Project&nbsp;#2&nbsp;Sample</a>\
        <a href='Project3Sample.htm'>Project&nbsp;#3&nbsp;Sample</a>\
        <a href='Project4Sample.htm'>Project&nbsp;#4&nbsp;Sample</a>\
        <a href='../../webpages/videos.htm'>Lecture&nbsp;Videos</a>\
        <a href='../../webpages/GettingStartedProjects.htm'>Getting&nbsp;Started</a>\
        <a href='../../webpages/AdviceProjects.htm'>Advice</a>\
        <a href='../../webpages/SubmittingProjects.htm'>Submitting&nbsp;Projects</a>\
        <a href='../../webpages/Upload.htm'>Uploading&nbsp;Projects</a>\
        <a href='../../webpages/GradingPolicy.htm'>Grading&nbsp;Policy</a>\
        <a href='https://docs.microsoft.com/en-us/visualstudio/ide/visual-studio-ide'>Visual Studio</a>\
        <a href='https://docs.microsoft.com/en-us/visualstudio/'>Visual&nbsp;Studio&nbsp;Documentation&nbsp;&nbsp;&nbsp;</a>\
        <a href='https://docs.microsoft.com/en-us/visualstudio/#pivot=languages'>Visual&nbsp;Studio&nbsp;Languages</a>\
        <a href='https://en.cppreference.com/w/'>cppreference.com</a>\
        <a href='https://docs.microsoft.com/en-us/dotnet/csharp/'>C#&nbsp;Guide</a>\
        <a href='https://docs.microsoft.com/en-us/dotnet/framework/'>.Net&nbsp;Framework</a>\
        <a href='https://sourcemaking.com/refactoring/smells'>Code&nbsp;Smells</a>\
        <a href='../../webpages/SummerProjects.htm'>Summer&nbsp;Projects</a>\
        <a href='../../webpages/SummerReading.htm'>Summer&nbsp;Reading</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>CodeSnaps &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='CodeSnap-HelloWorld.cs.htm'>Hello&nbsp;World</a>\
        <a href='CodeSnap-ClassDemo.cs.htm'>Class&nbsp;Demo</a>\
        <a href='CodeSnap-Generics.cs.htm'>Generics&nbsp;Demo</a>\
        <a href='CodeSnap-Inheritance.cs.htm'>Inheritance</a>\
        <a href='CodeSnap-Delegates.cs.htm'>Delegates</a>\
        <a href='CodeSnap-NavigateWithDelegates.cs.htm'>NavigateWithDelegates</a>\
        <a href='CodeSnap-LambdaCapture.cs.htm'>Lambda&nbsp;Capture</a>\
        <a href='CodeSnap-List.cs.htm'>Lists</a>\
        <a href='CodeSnap-StartingThreads.cs.htm'>Starting&nbsp;Threads</a>\
        <a href='CodeSnap-BlockingQueue.cs.htm'>Blocking&nbsp;Queue</a>\
        <a href='CodeSnap-BasicHttpProgService.IService.cs.htm'>BasicHttp&nbsp;Service</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Notes &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='CourseSynopsis.htm'>Course Summary</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>--&nbsp;Study&nbsp;Guides&nbsp;---</div>\
        <a href='StudyGuideOCD.htm'>OCD&nbsp;Study&nbsp;Guide</a>\
        <a href='StudyGuideNotes.htm'>SW&nbsp;Architecture&nbsp;Study&nbsp;Guide</a>\
        <a href='StudyGuideSMA.htm'>SMA&nbsp;Study&nbsp;Guide</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>--&nbsp;Basic&nbsp;Concepts&nbsp;---</div>\
        <a href='Note-WhatIsProgram.htm'>What&nbsp;is&nbsp;a&nbsp;Program?</a>\
        <a href='Note-SizeMatters.htm'>Size&nbsp;matters</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>--&nbsp;C#&nbsp;Language&nbsp;---</div>\
        <a href='GettingStartedWithCSharp.htm'>Getting Started with C#</a>\
        <a href='Classes.htm'>Classes</a>\
        <a href='Inheritance.htm'>Inheritance</a>\
        <a href='ThreeTierHierarchy.htm'>Three&nbsp;Tier&nbsp;Hierarchy</a>\
        <a href='CompoundObjects.htm'>Compound&nbsp;objects</a>\
        <a href='Generics.htm'>Generics</a>\
        <a href='Delegates.htm'>Delegates</a>\
        <a href='Lambdas.htm'>Lambdas</a>\
        <a href='Note-Inconsistencies.htm'>C#&nbsp;inconsistencies</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>--&nbsp;Design&nbsp;Concepts&nbsp;---</div>\
        <a href='UML-Diagrams.htm'>UML&nbsp;diagrams</a>\
        <a href='Note-Partitions.htm'>Partitions</a>\
        <a href='Note-SngRespPrin.htm'>Single&nbsp;Responsibility&nbsp;Principle</a>\
        <a href='Note-Sharing.htm'>Sharing</a>\
        <a href='Note-Robust.htm'>Robustness</a>\
        <a href='Note-Delegation.htm'>Delegation</a>\
        <a href='Note-Components.htm'>Components</a>\
        <a href='Note-LooselyCoupled.htm'>Loose&nbsp;coupling</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>--&nbsp;Software&nbsp;Systems&nbsp;---</div>\
        <a href='../../Webpages/BlogMessagePassingComm.htm'>Msg&nbsp;passing&nbsp;comm</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>--&nbsp;Implementation&nbsp;---</div>\
        <a href='Note-GettingStarted.htm'>Getting&nbsp;Started&nbsp;in&nbsp;SMA</a>\
        <a href='Note-PkgStructMatters.htm'>Package&nbsp;structure</a>\
        <a href='Note-TopDown.htm'>Top&nbsp;Down</a>\
        <a href='Note-BottomUp.htm'>Bottom&nbsp;Up</a>\
        <a href='Note-IncDev.htm'>Incremental&nbsp;Development</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Resources &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='https://chrome.google.com/webstore/detail/gliffy-diagrams/bhmicilclplefnflapjmnngmkkkkpfad?hl=en'>Gliffy&nbsp;Diagramming&nbsp;Chrome&nbsp;Extension</a>\
        <a href='https://www.tutorialspoint.com/csharp/index.htm'>C#&nbsp;Tutorial&nbsp;-tutorialspoint</a>\
        <a href='http://www.cheat-sheets.org/saved-copy/msnet-formatting-strings.pdf'>.Net&nbsp;String&nbsp;Formats</a>\
        <a href='http://www.regexlib.com/CheatSheet.aspx?AspxAutoDetectCookieSupport=1'>RegEx&nbsp;Cheat&nbsp;Sheet</a>\
        <a href='http://ezzylearning.com/CheatSheets/Core%20CSharp%20and%20.NET%20Quick%20Reference.pdf'>C#&nbsp;Cheat&nbsp;Sheet</a>\
        <a href='../../webpages/Help/VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a>\
        <a href='../../Webpages/SummerReading.htm'>Summer Reading</a>\
        <a href='../../Webpages/SummerProjects.htm'>Summer Projects</a>\
        <a href='../presentations/Docker-Corley'>Mike&nbsp;Corley&apos;s&nbsp;Docker&nbsp;Presentation</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Directories &#9662;</button>\
      <div class='dropdown-content'>\
         <span>&nbsp;&nbsp;--&nbsp;Code&nbsp;------------------&nbsp;&nbsp;&nbsp;</span>\
				 <a href='../../Repository/CSharp'>Repository/CSharp</a>\
				 <a href='../../Repository/Cpp'>Repository/Cpp</a>\
				 <a href='../../Repository/Tools'>Repository/Tools</a>\
				 <a href='../../Webpages/Code.htm#CSharpDemos'>ProjectHelp</a>\
         <span>&nbsp;&nbsp;--&nbsp;Residential&nbsp;Courses&nbsp;-&nbsp;&nbsp;&nbsp;</span>\
				 <a href='../../CSE681/'>CSE681-SMA</a>\
				 <a href='../../CSE686/'>CSE686-IP</a>\
				 <a href='../../CSE687/'>CSE687-OOD</a>\
				 <a href='../../CSE775/'>CSE775-DO</a>\
				 <a href='../../CSE776/'>CSE776-DP</a>\
				 <a href='../../CSE784/'>CSE784-SS</a>\
				 <a href='../../SummerProjects/'>Summer Projects</a>\
         <span>&nbsp;&nbsp;--&nbsp;OnLine&nbsp;courses&nbsp;------&nbsp;&nbsp;&nbsp;</span>\
				 <a href='../../CSE681-OnLine/'>CSE681-SMA-OnLine</a>\
				 <a href='../../CSE687-OnLine/'>CSE687-OOD-OnLine</a>\
         <span>&nbsp;&nbsp;--&nbsp;Short&nbsp;course&nbsp;---------&nbsp;&nbsp;&nbsp;</span>\
				 <a href='../../ShortCourse/'>C++ Short Course</a>\
         <span>&nbsp;&nbsp;--&nbsp;Other&nbsp;Folders&nbsp;--------&nbsp;&nbsp;&nbsp;</span>\
				 <a href='../../'>Handouts</a>\
				 <a href='../../Coretechnologies/'>CoreTech</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Blog &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../../webpages/Blog.htm'>First Things</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>-- Design -----------</div>\
        <a href='../../webpages/BlogDesign.htm'>SW Design</a>\
        <a href='../../webpages/BlogPrinciples.htm'>Design Principles</a>\
        <a href='../../webpages/BlogOOD.htm'>OO Design</a>\
        <a href='../../webpages/BlogObjectModels.htm'>Object Models</a>\
        <a href='../../webpages/BlogGlobals.htm'>Scopes and Global Data</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>-- Engineering SW ---</div>\
        <a href='../../webpages/BlogOCD.htm'>Concept Document</a>\
        <a href='../../webpages/BlogTesting.htm'>SW Testing</a>\
        <a href='../../webpages/SummerReading.htm'>Summer Reading</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>-- Software Sys -----</div>\
        <a href='../../webpages/BlogStructure.htm'>SW Structure</a>\
        <a href='../../webpages/BlogMessagePassingComm.htm'>Msg-Passing Comm</a>\
        <a href='../../webpages/BlogActiveObjects.htm'>Active Objects</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>-- Reusable Pkgs ----</div>\
        <a href='../../webpages/BlogNoSql.htm'>noSQL Database</a>\
        <a href='../../webpages/BlogParser.htm'>Parsing</a>\
        <a href='../../webpages/BlogCodeAnalyzer.htm'>Code Analyzer</a>\
        <a href='../../webpages/BlogMTree.htm'>M-ary Trees</a>\
        <a href='../../webpages/BlogGraph.htm'>Directed Graphs</a>\
        <a href='../../webpages/BlogFileSystem.htm'>C++ FileSystem</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>About &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../../webpages/FawcettAbout.htm'>Jim Fawcett</a>\
        <a href='../../webpages/Research.htm'>Research</a>\
        <a href='../../webpages/Help.html'>Help</a>\
        <a href='#' onclick='toggleNavKeys()'>Nav Keys</a>\
        <a href='../../webpages/SiteDesign.htm'>Site Design</a>\
        <a href='../../webpages/FawcettHome.htm'>Site Home</a>\
        <a href='../../Webpages/SiteMap.htm' class='menuItem'>Site Map</a>\
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
    document.getElementById("nextLink").style.display = "none";
  }
  else {
    document.getElementById("nextLink").href = nxt.href;
  }

  var prv = document.getElementById("Prev");
  if (prv === null) {
    document.getElementById("prevLink").style.display = "none";
  }
  else {
    document.getElementById("prevLink").href = prv.href;
  }
  // show footer with copyright notice and revision date

  var rvsd = document.getElementsByTagName("info-bar");
  var date = document.lastModified;
  rvsd[0].innerHTML = "copyright &copy; Jim Fawcett, 2018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page Revised: " + date;

  setNavKeys();

  // listen for keyboard events:
  // - key actions are defined in ScriptsKeyboard.js

  document.addEventListener('keydown', (event) => { keyAction(event); }, false);
  document.addEventListener('mousedown', (event) => { mouseAction(event); }, false);
  //document.oncontextmenu='return false;'
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
//----< load page defined in current page's Cour link >--------------

function loadCour() {
  document.getElementById("Cour").click();
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
    if (cpprp != "none") {
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
      items[len - i - 1].style.display = "block";
      break;
    }
  }
}
//----< hide, progressively, menu items on the left >----------------
/*
*  This let's user see menu items that overflow on the right
*  due to page size.
*/
function scrollMenuUp() {
  var items = document.getElementsByClassName("lectItem");
  var i;
  for (i = 0; i < items.length; ++i) {
    var cpprp = window.getComputedStyle(items[i], null).getPropertyValue("display");
    if (cpprp != "none") {
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

function scrollMenuDown() {
  var items = document.getElementsByClassName("lectItem");
  var len = items.length;
  var i;
  for (i = 0; i < items.length; ++i) {
    //items[len-i-1].style.display = "block";
    var cpprp = window.getComputedStyle(items[i], null).getPropertyValue("display");
    if (cpprp != "block") {
      items[i].style.display = "block";
    }
    else {
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
  window.scrollTo(0, 10000);
}
//----< toggle nav keys display >------------------------------------

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
//----< toggle nav keys display >------------------------------------

function toggleNavKeys() {
  var nkc = document.getElementsByTagName("navKeysContainer");
  var tog = window.getComputedStyle(nkc[0], null).getPropertyValue("display");
  if (tog === "none") {
    nkc[0].style.display = "inline";
    window.localStorage.setItem("navKeyState", "show");
  }
  else {
    nkc[0].style.display = "none";
    window.localStorage.setItem("navKeyState", "hide");
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
