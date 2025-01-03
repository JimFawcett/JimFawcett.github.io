/*
 * ScriptsPageFrame.js for BasicBites
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
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOC.html?src=' + loc;
  }
  else {
    window.top.location.href = '../../TOC.html?src=' + loc;
    /*location.reload();*/
  }
}

function loadifcpp() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCCpp.html?src=indexCpp.html';
  }
  else {
    window.top.location.href = '../../TOCCpp.html';
  }
}

function loadifrust() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCRust.html?src=indexRust.html';
  }
  else {
    window.top.location.href = '../../TOCRust.html';
  }
}

function loadifcsharp() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCCSharp.html?src=indexCs.html';
  }
  else {
    window.top.location.href = '../../TOCCSharp.html';
  }
}

function loadifbasic() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCBasic.html?src=indexBasic.html';
  }
  else {
    window.top.location.href = '../../TOCBasic.html';
  }
}

function loadifbits() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCBits.html?src=indexBits.html';
  }
  else {
    window.top.location.href = '../../TOCBits.html';
  }
}

function loadifwebdev() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCWebDev.html?src=indexWebDev.html';
  }
  else {
    window.top.location.href = '../../TOCWebDev.html';
  }
}

function loadifdesign() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCDesign.html?src=indexDesign.html';
  }
  else {
    window.top.location.href = '../../TOCDesign.html';
  }
}

function loadifdeployment() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCDeployment.html?src=indexDeployment.html';
  }
  else {
    window.top.location.href = '../../TOCDeployment.html';
  }
}

function loadifprojects() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCProjects.html?src=indexProjects.html';
  }
  else {
    window.top.location.href = '../../TOCProjects.html';
  }
}

function loadifprototypes() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOCPrototypes.html?src=indexPrototypes.html';
  }
  else {
    window.top.location.href = '../../TOCPrototypes.html';
  }
}
/* run menu builders at startup */

function initialize() {
  //initializeMenu();
  //initializePages();
  //initializeNextPrev();
  //getBodyScrollTop();
  storyHlpMenu.helpMenu();
}

//function getBodyScrollTop() {
//  console.log("get scrollTop\n");
//  // alert("get scrollTop");
//  let content = document.querySelector("body");
//  let scroll = localStorage.getItem("scroll");
//  if (isDefined(scroll)) {
//    scrollval = parseInt(scroll, 10);
//    content.scroll(0, scrollval);
//    //content.scrollTop = parseInt(scroll, 10);
//    //window.scrollBy(0,100);
//    window.scrollTo({ top: 100, behavior: 'smooth' });
//  }
//  window.addEventListener("beforeunload", () => {
//    setBodyScrollTop();
//  })
//}
//function setBodyScrollTop() {
//  //alert("setBodyScrollTop");
//  console.log("save scrollTop\n");
//  let content = document.querySelector("body");
//  let scroll = content.scrollTop;
//  console.log(scroll);
//  scroll = "100";
//  localStorage.setItem("scroll", scroll);
//}

//function setBodyScrollTop() {
//  alert("save scrollTop");
//  localStorage.setItem("body-scroll", body.scrollTop);
//}

function goHome() {
  window.location.href = "../../index.html";
}

function getHelp() {
  //window.open("Help.html", "help", "popup=1, height=700, width=600");
  window.open("Help.html", "_blank");
}


/* create top menu */

