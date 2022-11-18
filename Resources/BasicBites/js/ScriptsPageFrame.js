/*
 * ScriptsPageFrame.js
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
  initializeMenu();
  initializePages();
  initializeNextPrev();
  storyHlpMenu.helpMenu();
}

function goHome() {
  window.location.href = "../../index.html";
}
//<div onclick='goHome()'>Site&#9662</div>\

/* create top menu */

function initializeMenu() {

  var topMenu = document.getElementById("navbar");
  topMenu.innerHTML = "<div class='navbar'>\
    <div class='menuItem'>\
        <div>Site&#9662</div>\
        <div class='dropdown'>\
            <div style='height:0.25em;'></div>\
            <div class='ddItem'><a href='../../index.html'>Home</a></div>\
            <div class='ddItem'><a href='../../SiteMap.html'>SiteMap</a></div>\
            <div class='ddItem'><a href='../../SiteDemo.html'>SiteDemo</a></div>\
            <div class='ddItem'><a href='../../SiteDesign.html'>SiteDesign</a></div>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>About&nbsp;Site&nbsp;&nbsp;&nbsp;</summary>\
              <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='../../JimFawcett.html'>Jim Fawcett</a></div>\
              <div class='ddItem ddDetails'><a href='../../Interesting.html'>Interesting&nbsp;things&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a href='../../Friends.html'>Friends&nbsp;&amp;&nbsp;Collaborators</a></div>\
              <div class='ddItem ddDetails'><a href='../../Help.html'>Help</a></div>\
              <div class='ddItem ddDetails'><a href='../../SitePlans.html'>Site Plans</a></div>\
              <div class='ddItem ddDetails'><a href='#' onclick='togglenavKeys()'>Toggle Nav Keys</a></div>\
              <div class='ddItem ddDetails'><a href='#' onclick='toggleSwipeEvents()'>Toggle Swipe Events</a></div>\
              <div class='ddItem ddDetails'><a href='../../BookDesignCourse.html'>Design Course</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='../../index.html'>L1 Site Home</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='../../RsRepositories.html'>L2&nbsp;Repository&nbsp;webpage</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='../../RustBiteByByte.html'>L3&nbsp;Rust&nbsp;Bites</a></div>\
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
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>Basics</summary>\
              <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='../../indexBasic.html'>&nbsp;&nbsp;Basics&nbsp;Track&nbsp;Summary&nbsp;</a></div>\
                <div class='ddItem ddDetails'><a href='BasicBites_Platform.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;Basic&nbsp;Bites&nbsp;</a ></div>\
                <div style='height:0.25em;'></div>\
              </div>\
            </details>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>C++</summary>\
              <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='../../indexCpp.html'>&nbsp;&nbsp;C++ Track&nbsp;Summary&nbsp;</a></div>\
                <div class='ddItem ddDetails'><a href='../../CppStoryRepo.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;C++&nbsp;Story&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../CppBites/CppBites_Intro.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;C++&nbsp;bites&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../CppBits.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;C++&nbsp;bits&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../CppRepositories.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;C++&nbsp;CodeRepo&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../CodeBits.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;CodeBitsRepo&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='https://www.w3schools.com/cpp/trycpp.asp?filename=demo_compiler' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a></div>\
                <div style='height:0.25em;'></div>\
              </div>\
            </details>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>Rust</summary>\
              <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='../../indexRust.html'>&nbsp;&nbsp;Rust Track&nbsp;Summary&nbsp;</a></div>\
                <div class='ddItem ddDetails'><a href='../../RustStoryRepo.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;Rust&nbsp;Story&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../RustBites/RustBites_Intro.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;Rust&nbsp;Bites&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../RustBits.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;Rust&nbsp;Bits&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../RsRepositories.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;Rust&nbsp;CodeRepo&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../CodeBits.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;CodeBitsRepo&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='https://play.rust-lang.org/' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a></div>\
                <div style='height:0.25em;'></div>\
              </div>\
            </details>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>C#</summary>\
              <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='../../indexCs.html'>&nbsp;&nbsp;C#&nbsp;Track&nbsp;Summary&nbsp;</a></div>\
                <div class='ddItem ddDetails'><a class='undef' href='javascript:;' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;C#&nbsp;Story&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a class='undef' href='javascript:;' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;C#&nbsp;Bites&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../CSharpBits.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;C#&nbsp;Bits&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../CsRepositories.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;C#&nbsp;CodeRepo&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='../../CodeBits.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;CodeBitsRepo&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a href='https://dotnetfiddle.net/' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a></div>\
                <div style='height:0.25em;'></div>\
              </div>\
            </details>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>WebDev</summary>\
              <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='../../indexWebDev.html'>&nbsp;&nbsp;WebDev&nbsp;Summary&nbsp;</a></div>\
                <div class='ddItem ddDetails'><a class='undef' href='javascript:;' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;WebDev&nbsp;Story&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a class='undef' href='javascript:;' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;WebDev&nbsp;Bites&nbsp;</a ></div>\
                <div class='ddItem ddDetails'><a class='undef' href='javascript:;' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;WebDev&nbsp;CodeRepo&nbsp;</a ></div>\
                <div style='height:0.25em;'></div>\
              </div>\
            </details>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>Design</summary>\
              <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='../../indexDesign.html'>&nbsp;&nbsp;Design&nbsp;Track&nbsp;Summary&nbsp;</a></div>\
                <div class='ddItem ddDetails'><a href='../DesignBites/DesignBites_Intro.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;Design&nbsp;Bites&nbsp;</a ></div>\
                <div style='height:0.25em;'></div>\
              </div>\
            </details>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>Deployment&nbsp;&nbsp;</summary>\
              <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='../../indexDeployment.html'>&nbsp;&nbsp;Deployment&nbsp;Track&nbsp;Summary&nbsp;</a></div>\
                <div class='ddItem ddDetails'><a href='../DeploymentBites/DeployBites_Git.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;Deploy&nbsp;Bites&nbsp;</a ></div>\
                <div style='height:0.25em;'></div>\
              </div>\
            </details>\
            <div style='height:2em;'>&nbsp;</div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Repos&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Repositories</div>\
            <div class='ddItem'><a href='../../CppRepositories.html'>C++</a></div>\
            <div class='ddItem'><a href='../../RsRepositories.html'>Rust</a></div>\
            <div class='ddItem'><a href='../../CsRepositories.html'>C#</a></div>\
            <div class='ddItem'><a href='../../JsRepositories.html'>JavaScript</a></div>\
            <div class='ddItem'><a href='../../OtherRepositories.html'>Other</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Stories&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Stories&nbsp;&amp;&nbsp;Bites</div>\
            <div class='ddItem'><a href='../../Stories.html'>What is a Story?</a></div>\
            <div class='ddItem'><a href='../../BasicBiteByByte.html'>Basics Story</a></div>\
            <div class='ddItem'><a href='../../DesignBites.html'>Design Story</a></div>\
            <div class='ddItem'><a href='../../CppStoryRepo.html'>C++ Story</a></div>\
            <div class='ddItem'><a href='../../RustStoryRepo.html'>Rust Story</a></div>\
            <div class='ddItem'><a href='../../RustBiteByByte.html'>Rust&nbsp;bite&nbsp;by&nbsp;byte&nbsp;</a></div>\
            <div class='ddItem'><a href='../../BuildOn.html'>BuildOn:&nbsp;learn&nbsp;Rust&nbsp;&nbsp;</a></div>\
            <div class='ddItem'><a href='../../IdiomsAndPatterns.html'>Idioms&nbsp;&amp;&nbsp;Patterns&nbsp;</a></div>\
            <div class='ddItem'><a href='../../IndexPage.html'>Rust Glossary</a></div>\
            <div class='ddItem'><a href='../../InfDataLib_1.html'>Inf Data Lib - A.Zaitsev</a></div>\
            <div class='ddItem'><a href='../../MLiPS_1.html'>MLiPS - M.Corley</a></div>\
            <div class='ddItem'><a href='../../StoryTeller_LocalStorage.html'>StoryTeller&nbsp;depricated</a></div>\
            <div class='ddItem'><a href='../../StoryTellerDesign.html'>StoryTeller Design</a></div>\
            <div class='ddItem'><a href='../PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
            <div style='height:2em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
      Resrcs&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Code Resources</div>\
          <div class='ddItem'><a href='../../Videos.html' class='menuItem'>Videos</a></div>\
          <div class='ddItem'><a href='../../Resources.html'>Presentations&nbsp;&amp;&nbsp;Diagrams&nbsp;&nbsp;</a></div>\
          <div class='ddItem'><a href='../PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
          <div class='ddItem'><a href='../../Conferences.html'>Conferences:&nbsp;videos&nbsp;&amp;&nbsp;slides&nbsp;&nbsp;</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:1.0em;'>\
                <div class='ddItem ddDetails'><a href='../../Design.html'>Design Process</a></div>\
                <div class='ddItem ddDetails'><a href='../../UML.html'>UML Diagrams</a></div>\
                <div class='ddItem ddDetails'><a href='../../ProjectsList.html'>Project suggestions</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>C++</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='../../LangCpp.html'>C++&nbsp;Language&nbsp;Resources&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a href='https://en.cppreference.com/w/'>CppReference.com</a></div>\
              <div class='ddItem ddDetails'><a href='https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md'>C++ Core Guidelines</a></div>\
              <div class='ddItem ddDetails'><a href='../../CppReferences.html'>C++ References</a></div>\
              <div class='ddItem ddDetails'><a href='../../CppExamples.html'>C++ Example Code</a></div>\
              <div class='ddItem ddDetails'><a href='../../CppSynopsis.html'>C++ Synopsis</a></div>\
              <div class='ddItem ddDetails'><a href='../../DesignNote-Cpp11.html'>C++11 Survey</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Rust</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='https://github.com/JimFawcett/RustPlaygroundExamples'>RustPlaygroundExamples</a></div>\
              <div class='ddItem ddDetails'><a href='../../IndexPage.html'>Rust Glossary</a></div>\
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
              <div class='ddItem ddDetails'><a href='../../WebNotes.html'>Web Notes</a></div>\
              <div class='ddItem ddDetails'><a href='../../WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a href='https://encycolorpedia.com/named'>Web Colors</a></div>\
              <div class='ddItem ddDetails'><a href='../../TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a href='../../TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a href='../../TestFlexMenu.html'>TestFlexMenu</a></div>\
              <div class='ddItem ddDetails'><a href='../../../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Tests</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='../../PageFrame1.html'>Test PageFrame</a></div>\
              <div class='ddItem ddDetails'><a href='../../TestFlexMenu.html'>Test FlexMenu</a></div>\
              <div class='ddItem ddDetails'><a href='../../WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a href='../../TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a href='../../TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a href='../../../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a href='../../TechnicalLinks.html'>Technical Links</a></div>\
          <div class='ddItem'><a href='https://github.com/joshnh/Git-Commands'>git commands</a></div>\
          <div class='ddItem'><a href='../VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a></div>\
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
          <div class='ddItem'><a href='../../SummerReading.html'>Summer Reading</a></div>\
          <div class='ddItem'><a href='../../Interviews.html'>Job Interviews</a></div>\
          <div style='height:2em;'></div>\
      </div>\
    </div>\
    <div class='menuItem'>\
      Blogs&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Opinions&nbsp;&amp;&nbsp;Ideas</div>\
          <div class='ddItem'><a href='../../Blog.html'>First&nbsp;Things</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='../../BlogDesign.html'>SW&nbsp;Design</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogPrinciples.html'>Design&nbsp;Principles</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogOOD.html'>OO&nbsp;Design</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogObjectModels.html'>Object&nbsp;Models</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogGlobals.html'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Engineering SW</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='../../BlogOCD.html'>Concept&nbsp;Document</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogTesting.html'>SW&nbsp;Testing</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Software Systems&nbsp;&nbsp;</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='../../BlogStructure.html'>SW&nbsp;Structure</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogMessagePassingComm.html'>Msg-Passing&nbsp;Comm</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogActiveObjects.html'>Active&nbsp;Objects</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Reusable Pkgs</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='../../BlogNoSql.html'>noSQL&nbsp;Database</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogParser.html'>Parsing</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogMTree.html'>M-ary&nbsp;Trees</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogGraph.html'>Directed&nbsp;Graphs</a></div>\
              <div class='ddItem ddDetails'><a href='../../BlogFileSystem.html'>C++&nbsp;FileSystem</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a href='../../SummerReading.html'>Summer&nbsp;Reading</a></div>\
          <div style='height:2em;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='menuItem'><a id='prevLink' href='#'>Prev</a></div>\
    <div class='menuItem'><a id='nextLink' href='#'>Next</a></div>\
  </div>\
  <div style='clear:all;'></div>";
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
    page.nxtlnk2.setAttribute('href', page.nxt.href);
  }

  if (page.prv === null) {
    page.prvlnk.style.display = "none";  // button top right menu
    page.prvlnk2.style.display = "none";  // button bottom right menu
  }
  else {
    page.prvlnk.href = page.prv.href;
    page.prvlnk2.href = page.prv.href;
  }
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

