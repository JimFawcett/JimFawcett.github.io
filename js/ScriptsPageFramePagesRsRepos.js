/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div style='width:100%; text-align:center' class='darkItem'>Rust Repositories</div>\
          <menu-elem class='ddItems pageElem'><a href='RustLogger.html'>Logger&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustTextFinder.html'>TextFinder</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustBlockingQueue.html'>BlockingQueue</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustThreadPool.html'>ThreadPool</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustCmdLine.html'>CmdLineParser</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustDisplayLib.html'>DisplayLib</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustDirNav.html'>DirNav</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustComm.html'>Comm&nbsp</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustCommWithThreadPool.html'>Comm&nbsp;w/TP</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStringConversions.html'>String&nbsp;Conver</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BuildOn.html'>BuildOn&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustCommExperiments.html'>Comm&nbsp;Exper&apos;s</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustByteRecord.html'>Byte&nbsp;Record</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustBasicDemos.html'>Basic&nbsp;Demos</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustErrorHandling.html'>Error&nbsp;Handling</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustModels.html'>Rust&nbsp;Models&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustLibraryDemos.html'>Library&nbsp;Demos</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStoryRepo.html'>Rust&nbsp;Story&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustBiteByByte.html'>Rust&nbsp;Bites&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='IdiomsAndPatterns.html'>Idioms&nbsp;and&nbsp;Patts</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
