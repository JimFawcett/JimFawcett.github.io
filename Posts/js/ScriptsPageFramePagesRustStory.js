/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Pages</div>\
          <menu-elem class='ddItems pageElem'><a href='RustStoryRepo.html'>Rust&nbsp;Story&nbsp;Repo&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStory_Prologue.html'>Prologue</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStory_Models.html'>Models</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStory_Data.html'>Data</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStory_Operations.html'>Operations</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStory_Structures.html'>Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStory_Libraries.html'>Libraries</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustStory_References.html'>References</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
