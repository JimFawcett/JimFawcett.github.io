/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Basic&nbsp;Track</div>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCBits.html?src=indexBasic.html'>Track&nbsp;Summary&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCBits.html?src=BasicBiteByByte.html'>Track&nbsp;Repo</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='javascript:;'>Glossary&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='javascript:;'>References&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='javascript:;'>Flash&nbsp;Cards</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='javascript:;'>Additions&nbsp;</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
