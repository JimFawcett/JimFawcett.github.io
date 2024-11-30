/*
 * ScriptsPageFrameFreePages.js
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
  var loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = 'TOC.html?src=index.html';
  }
  else {
    window.top.location.href = 'TOC.html';
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
    window.location.href = 'TOCPrototypes.html?src=' + loc;
  }
  else {
    window.top.location.href = loc;
  }
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

//function loadif() {
//  loc = window.location.href;
//  if (window.self === window.top) {
//    //if (window.location.href = 'TOC.html') { return; }
//    window.location.href = 'TOC.html?src=' + loc;
//    // temp change 3/6/2024 undone
//  }
//  else {
//    location.reload();
//  }
//}

function initializeMenu() {
  var topMenu = document.getElementById("navbar");
  if (!isDefined(topMenu)) {
    return;
  }
  topMenu.innerHTML = "<div style='position: relative; width:100%;' class='navbar'>\
    <div class='menuItem'>\
        Site&#9662\
        <div class='dropdown'>\
            <div class='darkItem' style='padding:0.25em 0.5em;'>Code Workshop</div>\
            <div class='ddItem'><a href='index.html'>Home</a></div>\
            <div class='ddItem'><a target='_parent' href='TOC.html'>Site Explorer</a></div>\
            <!--<div class='ddItem'><a target='_parent' onclick='loadif()'>Site Explorer</a></div>-->\
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
              <div class='ddItem ddDetails'><a href='SitePlans.html'>Site Plans</a></div>\
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
          <div class='ddItem'><a target='_parent' onclick='loadifbits()'>&nbsp;Bits</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifcpp()'>&nbsp;C++</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifrust()'>&nbsp;Rust</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifcsharp()'>&nbsp;C#</a></div>\
          <div class='ddItem'><a target='_parent' onclick='loadifbasic()'>&nbsp;Basics</a>&nbsp;</div>\
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
        Stories&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Stories,&nbsp;Bites,&nbsp;&amp;&nbsp;Bits&nbsp;</div>\
            <div class='ddItem'><a href='Stories.html'>What is a Story?</a></div>\
            <div class='ddItem'><a href='BasicBiteByByte.html'>Basics Bites</a></div>\
            <div class='ddItem'><a href='DesignBites.html'>Design Bites</a></div>\
            <div class='ddItem'><a href='CppStoryRepo.html'>C++&nbsp;Story</a></div>\
            <div class='ddItem'><a href='CppBiteByByte.html'>C++&nbsp;Bites</a></div>\
            <div class='ddItem'><a href='RustStoryRepo.html'>Rust&nbsp;Story</a></div>\
            <div class='ddItem'><a href='RustBiteByByte.html'>Rust&nbsp;bites&nbsp;</a></div>\
            <div class='ddItem'><a href='BitsRepo.html'>Bits&nbsp;-&nbsp;C++,Rust,C#,Python,JvScpt&nbsp;</a></div>\
            <div class='ddItem'><a href='BuildOn.html'>BuildOn:&nbsp;learn&nbsp;Rust&nbsp;&nbsp;</a></div>\
            <div class='ddItem'><a href='IdiomsAndPatterns.html'>Idioms&nbsp;&amp;&nbsp;Patterns:&nbsp;depricated</a></div>\
            <div class='ddItem'><a href='IndexPage.html'>Rust Glossary</a></div>\
            <div class='ddItem'><a href='InfDataLib_1.html'>Inf Data Lib - A.Zaitsev</a></div>\
            <div class='ddItem'><a href='MLiPS_1.html'>MLiPS - M.Corley</a></div>\
            <div class='ddItem'><a href='StoryTeller_LocalStorage.html'>StoryTeller:&nbsp;depricated</a></div>\
            <div class='ddItem'><a href='StoryTellerDesign.html'>StoryTeller Design</a></div>\
            <div class='ddItem'><a href='Resources/PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
      Resrcs&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Code Resources</div>\
          <div class='ddItem'><a href='Videos.html' class='menuItem'>Videos</a></div>\
          <div class='ddItem'><a href='Resources.html'>Presentations&nbsp;&amp;&nbsp;Diagrams&nbsp;&nbsp;</a></div>\
          <div class='ddItem'><a href='Resources/PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
          <div class='ddItem'><a href='Conferences.html'>Conferences:&nbsp;videos&nbsp;&amp;&nbsp;slides&nbsp;&nbsp;</a></div>\
          <div class='ddItem'><a href='ChatGPT.html'>ChatGPT</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='Design.html'>Design Process</a></div>\
                <div class='ddItem ddDetails'><a href='UML.html'>UML Diagrams</a></div>\
                <div class='ddItem ddDetails'><a href='ProjectsList.html'>Project suggestions</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>C++</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='LangCpp.html'>C++&nbsp;Language&nbsp;Resources&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a href='https://en.cppreference.com/w/'>CppReference.com</a></div>\
              <div class='ddItem ddDetails'><a href='https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md'>C++ Core Guidelines</a></div>\
              <div class='ddItem ddDetails'><a href='CppReferences.html'>C++ References</a></div>\
              <div class='ddItem ddDetails'><a href='CppExamples.html'>C++ Example Code</a></div>\
              <div class='ddItem ddDetails'><a href='CppSynopsis.html'>C++ Synopsis</a></div>\
              <div class='ddItem ddDetails'><a href='DesignNote-Cpp11.html'>C++11 Survey</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Rust</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='Resources/RustBites/RustBites_CodeExamples.html'>RustBites Code Examples</a></div>\
              <div class='ddItem ddDetails'><a href='https://github.com/JimFawcett/RustPlaygroundExamples'>RustPlaygroundExamples</a></div>\
              <div class='ddItem ddDetails'><a href='IndexPage.html'>Rust Glossary</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Regular Expressions</summary>\
            <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='https://cs.lmu.edu/~ray/notes/regex/'>Regular Expressions</a></div>\
                <div class='ddItem ddDetails'><a href='https://dev.to/chrisachard/intro-to-regex-for-web-developers-2fj4'>RegExp&nbsp;for&nbsp;JavaScript</a></div>\
                <div class='ddItem ddDetails'><a href='http://cpprocks.com/files/c++11-regex-cheatsheet.pdf'>C++11 regex</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>WebDev</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='WebNotes.html'>Web Notes</a></div>\
              <div class='ddItem ddDetails'><a href='WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a href='https://encycolorpedia.com/named'>Web Colors</a></div>\
              <div class='ddItem ddDetails'><a href='TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a href='TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a href='TestFlexMenu.html'>TestFlexMenu</a></div>\
              <div class='ddItem ddDetails'><a href='../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a href='CommCompare.html' class='menuItem'>CommCompare:&nbsp;Rust&nbsp;&amp;&nbsp;C++</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Tests</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='Resources/Bits/Bits_DataTest.html'>New Test Bits UI</a></div>\
              <div class='ddItem ddDetails'><a href='Resources/Bits/Bits_Hello.html'>Test Bits UI</a></div>\
              <div class='ddItem ddDetails'><a href='CppBits.html'>Test C++ Bits</a></div>\
              <div class='ddItem ddDetails'><a href='RustBits.html'>Test Rust Bits</a></div>\
              <div class='ddItem ddDetails'><a href='CSharpBits.html'>Test C# Bits</a></div>\
              <div class='ddItem ddDetails'><a href='CompareTest.html'>Test Code Compare</a></div>\
              <div class='ddItem ddDetails'><a href='PageFrame1.html'>Test PageFrame</a></div>\
              <div class='ddItem ddDetails'><a href='TestFlexMenu.html'>Test FlexMenu</a></div>\
              <div class='ddItem ddDetails'><a href='WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a href='TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a href='TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a href='../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a href='personalComputerSecurity.html'>Personal&nbsp;Computer&nbsp;Security&nbsp;</a></div>\
          <div class='ddItem'><a href='Interesting.html'>Interesting</a></div>\
          <div class='ddItem'><a href='TechnicalLinks.html'>Technical Links</a></div>\
          <div class='ddItem'><a href='https://github.com/joshnh/Git-Commands'>git commands</a></div>\
          <div class='ddItem'><a href='Resources/VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Neighborhoods</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='https://JimFawcett.github.io'>JimFawcett-github</a></div>\
              <div class='ddItem ddDetails'><a href='https://ecs.syr.edu/faculty/fawcett'>JimFawcett-SyracuseUniv</a></div>\
              <div class='ddItem ddDetails'><a href='https://mwcorley79.github.io/MikeCorley/'>Mike Corley</a></div>\
              <div class='ddItem ddDetails'><a href='https://github.com/CommProjectComparisons'>CommProjectComparisons-github&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a href='https://csiac.org'>CSIAC</a></div>\
              <div class='ddItem ddDetails'><a href='https://www.fluentcpp.com'>Fluent {C++}</a></div>\
              <div class='ddItem ddDetails'><a href='https://www.boost.org/'>Boost&nbsp;Library&nbsp;(C++)</a></div>\
              <div class='ddItem ddDetails'><a href='https://www.pocoproject.org/'>poco&nbsp;Library&nbsp;(C++ networking)&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a href='https://openframeworks.cc/'>openFrameworks&nbsp;(C++ graphics)</a></div>\
              <div class='ddItem ddDetails'><a href='https://github.com/microsoft'>github.com/Microsoft</a></div>\
              <div class='ddItem ddDetails'><a href='https://www.taniarascia.com/'>taniarascia.com (JavaScript, CSS)&nbsp;&nbsp;</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a href='SummerReading.html'>Summer Reading</a></div>\
          <div class='ddItem'><a href='Interviews.html'>Job Interviews</a></div>\
          <div style='height:2em;'></div>\
      </div>\
    </div>\
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
    <div class='menuItem'><a id='help' onclick='getHelp()'>Help</a></div>\
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
  /*document.getElementById("pages").style.display = "none";*/
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

