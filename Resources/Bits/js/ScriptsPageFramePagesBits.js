/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='CodeBits.html'>Code&nbsp;Bits&nbsp;Repo&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppBits.html'>C++&nbsp;Bits&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RustBits.html'>Rust&nbsp;Bits&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CSharpBits.html'>C#&nbsp;Bits&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
