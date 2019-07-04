/////////////////////////////////////////////////////////////////////
// ScriptsMenu.js - Constructs dropdown menu for top-level pages   //
//                                                                 //
// Jim Fawcett, 25 June 2018                                       //
/////////////////////////////////////////////////////////////////////

//----< called in body.onload to initial menus and footer >----------
/*
 *  This function is specific for the menu on IP lecture pages 
 */
function initializeMenu() {

  // create top menu

  var topMenu = document.getElementsByTagName("nav");
  topMenu[0].innerHTML = "<div class='navbar'>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Courses &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../../webpages/CSE686.htm#syllabus'>CSE686&nbsp;Syllabus</a>\
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
        <a class='lectItem' href='CSE686L1.htm'>L01&nbsp;-&nbsp;Introduction</a>\
        <a class='lectItem' href='CSE686L2.htm'>L02&nbsp;-&nbsp;Static&nbsp;Pages</a>\
        <a class='lectItem' href='CSE686L3.htm'>L03&nbsp;-&nbsp;CSS</a>\
        <a class='lectItem' href='CSE686L4.htm'>L04&nbsp;-&nbsp;JavaScript</a>\
        <a class='lectItem' href='CSE686L5.htm'>L05&nbsp;-&nbsp;JavaScript Libs</a>\
        <a class='lectItem' href='CSE686L6.htm'>L06&nbsp;-&nbsp;Asp.Net&nbsp;Core</a>\
        <a class='lectItem' href='CSE686L7.htm'>L07&nbsp;-&nbsp;Asp.Net&nbsp;MVC</a>\
        <a class='lectItem' href='CSE686L8.htm'>L08&nbsp;-&nbsp;RelData</a>\
        <a class='lectItem' href='CSE686L9.htm'>L09&nbsp;-&nbsp;Exam&nbsp;Results</a>\
        <a class='lectItem' href='CSE686L10.htm'>L10&nbsp;-&nbsp;Entity&nbsp;Framework</a>\
        <a class='lectItem' href='CSE686L11.htm'>L11&nbsp;-&nbsp;Authorization</a>\
        <a class='lectItem' href='CSE686L12.htm'>L12&nbsp;-&nbsp;WebServices</a>\
        <a class='lectItem' href='CSE686L13.htm'>L13&nbsp;-&nbsp;WebService&nbsp;Clients</a>\
        <a class='lectItem' href='CSE686L14.htm'>L14&nbsp;-&nbsp;Mobile&nbsp;Clients&nbsp;for&nbsp;WebApi&nbsp;&nbsp;</a>\
        <a class='lectItem' href='CSE686L15.htm'>L15&nbsp;-&nbsp;Final&nbsp;Exam</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Labs &#9662;</button>\
      <div class='dropdown-content'>\
        <a class='projItem' href='Lab1.htm'>Lab&nbsp;grading</a>\
        <a class='projItem' href='Lab1.htm'>Lab&nbsp;#01</a>\
        <a class='projItem' href='Lab2.htm'>Lab&nbsp;#02</a>\
        <a class='projItem' href='Lab3.htm'>Lab&nbsp;#03</a>\
        <a class='projItem' href='Lab4.htm'>Lab&nbsp;#04</a>\
        <a class='projItem' href='Lab5.htm'>Lab&nbsp;#05</a>\
        <a class='projItem' href='Lab6.htm'>Lab&nbsp;#06</a>\
        <a class='projItem' href='Lab7.htm'>Lab&nbsp;#07</a>\
        <a class='projItem' href='Lab8.htm'>Lab&nbsp;#08</a>\
        <a class='projItem' href='Lab9.htm'>Lab&nbsp;#09</a>\
        <a class='projItem' href='Lab10.htm'>Lab&nbsp;#10</a>\
        <a class='projItem' href='Lab11.htm'>Lab&nbsp;#11</a>\
        <a class='projItem' href='Lab12.htm'>Lab&nbsp;#12</a>\
        <a class='projItem' href='Lab13.htm'>Lab&nbsp;#13</a>\
        <a class='projItem' href='Lab14.htm'>Lab&nbsp;#14</a>\
        <a class='projItem' href='Lab15.htm'>Lab&nbsp;#15</a>\
        <a href='../../Repository/CSE686-IP/Code'>Code</a>\
        <a href='../../Repository/CSE686-IP/Presentations'>Presentations</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Projects &#9662;</button>\
      <div class='dropdown-content'>\
        <a class='projItem' href='Project1-S2019.htm'>Project&nbsp;#1</a>\
        <a class='projItem' href='Project2-S2019.htm'>Project&nbsp;#2</a>\
        <a class='projItem' href='Project3-S2019.htm'>Project&nbsp;#3</a>\
        <a href='../../Repository/CSE686-IP/Code'>Code</a>\
        <a href='../../Repository/CSE686-IP/Presentations'>Presentations</a>\
        <a href='../../webpages/OfficeHours.htm'>Office Hours</a>\
        <a href='../../webpages/Upload.htm'>Uploading&nbsp;Projects</a>\
        <a href='../../webpages/GradingPolicy.htm'>Grading&nbsp;Policy</a>\
        <a href='https://docs.microsoft.com/en-us/visualstudio/ide/visual-studio-ide'>Visual Studio</a>\
        <a href='https://docs.microsoft.com/en-us/visualstudio/'>Visual&nbsp;Studio&nbsp;Documentation&nbsp;&nbsp;&nbsp;</a>\
        <a href='https://docs.microsoft.com/en-us/visualstudio/#pivot=languages'>Visual&nbsp;Studio&nbsp;Languages</a>\
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
        <a href='../Presentations/First.html'>First Demo</a>\
        <span>&nbsp;----&nbsp;C#&nbsp;---------------------&nbsp;</span>\
        <a href='../../CSE681/Lectures/CodeSnap-HelloWorld.cs.htm'>Hello&nbsp;World</a>\
        <a href='../../CSE681/Lectures/CodeSnap-ClassDemo.cs.htm'>Class&nbsp;Demo</a>\
        <a href='../../CSE681/Lectures/CodeSnap-Generics.cs.htm'>Generics&nbsp;Demo</a>\
        <a href='../../CSE681/Lectures/CodeSnap-Inheritance.cs.htm'>Inheritance</a>\
        <a href='../../CSE681/Lectures/CodeSnap-Delegates.cs.htm'>Delegates</a>\
        <a href='../../CSE681/Lectures/CodeSnap-NavigateWithDelegates.cs.htm'>NavigateWithDelegates</a>\
        <a href='../../CSE681/Lectures/-LambdaCapture.cs.htm'>Lambda&nbsp;Capture</a>\
        <a href='../../CSE681/Lectures/CodeSnap-List.cs.htm'>Lists</a>\
        <a href='../../CSE681/Lectures/CodeSnap-StartingThreads.cs.htm'>Starting&nbsp;Threads</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Resources &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='Resources.htm'>Resource&nbsp;links</a>\
        <a href='https://piazza.com'>piazza.com</a>\
        <a href='../../webpages/Help/VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a>\
        <a href='https://chrome.google.com/webstore/detail/gliffy-diagrams/bhmicilclplefnflapjmnngmkkkkpfad?hl=en'>Gliffy&nbsp;Diagramming&nbsp;Chrome&nbsp;Extension</a>\
        <a href='http://www.regexlib.com/CheatSheet.aspx?AspxAutoDetectCookieSupport=1'>RegEx&nbsp;Cheat&nbsp;Sheet</a>\
        <div style='padding:0px 10px; margin:0px; font-size:medium;'>--&nbsp;C#&nbsp;Language&nbsp;---</div>\
        <a href='http://ezzylearning.com/CheatSheets/Core%20CSharp%20and%20.NET%20Quick%20Reference.pdf'>C#&nbsp;Cheat&nbsp;Sheet</a>\
        <a href='https://www.tutorialspoint.com/csharp/index.htm'>C#&nbsp;Tutorial&nbsp;-tutorialspoint</a>\
        <a href='http://www.cheat-sheets.org/saved-copy/msnet-formatting-strings.pdf'>.Net&nbsp;String&nbsp;Formats</a>\
        <a href='../../CSE681/Lectures/GettingStartedWithCSharp.htm'>Getting Started with C#</a>\
        <a href='../../CSE681/Lectures/Classes.htm'>Classes</a>\
        <a href='../../CSE681/Lectures/Inheritance.htm'>Inheritance</a>\
        <a href='../../CSE681/Lectures/Generics.htm'>Generics</a>\
        <a href='../../CSE681/Lectures/Delegates.htm'>Delegates</a>\
        <a href='../../CSE681/Lectures/Lambdas.htm'>Lambdas</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Directories &#9662;</button>\
      <div class='dropdown-content'>\
         <span>&nbsp;&nbsp;--&nbsp;Code&nbsp;------------------&nbsp;&nbsp;&nbsp;</span>\
         <a href='../../Repository/CSharp'>Repository/CSharp</a>\
         <a href='../../Repository/Cpp'>Repository/Cpp</a>\
         <a href='../../Repository/CSE686-IP'>Repository/CSE686-IP</a>\
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
  document.oncontextmenu = 'return true';

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

function scrollMenuDown() {
  var items = document.getElementsByClassName("lectItem");
  var len = items.length;
  var i;
  for (i = 0; i < items.length; ++i) {
    //items[len-i-1].style.display = "block";
    var cpprp = window.getComputedStyle(items[i], null).getPropertyValue("display");
    if (cpprp !== "block") {
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
    // removed to enable contextmenu without toggle distraction
    // Can toggle nav keys from about menu
    //else {
    //  toggleNavKeys();
    //}
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
