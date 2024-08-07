/*
 * ScriptsPageFramePagesBasicTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='ddLabel darkItem popupHeader' onclick='bottomMenu.pages()'>&nbsp;&nbsp;&nbsp;Basic Bites Thread&nbsp;&nbsp;&nbsp;</div>\
          <menu-elem class='ddItems pageElem'><a href='../../indexBasic.html'>Basic Track</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BasicBites_Platform.html'>Platform</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_PlatformMemory.html'>Memory</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_PlatformSched.html'>Scheduling</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_PlatformIO.html'>IO</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_PlatformSysRescr.html'>Resources</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BasicBites_Programming.html'>Programming</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_ProgExec.html'>Execution</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_ProgTypes.html'>Types</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_ProgFunctions.html'>Functions</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a hrefd='javascript:;'>more later</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "block";
    }
  }
}
