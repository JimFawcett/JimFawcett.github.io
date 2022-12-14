/*
 * ScriptsPageFramePagesBits.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div class='ddLabel darkItem'>Code Bits</div>\
          <menu-elem class='ddItems pageElem'><a href='Bits_Hello.html'>Hello&nbsp;World</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Hello&nbsp;Objects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Hello&nbsp;Data</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Data&nbsp;Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Iteration</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Functions</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Generic&nbsp;Functions</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Generic&nbsp;Structures</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Dependency&nbsp;Inversion</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='Javascript:;'>Generic&nbsp;DIP</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
