/*
 * ScriptsPageFramePages.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Deployment Bites Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='../../indexDeployment.html'>Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DeployBites_Git.html'>Git code mgmt</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='javascript:;'>Github platform</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='javascript:;'>PowerShell</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='javascript:;'>Containers</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='javascript:;'>Cloud</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='javascript:;'>Progressive Web Apps</a></menu-elem>\
          <menu-elem>&nbsp;</div>\
          <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn))
      pgbtn.style.display = "none";
  }
}
