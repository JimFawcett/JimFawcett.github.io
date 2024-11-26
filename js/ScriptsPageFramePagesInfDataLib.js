/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' style='padding:0em 1em; onclick='bottomMenu.pages()'>&nbsp;InfDataLib&nbsp;Thread&nbsp;</div>\
          <menu-elem class='ddItems pageElem'><a href='InfDataLib_1.html'>Forward</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='InfDataLib_2.html'>Concept</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='InfDataLib_3.html'>Building Blocks</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='InfDataLib_4.html'>Data Objects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='InfDataLib_5.html'>Superstructures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='InfDataLib_6.html'>Research Process</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='InfDataLib_7.html'>Traceability</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
