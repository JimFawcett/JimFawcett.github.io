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
          <menu-elem class='ddItems pageElem'><a target='_parent' href='../../TOCBits.html?src=Resources/Bits/Bits_Intro.html'>Introduction</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='../../TOCBits.html?src=Resources/Bits/Bits_Tooling.html'>Tooling</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='Bits_HelloPython.html'>Hello&nbsp;World</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='Bits_DataPython.html'>Data</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='Bits_ObjectsPython.html'>Objects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a target='_parent' href='Bits_GenericPython.html'>Generics</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a target='_parent' href='Bits_IterPython.html'>Iteration</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a target='_parent' href='javascript:;'>Libraries</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn))
      pgbtn.style.display = "none";
  }
}
