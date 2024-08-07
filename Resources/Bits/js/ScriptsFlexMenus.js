/* --------------------------------------------------------------
 *  isDefined(elem)
 * --------------------------------------------------------------
 *  Checks to see if a JavaScript variable has been declared and
 *  initialized
 */
function isDefined(elem) {
  //if (typeof elem === 'function')
  //  return true;
  if (typeof elem === 'undefined' || elem === null || elem === undefined) {
    return false;
  }
  return true;
}

var flexMenu = new Object();

function initializeMenu() {

    // create top menu
  
    var topMenu = document.getElementsByTagName("nav");
    topMenu[0].innerHTML = "<div class='navbar'>\
    <div class='menuItem'>\
        Home&#9662\
        <div class='dropdown'>\
            <div style='height:0.25em;'></div>\
            <div class='ddItem'><a href='index.html'>Home</a></div>\
            <div class='ddItem'><a href='SiteMap.html'>SiteMap</a></div>\
            <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
              <summary>About&nbsp;Site&nbsp;&nbsp;&nbsp;</summary>\
              <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='JimFawcett.html'>Jim Fawcett</a></div>\
              <div class='ddItem ddDetails'><a href='Interesting.html'>Interesting&nbsp;things&nbsp;&nbsp;</a></div>\
              <div class='ddItem ddDetails'><a href='Friends.html'>Friends&nbsp;&amp;&nbsp;Collaborators</a></div>\
              <div class='ddItem ddDetails'><a href='Help.html'>Help</a></div>\
              <div class='ddItem ddDetails'><a href='SitePlans.html'>Site Plans</a></div>\
              <div class='ddItem ddDetails'><a href='#' onclick='togglenavKeys()'>Toggle Nav Keys</a></div>\
              <div class='ddItem ddDetails'><a href='#' onclick='toggleSwipeEvents()'>Toggle Swipe Events</a></div>\
              <div class='ddItem ddDetails'><a href='SiteDesign.html'>Site Design</a></div>\
              <div class='ddItem ddDetails'><a href='BookDesignCourse.html'>Design Course</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='index.html'>L1 Site Home</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='RsRepositories.html'>L2&nbsp;Repository&nbsp;webpage</a></div>\
              <div class='ddItem ddDetails'><a class='border' href='RustBiteByByte.html'>L3&nbsp;Rust&nbsp;Bites</a></div>\
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
            <div class='ddItem'><a href='indexBasic.html'>Basics&nbsp;Track&nbsp;Summary&nbsp;</a></div>\
            <div class='ddItem'><a href='Resources/BasicBites/BasicBites_Intro.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;first&nbsp;bite&nbsp;</a ></div>\
            <div class='ddItem'><a href='indexCpp.html'>C++ Track&nbsp;Summary&nbsp;</a></div>\
            <div class='ddItem'><a href='Resources/CppBites/CppBites_Intro.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;first&nbsp;bite&nbsp;</a ></div>\
            <div class='ddItem'><a href='https://www.w3schools.com/cpp/trycpp.asp?filename=demo_compiler' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a></div>\
            <div class='ddItem'><a href='indexRust.html'>Rust Track&nbsp;Summary&nbsp;</a></div>\
            <div class='ddItem'><a href='Resources/RustBites/RustBites_Intro.html' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;first&nbsp;bite&nbsp;</a ></div>\
            <div class='ddItem'><a href='https://play.rust-lang.org/' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a></div>\
            <div class='ddItem'><a href='indexCs.html'>C# Track&nbsp;Summary&nbsp;</a></div>\
            <div class='ddItem'><a class='undef' href='javascript:;' style = 'font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;first&nbsp;bite&nbsp;</a ></div>\
            <div class='ddItem'><a href='https://dotnetfiddle.net/' style='font-size:0.9em;'>&nbsp;&nbsp;-&nbsp;online&nbsp;compiler&nbsp;</a></div>\
            <div style='height:2em;'></div>\
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
            <div class='ddLabel darkItem'>Stories&nbsp;&amp;&nbsp;Bites</div>\
            <div class='ddItem'><a href='Stories.html'>What is a Story?</a></div>\
            <div class='ddItem'><a href='BasicBiteByByte.html'>Basics Story</a></div>\
            <div class='ddItem'><a href='DesignBites.html'>Design Story</a></div>\
            <div class='ddItem'><a href='CppStoryRepo.html'>C++ Story</a></div>\
            <div class='ddItem'><a href='RustStoryRepo.html'>Rust Story</a></div>\
            <div class='ddItem'><a href='RustBiteByByte.html'>Rust&nbsp;bite&nbsp;by&nbsp;byte&nbsp;</a></div>\
            <div class='ddItem'><a href='BuildOn.html'>BuildOn:&nbsp;learn&nbsp;Rust&nbsp;&nbsp;</a></div>\
            <div class='ddItem'><a href='IdiomsAndPatterns.html'>Idioms&nbsp;&amp;&nbsp;Patterns&nbsp;</a></div>\
            <div class='ddItem'><a href='IndexPage.html'>Rust Glossary</a></div>\
            <div class='ddItem'><a href='InfDataLib_1.html'>Inf Data Lib - A.Zaitsev</a></div>\
            <div class='ddItem'><a href='MLiPS_1.html'>MLiPS - M.Corley</a></div>\
            <div class='ddItem'><a href='StoryTeller_LocalStorage.html'>StoryTeller&nbsp;depricated</a></div>\
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
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Tests</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='TestFlexMenu.html'>Test Flex Menu</a></div>\
              <div class='ddItem ddDetails'><a href='TestSiblingFlexMenu.html'>Test Sibling Flex Menu</a></div>\
              <div class='ddItem ddDetails'><a href='WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a href='TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a href='TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a href='../Test/FlexMenus/TestFlexMenu.html'>TestFlexMenu - Basic</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
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
          <div class='ddLabel darkItem'>Opinions&nbsp;&amp;&nbsp;Ideas</div>\
          <div class='ddItem'><a href='Blog.html'>First&nbsp;Things</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='BlogDesign.html'>SW&nbsp;Design</a></div>\
              <div class='ddItem ddDetails'><a href='BlogPrinciples.html'>Design&nbsp;Principles</a></div>\
              <div class='ddItem ddDetails'><a href='BlogOOD.html'>OO&nbsp;Design</a></div>\
              <div class='ddItem ddDetails'><a href='BlogObjectModels.html'>Object&nbsp;Models</a></div>\
              <div class='ddItem ddDetails'><a href='BlogGlobals.html'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Engineering SW</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='BlogOCD.html'>Concept&nbsp;Document</a></div>\
              <div class='ddItem ddDetails'><a href='BlogTesting.html'>SW&nbsp;Testing</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Software Systems&nbsp;&nbsp;</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='BlogStructure.html'>SW&nbsp;Structure</a></div>\
              <div class='ddItem ddDetails'><a href='BlogMessagePassingComm.html'>Msg-Passing&nbsp;Comm</a></div>\
              <div class='ddItem ddDetails'><a href='BlogActiveObjects.html'>Active&nbsp;Objects</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Reusable Pkgs</summary>\
            <div style='margin-left:1.0em;'>\
              <div class='ddItem ddDetails'><a href='BlogNoSql.html'>noSQL&nbsp;Database</a></div>\
              <div class='ddItem ddDetails'><a href='BlogParser.html'>Parsing</a></div>\
              <div class='ddItem ddDetails'><a href='BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a></div>\
              <div class='ddItem ddDetails'><a href='BlogMTree.html'>M-ary&nbsp;Trees</a></div>\
              <div class='ddItem ddDetails'><a href='BlogGraph.html'>Directed&nbsp;Graphs</a></div>\
              <div class='ddItem ddDetails'><a href='BlogFileSystem.html'>C++&nbsp;FileSystem</a></div>\
              <div style='height:0.5em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a href='SummerReading.html'>Summer&nbsp;Reading</a></div>\
          <div style='height:2em;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='menuItem'><a id='prevLink' href='#'>Prev</a></div>\
    <div class='menuItem'><a id='nextLink' href='#'>Next</a></div>\
  </div>\
  <button class='menuItem menuScroll' onclick='scrollMenuLeft()'>&lt;</button>\
  <button class='menuItem menuUnscroll' onclick='scrollMenuRight()'>&gt;</button>\
  <div style='clear:all;'></div>";

  // show footer with copyright notice and revision date

  var bottomMenu = document.getElementsByTagName("info-bar");
  if (!isDefined(bottomMenu)) {
    return;
  }
  var modified = document.getElementById("modified");
  bottomMenu[0].innerHTML =
    "<div class='menuItem right' style='width:2em;'>&nbsp;</div>\
  <div class='menuItem'><a id='nextLink2' href='#'>Next</a></div>\
  <div class='menuItem right'><a id='prevLink2' href='#'>Prev</a></div>\
  <div class='menuItem right'><a onclick='flexMenu.pages()' href='javascript:;'>Pages</a></div>\
  <div class='menuItem right'><a onclick='flexMenu.sections()' href='javascript:;'>Sections</a></div>\
  <div class='menuItem right'><a onclick='flexMenu.about()' href='javascript:;'>About</a></div>";
}

