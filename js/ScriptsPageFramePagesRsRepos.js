/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='RustLogger.html'>Rust&nbsp;Logger&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustTextFinder.html'>Rust&nbsp;Text&nbsp;Finder</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustBlockingQueue.html'>Rust&nbsp;Blocking&nbsp;Queue</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustThreadPool.html'>Rust&nbsp;Thread&nbsp;Pool</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustCmdLine.html'>Rust&nbsp;Cmd&nbsp;Line</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustDisplayLib.html'>Rust&nbsp;Display&nbsp;Lib</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustDirNav.html'>Rust&nbsp;Dir&nbsp;Nav</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustComm.html'>Rust&nbsp;Comm&nbsp</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustCommWithThreadPool.html'>Rust&nbsp;Comm&nbsp;w/TP</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStringConversions.html'>Rust&nbsp;String&nbsp;Conver</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BuildOn.html'>Rust&nbsp;BuildOn&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustCommExperiments.html'>Rust&nbsp;Comm&nbsp;Exper&apos;s</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustByteRecord.html'>Rust&nbsp;Byte&nbsp;Record</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustBasicDemos.html'>Rust&nbsp;Basic&nbsp;Demos</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustErrorHandling.html'>Rust&nbsp;Error&nbsp;Handling</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustModels.html'>Rust&nbsp;Models&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustLibraryDemos.html'>Rust&nbsp;Library&nbsp;Demos</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStoryRepo.html'>Rust&nbsp;Story&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustBiteByByte.html'>Rust&nbsp;BiteByByte&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='IdiomsAndPatterns.html'>Idioms&nbsp;and&nbsp;Patterns</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
