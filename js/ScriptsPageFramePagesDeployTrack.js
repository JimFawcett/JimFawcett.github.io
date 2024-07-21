/*
 * ScriptsPageFramePages.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='location.reload()'>Deploy Bites Repo</div>\
          <menu-elem class='ddItems pageElem'><a href='indexDeployment.html'>Deployment&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DeploymentBites/DeployBites_Git.html'>git</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# Resources/DeploymentBites/DeployBites_Github.html'>github</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# Resources/DeploymentBites/DeployBites_PowerShell.html'>PowerShell</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# Resources/DeploymentBites/DeployBites_Containers.html'>Containers</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# Resources/DeploymentBites/DeployBites_Cloud.html'>Cloud</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='# Resources/DeploymentBites/DeployBites_PWA.html'>PWA</a></menu-elem>\
          <menu-elem>&nbsp;</div>\
          <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