function initializeNextPrev() {
  
  // hide Next and Prev links if page has no next or previous pages
  // otherwise load href from page link

  var nxt = document.getElementById("Next");
  var nKey = document.getElementById("nKey");
  var swKey = document.getElementById("sKey");
  if (nxt === null) {
    document.getElementById("nextLink").style.display = "none";  // button top right menu
    document.getElementById("nextLink2").style.display = "none";  // button top right menu
    if(isDefined(nKey))
      nKey.style.display = "none";
    if (isDefined(swKey))
      swKey.style.display = "none";
  }
  else {
    var nl = document.getElementById("nextLink");
    nl.setAttribute('href', nxt.href);
    var nl = document.getElementById("nextLink2");
    nl.setAttribute('href', nxt.href);
    // document.getElementById("nextLink").href = nxt.href;
    if (isDefined(nKey))
      nKey.style.display = "inline";
    if (isDefined(swKey))
      swKey.style.display = "inline";
  }

  var prv = document.getElementById("Prev");
  var pKey = document.getElementById("pKey");
  if (prv === null) {
    document.getElementById("prevLink").style.display = "none";  // button top right menu
    document.getElementById("prevLink2").style.display = "none";  // button top right menu
    if(isDefined(pKey))
      pKey.style.display = "none";
  }
  else {
    document.getElementById("prevLink").href = prv.href;
    document.getElementById("prevLink2").href = prv.href;
    if(isDefined(pKey))
      pKey.style.display = "inline";
  }
}