function initializeMenu() {

  var topMenu = document.getElementById("navbar");
  topMenu.innerHTML = "<div class='navbar'>\
    <div class='menuItem'>\
        <div>Site&#9662</div>\
        <div class='dropdown'>\
            <div style='height:0.25em;'></div>\
            <div class='ddItem'><a target="_blank" href='../../index.html'>Home</a></div>\
            <div class='ddItem'><a target='_parent' onclick='loadif()'>Site Explorer</a></div>\
            <div class='ddItem'><a target="_blank" href='../../SiteMap.html'>SiteMap</a></div>\
            <div class='ddItem'><a target="_blank" href='../../SiteDemo.html'>SiteDemo</a></div>\
            <div class='ddItem'><a target="_blank" href='../../SiteDesign.html'>SiteDesign</a></div>\
            <div class='ddItem'><a target="_blank" href='../../ChatGPT.html'>ChatGPT</a></div>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>About&nbsp;Site&nbsp;&nbsp;&nbsp;</summary>\
              <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../JimFawcett.html'>Jim Fawcett</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../Interesting.html'>Interesting&nbsp;things&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../Friends.html'>Friends&nbsp;&amp;&nbsp;Collaborators</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../Help.html'>Help</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../SitePlans.html'>Site Plans</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='#' onclick='togglenavKeys()'>Toggle Nav Keys</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='#' onclick='toggleSwipeEvents()'>Toggle Swipe Events</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BookDesignCourse.html'>Design Course</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='../../index.html'>L1 Site Home</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='../../RsRepositories.html'>L2&nbsp;Repository&nbsp;webpage</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='../../RustBiteByByte.html'>L3&nbsp;Rust&nbsp;Bites</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://github.com/JimFawcett'>Repositories&nbsp;code</a></div>\
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
            <div class='ddItem'><a target="_blank" href='../../CppRepositories.html'>C++</a></div>\
            <div class='ddItem'><a target="_blank" href='../../RsRepositories.html'>Rust</a></div>\
            <div class='ddItem'><a target="_blank" href='../../CsRepositories.html'>C#</a></div>\
            <div class='ddItem'><a target="_blank" href='../../JsRepositories.html'>JavaScript</a></div>\
            <div class='ddItem'><a target="_blank" href='../../OtherRepositories.html'>Other</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Stories&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Stories,&nbsp;Bites,&nbsp;&amp;&nbsp;Bits&nbsp;</div>\
            <div class='ddItem'><a target="_blank" href='../../Stories.html'>What is a Story?</a></div>\
            <div class='ddItem'><a target="_blank" href='../../BasicBiteByByte.html'>Basics Bites</a></div>\
            <div class='ddItem'><a target="_blank" href='../../DesignBites.html'>Design Bites</a></div>\
            <div class='ddItem'><a target="_blank" href='../../CppStoryRepo.html'>C++&nbsp;Story</a></div>\
            <div class='ddItem'><a target="_blank" href='../../CppBiteByByte.html'>C++&nbsp;Bites</a></div>\
            <div class='ddItem'><a target="_blank" href='../../RustStoryRepo.html'>Rust&nbsp;Story</a></div>\
            <div class='ddItem'><a target="_blank" href='../../RustBiteByByte.html'>Rust&nbsp;bites&nbsp;</a></div>\
            <div class='ddItem'><a target="_blank" href='../../BitsRepo.html'>Bits&nbsp;-&nbsp;C++,Rust,C#,Python,JvScpt&nbsp;</a></div>\
            <div class='ddItem'><a target="_blank" href='../../BuildOn.html'>BuildOn:&nbsp;learn&nbsp;Rust&nbsp;&nbsp;</a></div>\
            <div class='ddItem'><a target="_blank" href='../../IdiomsAndPatterns.html'>Idioms&nbsp;&amp;&nbsp;Patterns:&nbsp;depricated</a></div>\
            <div class='ddItem'><a target="_blank" href='../../IndexPage.html'>Rust Glossary</a></div>\
            <div class='ddItem'><a target="_blank" href='../../InfDataLib_1.html'>Inf Data Lib - A.Zaitsev</a></div>\
            <div class='ddItem'><a target="_blank" href='../../MLiPS_1.html'>MLiPS - M.Corley</a></div>\
            <div class='ddItem'><a target="_blank" href='../../StoryTeller_LocalStorage.html'>StoryTeller:&nbsp;depricated</a></div>\
            <div class='ddItem'><a target="_blank" href='../../StoryTellerDesign.html'>StoryTeller Design</a></div>\
            <div class='ddItem'><a target="_blank" href='../PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
      Resrcs&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Code Resources</div>\
          <div class='ddItem'><a target="_blank" href='../../Videos.html' class='menuItem'>Videos</a></div>\
          <div class='ddItem'><a target="_blank" href='../../Resources.html'>Presentations&nbsp;&amp;&nbsp;Diagrams&nbsp;&nbsp;</a></div>\
          <div class='ddItem'><a target="_blank" href='../PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
          <div class='ddItem'><a target="_blank" href='../../Conferences.html'>Conferences:&nbsp;videos&nbsp;&amp;&nbsp;slides&nbsp;&nbsp;</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a target="_blank" href='../../Design.html'>Design Process</a></div>\
                <div class='ddItem ddDetails'><a target="_blank" href='../../UML.html'>UML Diagrams</a></div>\
                <div class='ddItem ddDetails'><a target="_blank" href='../../ProjectsList.html'>Project suggestions</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>C++</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../LangCpp.html'>C++&nbsp;Language&nbsp;Resources&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://en.cppreference.com/w/'>CppReference.com</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md'>C++ Core Guidelines</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../CppReferences.html'>C++ References</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../CppExamples.html'>C++ Example Code</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../CppSynopsis.html'>C++ Synopsis</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../DesignNote-Cpp11.html'>C++11 Survey</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Rust</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../RustBites/RustBites_CodeExamples.html'>RustBites Code Examples</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://github.com/JimFawcett/RustPlaygroundExamples'>RustPlaygroundExamples</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../IndexPage.html'>Rust Glossary</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Regular Expressions</summary>\
            <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a target="_blank" href='https://cs.lmu.edu/~ray/notes/regex/'>Regular Expressions</a></div>\
                <div class='ddItem ddDetails'><a target="_blank" href='https://dev.to/chrisachard/intro-to-regex-for-web-developers-2fj4'>RegExp&nbsp;for&nbsp;JavaScript</a></div>\
                <div class='ddItem ddDetails'><a target="_blank" href='http://cpprocks.com/files/c++11-regex-cheatsheet.pdf'>C++11 regex</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>WebDev</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../WebNotes.html'>Web Notes</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://encycolorpedia.com/named'>Web Colors</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../TestFlexMenu.html'>TestFlexMenu</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a target="_blank" href='../../CommCompare.html' class='menuItem'>CommCompare:&nbsp;Rust&nbsp;&amp;&nbsp;C++</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Tests</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../Bits/Bits_DataTest.html'>New Test Bits UI</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../Bits/Bits_Hello.html'>Test Bits UI</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../PageFrame1.html'>Test PageFrame</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../TestFlexMenu.html'>Test FlexMenu</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a target="_blank" href='../../personalComputerSecurity.html'>Personal&nbsp;Computer&nbspSecurity&nbsp;</a></div>\
          <div class='ddItem'><a target="_blank" href='../../TechnicalLinks.html'>Technical Links</a></div>\
          <div class='ddItem'><a target="_blank" href='https://github.com/joshnh/Git-Commands'>git commands</a></div>\
          <div class='ddItem'><a target="_blank" href='../VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Neighborhoods</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://JimFawcett.github.io'>JimFawcett-github</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://ecs.syr.edu/faculty/fawcett'>JimFawcett-SyracuseUniv</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://mwcorley79.github.io/MikeCorley/'>Mike Corley</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://github.com/CommProjectComparisons'>CommProjectComparisons-github&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://csiac.org'>CSIAC</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://www.fluentcpp.com'>Fluent {C++}</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://www.boost.org/'>Boost&nbsp;Library&nbsp;(C++)</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://www.pocoproject.org/'>poco&nbsp;Library&nbsp;(C++ networking)&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://openframeworks.cc/'>openFrameworks&nbsp;(C++ graphics)</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://github.com/microsoft'>github.com/Microsoft</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='https://www.taniarascia.com/'>taniarascia.com (JavaScript, CSS)&nbsp;&nbsp;</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a target="_blank" href='../../SummerReading.html'>Summer Reading</a></div>\
          <div class='ddItem'><a target="_blank" href='../../Interviews.html'>Job Interviews</a></div>\
          <div style='height:2em;'></div>\
      </div>\
    </div>\
    <div class='menuItem'>\
      Blogs&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Opinions&nbsp;&amp;&nbsp;Ideas</div>\
          <div class='ddItem'><a target="_blank" href='../../Blog.html'>First&nbsp;Things</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogDesign.html'>SW&nbsp;Design</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogPrinciples.html'>Design&nbsp;Principles</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogOOD.html'>OO&nbsp;Design</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogObjectModels.html'>Object&nbsp;Models</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogGlobals.html'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Engineering SW</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogOCD.html'>Concept&nbsp;Document</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogTesting.html'>SW&nbsp;Testing</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Software Systems&nbsp;&nbsp;</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogStructure.html'>SW&nbsp;Structure</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogMessagePassingComm.html'>Msg-Passing&nbsp;Comm</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogActiveObjects.html'>Active&nbsp;Objects</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Reusable Pkgs</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogNoSql.html'>noSQL&nbsp;Database</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogParser.html'>Parsing</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogMTree.html'>M-ary&nbsp;Trees</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogGraph.html'>Directed&nbsp;Graphs</a></div>\
              <div class='ddItem ddDetails'><a target="_blank" href='../../BlogFileSystem.html'>C++&nbsp;FileSystem</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a target="_blank" href='../../SummerReading.html'>Summer&nbsp;Reading</a></div>\
          <div style='height:2em;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='menuItem'><a id='help' onclick='getHelp()'>Help</a></div>\
    <div class='menuItem'><a id='prevLink' href='#'>Prev</a></div>\
    <div class='menuItem'><a id='nextLink' href='#'>Next</a></div>\
  </div>\
  <div style='clear:all;'></div>";
}

