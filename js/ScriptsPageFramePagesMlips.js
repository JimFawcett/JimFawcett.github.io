/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' style='padding:0em 1em; onclick='bottomMenu.pages()'>&nbsp;MLiPS&nbsp;Thread&nbsp;</div>\
          <menu-elem class='ddItems pageElem'><a href='MLiPS_1.html'>MLiPS 1</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='MLiPS_2.html'>MLiPS 2</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='MLiPS_3.html'>MLiPS 3</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='MLiPS_4.html'>MLiPS 4</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='MLiPS_5.html'>MLiPS 5</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='MLiPS_6.html'>MLiPS 6</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
