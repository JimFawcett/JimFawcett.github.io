/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>&nbsp;Rust&nbsp;Track&nbsp;</div>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCRust.html?src=indexRust.html'>Track&nbsp;Summary&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCRust.html?src=RustBiteByByte.html'>Track&nbsp;Repo</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCRust.html?src=IndexPage.html'>Glossary&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCRust.html?src=RustStory_References.html'>References&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCRust.html?src=Resources/RustBites/RustBites_FlashCards.html'>Flash&nbsp;Cards</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a target='_parent' href='javascript:;'>Additions&nbsp;</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
