/*
 * ScriptsPageFramePages.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Deploy Bites</div>\
          <menu-elem class='ddItems pageElem undef'><a href='Javascript:;'>Deploy&nbsp;Bites&nbsp;Repo</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='../../indexDeployment.html'>Deployment&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DeployBites_Git.html'>Git code mgmt</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# DeployBites_Github.html'>Github platform</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# DeployBites_PowerShell.html'>PowerShell</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# DeployBites_Containers.html'>Containers</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# DeployBites_Cloud.html'>Cloud</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# DeployBites_PWA.html'>Progressive Web Apps</a></menu-elem>\
          <menu-elem>&nbsp;</div>\
          <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn))
      pgbtn.style.display = "none";
  }
}
