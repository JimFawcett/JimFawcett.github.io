/*
 * ScriptsPageFramePagesBasicTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Help Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='Help_VSCode.html'>VS&nbsp;Code</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help_Cargo.html'>Cargo</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help_CMake.html'>CMake</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help_Dotnet.html'>dotnet</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help_Git.html'>git</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help_Github.html'>git</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help_PowerShell.html'>PowerShell</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help_RegEx.html'>RegEx</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help_ChatGPT.html'>ChatGPT</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Help.html'>Site Navigation</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
