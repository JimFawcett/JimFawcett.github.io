/*
 * ScriptsPageFramePagesBits.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='Bits_Tooling.html'>Tooling</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='../../TOC.html?src=BitsRepo.html'>BitsRepo</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a href='../../TOC.html?src=Resources/Bits/Bits_Intro.html'>Introduction</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a href='../../TOC.html?src=Resources/Bits/Bits_Tooling.html'>Tooling</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='Bits_HelloCpp.html'>Hello&nbsp;World</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='Bits_DataCpp.html'>Data</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='Bits_ObjectsCpp.html'>Objects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='Bits_GenericCpp.html'>Generics</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='Bits_IterCpp.html'>Iteration</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='Javascript:;'>Functions</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='Javascript:;'>Generic&nbsp;Functions</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='Javascript:;'>Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='Javascript:;'>Generic&nbsp;Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='Javascript:;'>Dependency&nbsp;Inversion</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a target='_parent' href='Javascript:;'>Generic&nbsp;DIP</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
