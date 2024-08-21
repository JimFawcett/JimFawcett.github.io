/*
 * ScriptsPageFramePagesBits.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Pages</div>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='../../TOCBits.html?src=indexBits.html'>Bits Track Summary</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='../../TOCBits.html?src=BitsRepo.html'>BitsRepo</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='../../TOCBits.html?src=Resources/Bits/Bits_Glossary.html'>Glossary</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='../../TOCBits.html?src=Resources/Bits/Bits_References.html'>References</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='javascript:;'>FlashCards</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='../../TOCBits.html?src=Resources/Bits/Bits_Additions.html'>Additions</a>&nbsp;</menu-elem >\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if(isDefined(pgbtn))
      pgbtn.style.display = "none";
  }
}
