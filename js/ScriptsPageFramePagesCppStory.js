/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='CppStoryRepo.html'>Cpp&nbsp;Story&nbsp;Repo&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Prologue.html'>Prologue</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Models.html'>Models</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Survey.html'>Survey</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Data.html'>Data</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Operations.html'>Operations</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Classes.html'>Classes</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_ClassRelationships.html'>Relationships</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Templates.html'>Templates</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_TemplateMetaprog.html'>TMP</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Libraries.html'>Libraries</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_LibraryStreams.html'>Streams</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_LibrarySTL.html'>STL</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStory_Interesting.html'>Other Topics</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
