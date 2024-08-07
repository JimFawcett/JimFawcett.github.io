/*
 * ScriptsPageFramePagesBasicTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='../../BasicBiteByByte.html'>Basic&nbsp;Bites&nbsp;Repo&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='../../indexBasic.html'>Basic&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BasicBites_Platform.html'>Platform</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_PlatformMemory.html'>Memory</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_PlatformSched.html'>Scheduling</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_PlatformIO.html'>IO</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_PlatformSysRescr.html'>Resources</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BasicBites_Programming.html'>Programming</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_ProgExec.html'>Execution</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_ProgTypes.html'>Types</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='BasicBites_ProgFunctions.html'>Functions</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'>&nbsp;&nbsp;<a href='javascript:;'>Safety</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'>&nbsp;&nbsp;<a href='javascript:;'>Platform API</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'>&nbsp;&nbsp;<a href='javascript:;'>Structure</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='javascript:;'>Object&nbsp;Model</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'>&nbsp;&nbsp;<a href='javascript:;'>Lifetime</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'>&nbsp;&nbsp;<a href='javascript:;'>Resource&nbsp;Mgmt</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'>&nbsp;&nbsp;<a href='javascript:;'>Ownership</a></menu-elem>\
          <menu-elem class='undefined' style='margin-left:0.5em;'>Summary</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'>&nbsp;&nbsp;<a href='javascript:;'>Native</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'>&nbsp;&nbsp;<a href='javascript:;'>Managed</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
