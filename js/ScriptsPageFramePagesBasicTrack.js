/*
 * ScriptsPageFramePagesBasicTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Basic Track Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='indexBasic.html'>Basic&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/BasicBites/BasicBites_Platform.html'>Platform</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='Resources/BasicBites/BasicBites_PlatformMemory.html'>Memory</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='Resources/BasicBites/BasicBites_PlatformSched.html'>Scheduling</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='Resources/BasicBites/BasicBites_PlatformIO.html'>IO</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='Resources/BasicBites/BasicBites_PlatformSysRescr.html'>Resources</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/BasicBites/BasicBites_Programming.html'>Programming</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='Resources/BasicBites/BasicBites_ProgExec.html'>Execution</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='Resources/BasicBites/BasicBites_ProgTypes.html'>Types</a></menu-elem>\
          <menu-elem class='ddItems pageElem'>&nbsp;&nbsp;<a href='Resources/BasicBites/BasicBites_ProgFunctions.html'>Functions</a></menu-elem>\
          <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
