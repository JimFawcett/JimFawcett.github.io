/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    pagesMenu.style.overflowY = "auto";
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Posts&nbsp;Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='Post_DistinguishedRust.html'>Distinguished&nbsp;Rust</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Post_RustSafety.html'>Rust Safety</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Post_RustTooling.html'>Rust Tooling</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Post_RustStrings.html'>Rust Strings</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Post_RustData.html'>Rust Data</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Post_RustFlashCards.html'>Rust FlashCards</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Post_RustOperations.html'>Rust Operations</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Post_CommCompare.html'>Comm Compare</a>&nbsp;</menu-elem>\
          <div class='darkItem popupHeader' style='margin-top:0.25em;' onclick='bottomMenu.pages()'>Blogs&nbsp;Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='Blog.html'>First Things</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogDesign.html'>SW Design</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogPrinciples.html'>Design&nbsp;Principles</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogOOD.html'>Object&nbsp;Oriented&nbsp;Design</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogObjectModels.html'>Object Models</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogGlobals.html'>C++ Scopes</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogOCD.html'>Operation&nbsp;Concept&nbsp;Doc</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogTesting.html'>Testing</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogStructure.html'>SW Structure</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogMessagePassingComm.html'>Msg&nbsp;Passing&nbsp;Comm</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogActiveObjects.html'>Active Objects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogNoSql.html'>NoSql</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogParser.html'>Code Parser</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogMTree.html'>M-ary Tree</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogGraph.html'>Directed&nbsp;Graph</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BlogFileSystem.html'>C++&nbsp;FileSystem</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
