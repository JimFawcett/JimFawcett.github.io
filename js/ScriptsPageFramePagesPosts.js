/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Posts&nbsp;Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='Post_DistinguishedRust.html'>Distinguished&nbsp;Rust</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Post_RustSafety.html'>Rust Safety</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