function setPages() {
  var pgs = document.createElement("pages");
  
}

flexMenu.prev = function () {
  var prv = document.getElementById("Prev");
  prv.click();
  // if(isDefined(prv)) {
  //   prv.click();
  // }
}

flexMenu.next = function () {
  var nxt = document.getElementById("Next");
  nxt.click();
  // if(isDefined(nxt)) {
  //   nxt.click();
  // }
}

flexMenu.top = function () {
  location.hash = "#top";
}

flexMenu.bottom = function () {
  location.hash = "#bottom";
}

flexMenu.siteMap = function () {
  window.location.assign("SiteMap.html");
}

flexMenu.pages = function () {
  var menu = document.getElementById("pages");
  var pageStyle = menu.style.display;
  if (isDefined(menu)) {
    if (menu.style.display == "flex")
      menu.style.display = "none";
    else
      menu.style.display = "flex";
  }
};

flexMenu.sections = function () {
  var menu = document.getElementById("sections");
  if (isDefined(menu)) {
    if (menu.style.display == "flex")
      menu.style.display = "none";
    else
      menu.style.display = "flex";
  }
}

flexMenu.about = function () {
  var date = document.getElementById("modified").innerText;
  var menu = document.getElementById("about");
  var help = document.getElementById("hlp");
  menu.innerHTML = "copyright(&#xA9;) Jim Fawcett, 2021" + "<br />" + "Page last modified: " + date;
  menu.innerHTML += "<br /><a href='#' onclick='flexMenu.showHelp()'>help menu</a>"
  if (isDefined(menu)) {
    if (menu.style.display == "block") {
      menu.style.display = "none";
      help.style.display = "none";
    }
    else {
      menu.style.display = "block";
    }
  }
}

flexMenu.showHelp = function () {
  var helpMenu = document.getElementById("hlp");
  helpMenu.style.display = "block";
  //if (!defined(helpMenu)) {
  //  return;
  //}
  helpMenu.innerHTML = '<table>\
    <tr>\
      <td class="helpItem" onclick="storyMenu.toggleTOC()">Esc</td>\
      <td>toggle&nbsp;menus</td>\
    </tr>\
    <tr>\
      <td class="helpItem" onclick="location.reload()">R</td><td>Refresh</td>\
    </tr>\
    <tr>\
      <td class="helpItem" onclick="flexMenu.next()">N</td><td>Next Bite</td>\
    </tr>\
    <tr>\
      <td class="helpItem" onclick="flexMenu.prev()">P</td><td>Prev Bite</td>\
    </tr>\
    <tr>\
      <td class="helpItem" onclick="history.back()">B</td><td>Back</td>\
    </tr>\
    <tr>\
      <td class="helpItem" onclick="flexMenu.top()">T</td><td>scroll&nbsp;to&nbsp;top</td>\
    </tr>\
    <tr>\
      <td class="helpItem" onclick="flexMenu.bottom()">E</td><td>scroll&nbsp;to&nbsp;end</td>\
    </tr>\
    <tr>\
      <td class="helpItem" onclick="flexMenu.siteMap()">H</td><td>SiteMap</td>\
    </tr>\
  </table>';
}

function initialize() {
  initializePages();
  initializeMenu();
  initializeNextPrev();
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
      if (cpprp !== "flex") {
        items[len-i-1].style.display = "flex";
        break;
      }
    }
  }

  // listen for keyboard events:
  // - key actions are defined in ScriptsKeyboard.js

  document.addEventListener('keydown', (event) => { keyAction(event); }, false);

  // listen for mouse events:
  // - mouse actions are defined below

  //document.addEventListener('mousedown', (event) => { mouseAction(event); }, false);


  