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

/* run menu builders at startup */

function initialize() {
  actions.keysMenu();
  initializeMenu();
  initializePages();
  initializeNextPrev();
}

/* create top menu */
function loadif() {
  loc = window.location.href;
  if (window.self === window.top) {
    window.location.href = '../../TOC.html?src=' + loc;
  }
  else {
    location.reload();
  }
}

function initializeMenu() {

  var topMenu = document.getElementById("navbar");
  topMenu.innerHTML = "<div class='navbar'>\
    <div class='menuItem'>\
        <div>Site&#9662</div>\
        <div class='dropdown'>\
            <div style='height:0.25em;'></div>\
            <div class='ddItem'><a target='_self' href='../../index.html'>Home</a></div>\
            <div class='ddItem'><a target='_parent' onclick='loadif()'>Site Explorer</a></div>\
            <div class='ddItem'><a target='_self' href='../../SiteMap.html'>SiteMap</a></div>\
            <div class='ddItem'><a target='_self' href='../../SiteDemo.html'>SiteDemo</a></div>\
            <div class='ddItem'><a target='_self' href='../../SiteDesign.html'>SiteDesign</a></div>\
            <div class='ddItem'><a target='_self' href='../../ChatGPT.html'>ChatGPT</a></div>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>About&nbsp;Site&nbsp;&nbsp;&nbsp;</summary>\
              <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../../JimFawcett.html'>Jim Fawcett</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../Interesting.html'>Interesting&nbsp;things&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../Friends.html'>Friends&nbsp;&amp;&nbsp;Collaborators</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../Help.html'>Help</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../SitePlans.html'>Site Plans</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://github.com/JimFawcett'>Repositories&nbsp;code</a></div>\
              <div class='ddDetails' style='height:1em;'></div>\
            </div>\
          </details>\
          <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Tracks&#9662\
        <div class='dropdown'>\
          <div class='ddLabel darkItem'>Code Tracks</div>\
          <div class='ddItem'><a target='_self' href='../../indexBasic.html'>&nbsp;Basics</a>&nbsp;</div>\
          <div class='ddItem'><a target='_self' href='../../indexCpp.html'>&nbsp;C++</a>&nbsp;</div>\
          <div class='ddItem'><a target='_self' href='../../indexRust.html'>&nbsp;Rust</a>&nbsp;</div>\
          <div class='ddItem'><a target='_self' href='../../indexCs.html'>&nbsp;C#</a>&nbsp;</div>\
          <div class='ddItem'><a target='_self' href='../../indexBits.html'>&nbsp;Bits</a>&nbsp;</div>\
          <div class='ddItem'><a target='_self' href='../../indexWebDev.html'>&nbsp;WebDev</a>&nbsp;</div>\
          <div class='ddItem'><a target='_self' href='../../indexDesign.html'>&nbsp;Design</a>&nbsp;</div>\
          <div class='ddItem'><a target='_self' href='../../indexDeployment.html'>&nbsp;Deployment</a>&nbsp;</div>\
          <div class='ddItem'><a target='_self' href='../../indexProjects.html'>&nbsp;Projects</a>&nbsp;</div>\
          <div style='height:2em;'>&nbsp;</div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Repos&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Repositories</div>\
            <div class='ddItem'><a target='_self' href='../../CppRepositories.html'>C++</a></div>\
            <div class='ddItem'><a target='_self' href='../../RsRepositories.html'>Rust</a></div>\
            <div class='ddItem'><a target='_self' href='../../CsRepositories.html'>C#</a></div>\
            <div class='ddItem'><a target='_self' href='../../JsRepositories.html'>JavaScript</a></div>\
            <div class='ddItem'><a target='_self' href='../../OtherRepositories.html'>Other</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Stories&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Stories,&nbsp;Bites,&nbsp;&amp;&nbsp;Bits&nbsp;</div>\
            <div class='ddItem'><a target='_self' href='../../Stories.html'>What is a Story?</a></div>\
            <div class='ddItem'><a target='_self' href='../../BasicBiteByByte.html'>Basics Bites</a></div>\
            <div class='ddItem'><a target='_self' href='../../DesignBites.html'>Design Bites</a></div>\
            <div class='ddItem'><a target='_self' href='../../CppStoryRepo.html'>C++&nbsp;Story</a></div>\
            <div class='ddItem'><a target='_self' href='../../CppBiteByByte.html'>C++&nbsp;Bites</a></div>\
            <div class='ddItem'><a target='_self' href='../../RustStoryRepo.html'>Rust&nbsp;Story</a></div>\
            <div class='ddItem'><a target='_self' href='../../RustBiteByByte.html'>Rust&nbsp;bites&nbsp;</a></div>\
            <div class='ddItem'><a target='_self' href='../../BitsRepo.html'>Bits&nbsp;-&nbsp;C++,Rust,C#,Python,JvScpt&nbsp;</a></div>\
            <div class='ddItem'><a target='_self' href='../../BuildOn.html'>BuildOn:&nbsp;learn&nbsp;Rust&nbsp;&nbsp;</a></div>\
            <div class='ddItem'><a target='_self' href='../../IdiomsAndPatterns.html'>Idioms&nbsp;&amp;&nbsp;Patterns:&nbsp;depricated</a></div>\
            <div class='ddItem'><a target='_self' href='../../IndexPage.html'>Rust Glossary</a></div>\
            <div class='ddItem'><a target='_self' href='../../InfDataLib_1.html'>Inf Data Lib - A.Zaitsev</a></div>\
            <div class='ddItem'><a target='_self' href='../../MLiPS_1.html'>MLiPS - M.Corley</a></div>\
            <div class='ddItem'><a target='_self' href='../../StoryTeller_LocalStorage.html'>StoryTeller:&nbsp;depricated</a></div>\
            <div class='ddItem'><a target='_self' href='../../StoryTellerDesign.html'>StoryTeller Design</a></div>\
            <div class='ddItem'><a target='_self' href='../PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
      Resrcs&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Code Resources</div>\
          <div class='ddItem'><a target='_self' href='../../Videos.html' class='menuItem'>Videos</a></div>\
          <div class='ddItem'><a target='_self' href='../../Resources.html'>Presentations&nbsp;&amp;&nbsp;Diagrams&nbsp;&nbsp;</a></div>\
          <div class='ddItem'><a target='_self' href='../PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
          <div class='ddItem'><a target='_self' href='../../Conferences.html'>Conferences:&nbsp;videos&nbsp;&amp;&nbsp;slides&nbsp;&nbsp;</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a target='_self' href='../../Design.html'>Design Process</a></div>\
                <div class='ddItem ddDetails'><a target='_self' href='../../UML.html'>UML Diagrams</a></div>\
                <div class='ddItem ddDetails'><a target='_self' href='../../ProjectsList.html'>Project suggestions</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>C++</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../../LangCpp.html'>C++&nbsp;Language&nbsp;Resources&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://en.cppreference.com/w/'>CppReference.com</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md'>C++ Core Guidelines</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../CppReferences.html'>C++ References</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../CppExamples.html'>C++ Example Code</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../CppSynopsis.html'>C++ Synopsis</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../DesignNote-Cpp11.html'>C++11 Survey</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Rust</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../RustBites/RustBites_CodeExamples.html'>RustBites Code Examples</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://github.com/JimFawcett/RustPlaygroundExamples'>RustPlaygroundExamples</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../IndexPage.html'>Rust Glossary</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Regular Expressions</summary>\
            <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a target='_self' href='https://cs.lmu.edu/~ray/notes/regex/'>Regular Expressions</a></div>\
                <div class='ddItem ddDetails'><a target='_self' href='https://dev.to/chrisachard/intro-to-regex-for-web-developers-2fj4'>RegExp&nbsp;for&nbsp;JavaScript</a></div>\
                <div class='ddItem ddDetails'><a target='_self' href='http://cpprocks.com/files/c++11-regex-cheatsheet.pdf'>C++11 regex</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>WebDev</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../../WebNotes.html'>Web Notes</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://encycolorpedia.com/named'>Web Colors</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../TestFlexMenu.html'>TestFlexMenu</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a target='_self' href='../../CommCompare.html' class='menuItem'>CommCompare:&nbsp;Rust&nbsp;&amp;&nbsp;C++</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Tests</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../Bits/Bits_DataTest.html'>New Test Bits UI</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../Bits/Bits_Hello.html'>Test Bits UI</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../PageFrame1.html'>Test PageFrame</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../TestFlexMenu.html'>Test FlexMenu</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a target='_self' href='../../personalComputerSecurity.html'>Personal&nbsp;Computer&nbspSecurity&nbsp;</a></div>\
          <div class='ddItem'><a target='_self' href='../../TechnicalLinks.html'>Technical Links</a></div>\
          <div class='ddItem'><a target='_self' href='https://github.com/joshnh/Git-Commands'>git commands</a></div>\
          <div class='ddItem'><a target='_self' href='../VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Neighborhoods</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='https://JimFawcett.github.io'>JimFawcett-github</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://ecs.syr.edu/faculty/fawcett'>JimFawcett-SyracuseUniv</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://mwcorley79.github.io/MikeCorley/'>Mike Corley</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://github.com/CommProjectComparisons'>CommProjectComparisons-github&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://csiac.org'>CSIAC</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://www.fluentcpp.com'>Fluent {C++}</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://www.boost.org/'>Boost&nbsp;Library&nbsp;(C++)</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://www.pocoproject.org/'>poco&nbsp;Library&nbsp;(C++ networking)&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://openframeworks.cc/'>openFrameworks&nbsp;(C++ graphics)</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://github.com/microsoft'>github.com/Microsoft</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='https://www.taniarascia.com/'>taniarascia.com (JavaScript, CSS)&nbsp;&nbsp;</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a target='_self' href='../../SummerReading.html'>Summer Reading</a></div>\
          <div class='ddItem'><a target='_self' href='../../Interviews.html'>Job Interviews</a></div>\
          <div style='height:2em;'></div>\
      </div>\
    </div>\
    <div class='menuItem'>\
      Blogs&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Opinions&nbsp;&amp;&nbsp;Ideas</div>\
          <div class='ddItem'><a target='_self' href='../../Blog.html'>First&nbsp;Things</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogDesign.html'>SW&nbsp;Design</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogPrinciples.html'>Design&nbsp;Principles</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogOOD.html'>OO&nbsp;Design</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogObjectModels.html'>Object&nbsp;Models</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogGlobals.html'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Engineering SW</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogOCD.html'>Concept&nbsp;Document</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogTesting.html'>SW&nbsp;Testing</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Software Systems&nbsp;&nbsp;</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogStructure.html'>SW&nbsp;Structure</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogMessagePassingComm.html'>Msg-Passing&nbsp;Comm</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogActiveObjects.html'>Active&nbsp;Objects</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Reusable Pkgs</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogNoSql.html'>noSQL&nbsp;Database</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogParser.html'>Parsing</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogMTree.html'>M-ary&nbsp;Trees</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogGraph.html'>Directed&nbsp;Graphs</a></div>\
              <div class='ddItem ddDetails'><a target='_self' href='../../BlogFileSystem.html'>C++&nbsp;FileSystem</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a target='_self' href='../../SummerReading.html'>Summer&nbsp;Reading</a></div>\
          <div style='height:2em;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='menuItem'><a id='help' onclick='getHelp()'>Help</a></div>\
    <div class='menuItem'>\
        Pages&#9662\
        <div class='dropdown'>\
          <div class='ddLabel darkItem'>Code&nbsp;Bits&nbsp;thread</div>\
            <div style='height:0.0em;'></div>\
            <div class='ddItem'><a href='Bits_Intro.html'>Introduction</a></div>\
            <div class='ddItem'><a href='Bits_Tooling.html'>Tooling</a></div>\
            <div class='ddItem'><a href='Bits_HelloRust.html'>Hello world</a></div>\
            <div class='ddItem'><a href='Bits_DataRust.html'>Data</a></div>\
            <div class='ddItem'><a href='Bits_ObjectsRust.html'>Objects</a></div>\
            <div class='ddItem'><a href='Bits_GenericRust.html'>Generics</a></div>\
            <div class='ddItem'><a href='Bits_IterRust.html'>Iteration</a></div>\
          <div style='height:2em;'></div>\
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

  if (!isDefined(page.nxt)) {
    page.nxtlnk.style.display = "none";  // button top right menu
    page.nxtlnk2.style.display = "none";  // button bottom right menu
  }
  else {
    page.nxtlnk.setAttribute('href', page.nxt.href);
    page.nxtlnk.setAttribute('target', page.nxt.target);
    page.nxtlnk2.setAttribute('href', page.nxt.href);
    page.nxtlnk2.setAttribute('target', page.nxt.target);
  }

  if (page.prv === null) {
    page.prvlnk.style.display = "none";  // button top right menu
    page.prvlnk2.style.display = "none";  // button bottom right menu
  }
  else {
    page.prvlnk.setAttribute('href', page.prv.href);
    page.prvlnk.setAttribute('target', page.prv.target);
    page.prvlnk2.setAttribute('href', page.prv.href);
    page.prvlnk2.setAttribute('target', page.prv.target);
  }
}

var bottomMenu = new Object();

bottomMenu.next = function () {
  page.nxt.click();
}
bottomMenu.prev = function () {
  page.prv.click();
}

bottomMenu.pages = function () {
  /*alert('pages');*/
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
  actions.keys();
}

bottomMenu.toggleMenus = function () {
  bottomMenu.pages();
  bottomMenu.sections();
}

bottomMenu.about = function () {
  //alert('about');
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
