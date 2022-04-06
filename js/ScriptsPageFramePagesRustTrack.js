/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='RustBiteByByte.html'>Rust&nbsp;Bites&nbsp;Repo&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='indexRust.html'>Rust&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Intro.html'>Introduction</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_GettingStarted.html'>Starting</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Tooling.html'>Tooling</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Safety.html'>Safety</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_UDB.html'>Undef behavior</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Data.html'>Data</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_FlashCards.html'>FlashCards</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Facts.html'>Facts</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Strings.html'>Strings</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_DataStr.html'>Data Structures</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_SmrtPtrs.html'>Smart Ptrs</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_LifeCycle.html'>LifeCycle</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Ownrs.html'>Ownership</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Traits.html'>Generics&nbsp;&amp;&nbsp;Traits</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Functs.html'>Functions</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Structs.html'>Structs</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_LifeTime.html'>LifeTime</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Abstract.html'>Abstractions</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Enums.html'>Enums</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_ErrHnd.html'>Error&nbsp;Handling</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Options.html'>Options</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Conversions.html'>Conversions</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Collects.html'>Collections</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Iterator.html'>Iterators</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Idioms.html'>Idioms&nbsp;&amp;&nbsp;Patts</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Macros.html'>Macros</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Threads.html'>Threads</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Synchron.html'>Synchronization</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Channels.html'>Channels</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_RegEx.html'>Regular&nbsp;Expressions</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_TipsAndTricks.html'>Hacks&nbsp;&amp;&nbsp;Helps</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/RustBites/RustBites_Experiments.html'>Code&nbsp;Experiments</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='https://github.com/JimFawcett/RustPlaygroundExamples'>Playground Examples</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='indexPage.html'>Glossary</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
