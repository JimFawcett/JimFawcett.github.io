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

function initializeMenu() {

    // create top menu
  
    var topMenu = document.getElementsByTagName("nav");
    topMenu[0].innerHTML = "<div class='navbar'>\
    <div class='menuItem'>\
        Home&#9662\
        <div class='dropdown'>\
            <div class='ddItem'><a href='index.html'>Home</a></div>\
            <div class='ddItem'><a href='SiteMap.html'>SiteMap</a></div>\
            <div style='height:1em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Tracks&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Code Tracks</div>\
            <div class='ddItem'><a href='indexBasic.html'>Basics</a></div>\
            <div class='ddItem'><a href='indexCpp.html'>C++ Track</a></div>\
            <div class='ddItem'><a href='indexRust.html'>Rust Track</a></div>\
            <div class='ddItem'><a href='indexCs.html'>C# Track</a></div>\
            <div style='height:1em;'></div>\
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
            <div style='height:1em;'></div>\
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
            <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
            <div style='height:1em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
      Res&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>Code Resources</div>\
          <div class='ddItem'><a href='Videos.html' class='menuItem'>Videos</a></div>\
          <div class='ddItem'><a href='Resources.html'>Presentations&nbsp;&amp;&nbsp;Diagrams&nbsp;&nbsp;</a></div>\
          <div class='ddItem'><a href='Resources/PublishingSourceCode.pdf'>Site&nbsp;Presentation</a></div>\
          <div class='ddItem'><a href='Conferences.html'>Conferences:&nbsp;videos&nbsp;&amp;&nbsp;slides&nbsp;&nbsp;</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Design</summary>\
            <div style='margin-left:0.5em;'>\
                <div class='ddItem ddDetails'><a href='Design.html'>Design Process</a></div>\
                <div class='ddItem ddDetails'><a href='UML.html'>UML Diagrams</a></div>\
                <div class='ddItem ddDetails'><a href='ProjectsList.html'>Project suggestions</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>C++</summary>\
            <div style='margin-left:0.5em;'>\
              <div class='ddItem ddDetails'><a href='LangCpp.html'>C++ Language Resources</a></div>\
              <div class='ddItem ddDetails'><a href='LangCpp.html'>C++ Language Resources</a></div>\
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
            <div style='margin-left:0.5em;'>\
              <div class='ddItem ddDetails'><a href='https://github.com/JimFawcett/RustPlaygroundExamples'>RustPlaygroundExamples</a></div>\
              <div class='ddItem ddDetails'><a href='IndexPage.html'>Rust Glossary</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Regular Expressions</summary>\
            <div style='margin-left:0.5em;'>\
                <div class='ddItem ddDetails'><a href='https://cs.lmu.edu/~ray/notes/regex/'>Regular Expressions</a></div>\
                <div class='ddItem ddDetails'><a href='https://dev.to/chrisachard/intro-to-regex-for-web-developers-2fj4'>RegExp&nbsp;for&nbsp;JavaScript</a></div>\
                <div class='ddItem ddDetails'><a href='http://cpprocks.com/files/c++11-regex-cheatsheet.pdf'>C++11 regex</a></div>\
                <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>WebDev</summary>\
            <div style='margin-left:0.5em;'>\
              <div class='ddItem ddDetails'><a href='WebNotes.html'>Web Notes</a></div>\
              <div class='ddItem ddDetails'><a href='WebComponentTests.html'>UI Widget Tests</a></div>\
              <div class='ddItem ddDetails'><a href='https://encycolorpedia.com/named'>Web Colors</a></div>\
              <div class='ddItem ddDetails'><a href='TestGrid.html'>TestGrid - Sized</a></div>\
              <div class='ddItem ddDetails'><a href='TestGrid2.html'>TestGrid - AbsPos</a></div>\
              <div class='ddItem ddDetails'><a href='TestFlexMenu.html'>TestFlexMenu</a></div>\
              <div style='height:0.25em;'></div>\
            </div>\
          </details>\
          <div class='ddItem'><a href='TechnicalLinks.html'>Technical Links</a></div>\
          <div class='ddItem'><a href='https://github.com/joshnh/Git-Commands'>git commands</a></div>\
          <div class='ddItem'><a href='Resources/VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a></div>\
          <details style='margin-left:0.5em; cursor:pointer;' class='ddItem'>\
            <summary>Neighborhoods</summary>\
            <div style='margin-left:0.5em;'>\
              <div class='ddItem ddDetails'><a href='https://JimFawcett.github.io'>JimFawcett-github</a></div>\
              <div class='ddItem ddDetails'><a href='https://ecs.syr.edu/faculty/fawcett'>JimFawcett-SyracuseUniv</a></div>\
              <div class='ddItem ddDetails'><a href='https://mwcorley79.github.io/MikeCorley/'>Mike Corley</a></div>\
              <div class='ddItem ddDetails'><a href='https://github.com/CommProjectComparisons'>CommProjectComparisons-github</a></div>\
              <div class='ddItem ddDetails'><a href='https://csiac.org'>CSIAC</a></div>\
              <div class='ddItem ddDetails'><a href='https://www.fluentcpp.com'>Fluent {C++}</a></div>\
              <div class='ddItem ddDetails'><a href='https://www.boost.org/'>Boost&nbsp;Library&nbsp;(C++)</a></div>\
              <div class='ddItem ddDetails'><a href='https://www.pocoproject.org/'>poco&nbsp;Library&nbsp;(C++ networking)</a></div>\
              <div class='ddItem ddDetails'><a href='https://openframeworks.cc/'>openFrameworks&nbsp;(C++ graphics)</a></div>\
              <div class='ddItem ddDetails'><a href='https://github.com/microsoft'>github.com/Microsoft</a></div>\
              <div class='ddItem ddDetails'><a href='https://www.taniarascia.com/'>taniarascia.com (JavaScript, CSS)</a></div>\
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
          <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Design&nbsp;--------------&nbsp;</div>\
          <div class='ddItem'><a href='BlogDesign.html'>SW&nbsp;Design</a></div>\
          <div class='ddItem'><a href='BlogPrinciples.html'>Design&nbsp;Principles</a></div>\
          <div class='ddItem'><a href='BlogOOD.html'>OO&nbsp;Design</a></div>\
          <div class='ddItem'><a href='BlogObjectModels.html'>Object&nbsp;Models</a></div>\
          <div class='ddItem'><a href='BlogGlobals.html'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data&nbsp;&nbsp;</a></div>\
          <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Engineering&nbsp;SW&nbsp;---</div>\
          <div class='ddItem'><a href='BlogOCD.html'>Concept&nbsp;Document</a></div>\
          <div class='ddItem'><a href='BlogTesting.html'>SW&nbsp;Testing</a></div>\
          <div class='ddItem'><a href='SummerReading.html'>Summer&nbsp;Reading</a></div>\
          <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Software&nbsp;Sys&nbsp;------</div>\
          <div class='ddItem'><a href='BlogStructure.html'>SW&nbsp;Structure</a></div>\
          <div class='ddItem'><a href='BlogMessagePassingComm.html'>Msg-Passing&nbsp;Comm</a></div>\
          <div class='ddItem'><a href='BlogActiveObjects.html'>Active&nbsp;Objects</a></div>\
          <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Reusable&nbsp;Pkgs&nbsp;----</div>\
          <div class='ddItem'><a href='BlogNoSql.html'>noSQL&nbsp;Database</a></div>\
          <div class='ddItem'><a href='BlogParser.html'>Parsing</a></div>\
          <div class='ddItem'><a href='BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a></div>\
          <div class='ddItem'><a href='BlogMTree.html'>M-ary&nbsp;Trees</a></div>\
          <div class='ddItem'><a href='BlogGraph.html'>Directed&nbsp;Graphs</a></div>\
          <div class='ddItem'><a href='BlogFileSystem.html'>C++&nbsp;FileSystem</a></div>\
          <div style='height:1em;'></div>\
      </div>\
    </div>\
    <div class='menuItem'>\
      About&#9662\
      <div class='dropdown'>\
          <div class='ddLabel darkItem'>About&nbsp;the&nbsp;Site</div>\
          <div class='ddItem'><a href='JimFawcett.html'>Jim Fawcett</a></div>\
          <div class='ddItem'><a href='Interesting.html'>Interesting&nbsp;things&nbsp;&nbsp;</a></div>\
          <div class='ddItem'><a href='Friends.html'>Friends&nbsp;&amp&nbsp;Collaborators&nbsp;&nbsp;</a></div>\
          <div class='ddItem'><a href='Help.html'>Help</a></div>\
          <div class='ddItem'><a href='SitePlans.html'>Site Plans</a></div>\
          <div class='ddItem'><a href='#' onclick='togglenavKeys()'>Toggle Nav Keys</a></div>\
          <div class='ddItem'><a href='#' onclick='toggleSwipeEvents()'>Toggle Swipe Events</a></div>\
          <div class='ddItem'><a href='SiteDesign.html'>Site Design</a></div>\
          <div class='ddItem'><a href='BookDesignCourse.html'>Design Course</a></div>\
          <div class='ddItem'><a class='border' href='index.html'>L1 Site Home</a></div>\
          <div class='ddItem'><a class='border' href='RsRepositories.html'>L2&nbsp;Repository&nbsp;webpage</a></div>\
          <div class='ddItem'><a class='border' href='RustBiteByByte.html'>L3&nbsp;Rust&nbsp;Bites</a></div>\
          <div class='ddItem'><a href='https://github.com/JimFawcett'>Repositories&nbsp;code</a></div>\
        <div style='height:1em;'></div>\
      </div>\
    </div>\
    <div class='menuItem'><a id='prevLink' href='#'>Prev</a></div>\
    <div class='menuItem'><a id='nextLink' href='#'>Next</a></div>\
  </div>\
  <button class='menuItem menuScroll' onclick='scrollMenuLeft()'>&lt;</button>\
  <button class='menuItem menuUnscroll' onclick='scrollMenuRight()'>&gt;</button>\
  <div style='clear:all;'></div>";

}
function initializeNextPrev() {
  
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
    var nl = document.getElementById("nextLink");
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
  if(!isDefined(rvsd)) {
    return;
  }
  var date = document.lastModified;
  rvsd[0].innerHTML = 
    "copyright &copy; Jim Fawcett, 2020" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
    "Page Revised: " + date;
  rvsd[0].addEventListener('click', function () { location.reload(); });
}

function initialize() {
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

// //----< load page defined in current page's Prev link >--------------

// function loadPrev() {
//   try {
//     document.getElementById("Prev").click();
//   }
//   catch (err) {
//     console.log('exception: ' + err);
//   }
// }
// //----< load page defined in current page's Next link >--------------

// function loadNext() {
//   try {
//     document.getElementById("Next").click();
//   }
//   catch (err) {
//     console.log('exception: ' + err);
//   }
// }
  // listen for keyboard events:
  // - key actions are defined in ScriptsKeyboard.js

  document.addEventListener('keydown', (event) => { keyAction(event); }, false);

  // listen for mouse events:
  // - mouse actions are defined below

  document.addEventListener('mousedown', (event) => { mouseAction(event); }, false);


  