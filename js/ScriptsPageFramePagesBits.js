/*
 * ScriptsPageFramePagesBits.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='Bits_Hello.html'>Hello&nbsp;World</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Hello&nbsp;Objects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Hello&nbsp;Objects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Hello&nbsp;Data</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Data&nbsp;Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Iteration</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Functions</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Generic&nbsp;Functions</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Generic&nbsp;Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Dependency&nbsp;Inversion</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Javascript:;'>Generic&nbsp;DIP</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
