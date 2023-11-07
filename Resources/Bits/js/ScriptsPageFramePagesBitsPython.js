/*
 * ScriptsPageFramePagesBits.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div class='ddLabel darkItem'>Code Bits</div>\
          <menu-elem class='ddItems pageElem'><a href='../../TOC.html?src=BitsRepo.html'>BitsRepo</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a href='../../TOC.html?src=Resources/Bits/Bits_Intro.html'>Introduction</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a href='../../TOC.html?src=Resources/Bits/Bits_Tooling.html'>Tooling</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a href='Bits_HelloPython.html'>Hello&nbsp;World</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a href='Bits_DataPython.html'>Data</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Bits_ObjectsPython.html'>Objects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Bits_GenericPython.html'>Generics</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Bits_IterPython.html'>Iteration</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