/* define page object with page methods and data fields */

let page = new Object();

//function initializeNextPrev() {

//  /* these page items cannot be boosted to global level (not defined there) */

//  page.nxt = document.getElementById("Next");
//  page.prv = document.getElementById("Prev");
//  page.nxtlnk = document.getElementById("nextLink");
//  page.prvlnk = document.getElementById("prevLink");
//  page.nxtlnk2 = document.getElementById("nextLink2");
//  page.prvlnk2 = document.getElementById("prevLink2");

//  if (!isDefined(page.nxt)) {
//    page.nxtlnk.style.display = "none";  // button top right menu
//    page.nxtlnk2.style.display = "none";  // button bottom right menu
//  }
//  else {
//    page.nxtlnk.setAttribute('href', page.nxt.href);
//    page.nxtlnk2.setAttribute('href', page.nxt.href);
//  }

//  if (page.prv === null) {
//    page.prvlnk.style.display = "none";  // button top right menu
//    page.prvlnk2.style.display = "none";  // button bottom right menu
//  }
//  else {
//    page.prvlnk.href = page.prv.href;
//    page.prvlnk2.href = page.prv.href;
//  }
//}

//function initializePages() { }
/* provide click functionality for menu buttons */

var bottomMenu = new Object();

//bottomMenu.next = function () {
//  page.nxt.click();
//}
//bottomMenu.prev = function () {
//  page.prv.click();
//}
//bottomMenu.top = function () {
//  location.hash = "#top";
//}

//bottomMenu.bottom = function () {
//  location.hash = "#bottom";
//}

//bottomMenu.home = function () {
//  window.location.assign("index.html");
//}

//bottomMenu.siteMap = function () {
//  window.location.assign("SiteMap.html");
//}

//bottomMenu.pages = function () {
//  var menu = document.getElementById("pages");
//  var pageStyle = menu.style.display;
//  if (isDefined(menu)) {
//    if (menu.style.display == "flex")
//      menu.style.display = "none";
//    else
//      menu.style.display = "flex";
//  }
//};

//bottomMenu.sections = function () {
//  var menu = document.getElementById("sections");
//  if (isDefined(menu)) {
//    if (menu.style.display == "flex")
//      menu.style.display = "none";
//    else
//      menu.style.display = "flex";
//  }
//}

bottomMenu.keys = function () {
  storyHlpMenu.keys();
}

//bottomMenu.toggleMenus = function () {
//  bottomMenu.pages();
//  bottomMenu.sections();
//}

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

