/****************************************************************************
   BlogList.js - navigation code for blogs
   ver 1.0
   This javascript file is a single source of navigation code on all
   top-level pages for www.lcs3.syr.edu/faculty/fawctt

   Jim Fawcett, Syracuse University, 08 Aug 2013
 ****************************************************************************/

var top = false;
var keystate = 'up';

function toggleLocation()
{
  if(keystate == 'down')
    location.assign("#top");
  
  //if (top === false) {
  //  location.assign("#top");
  //  top = true;
  //}
  //else {
  //  location.assign("#bottom")
  //  top = false;
  //}
}

$(document).ready(function () {
  $('body').click(toggleLocation);
  $(document).keydown(function () { keystate = 'down'; });
  $(document).keyup(function () { keystate = 'up'; });
  $("#bloglist").html(
    "<div class='menubegin' id='menu' style='font-size:large;'>\
	    <ul style='height:15px;'>\
		    <li class='tighter'><a style='font-size:70%' href='blog.htm'>First Things,</a></li>\
      </ul>\
      <br />\
      <ul style='height:15px;'>\
		    <li class='tighter' aria-haspopup='false'><a style='font-size:70%' href='blogDesign.htm'>Software Design,</a></li>\
		    <li class='left tighter' aria-haspopup='false'><a style='font-size:70%' href='blogOOD.htm'>Object Oriented Design,</a></li>\
		    <li class='left tighter' aria-haspopup='false'><a style='font-size:70%' href='blogObjectModels.htm'>Object Models,</a></li>\
		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='blogGlobals.htm'>Scopes and Global Data,</a></li>\
     </ul>\
      <br />\
      <ul style='height:15px;'>\
		    <li class='left tighter' aria-haspopup='false'><a style='font-size:70%' href='blogOCD.htm'>Concept Document,</a></li>\
		    <li class='left tighter' aria-haspopup='false'><a style='font-size:70%' href='blogTesting.htm'>Software Testing,</a></li>\
 		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='SummerReading.htm'>Summer Reading,</a></li>\
      </ul>\
      <br />\
      <ul style='height:15px;'>\
		    <li class='left tighter' aria-haspopup='false'><a style='font-size:70%' href='blogStructure.htm'>Software Structure,</a></li>\
		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='blogMessagePassingComm.htm'>Message Passing Systems,</a></li>\
		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='blogActiveObjects.htm'>Active Objects,</a></li>\
      </ul>\
      <br />\
      <ul style='height:15px;'>\
		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='blogNoSql.htm'>noSQL Database,</a></li>\
		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='blogParser.htm'>Parsing,</a></li>\
		    <li class='left tighter' aria-haspopup='false'><a style='font-size:70%' href='blogCodeAnalyzer.htm'>Code Analyzer,</a></li>\
		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='blogMTree.htm'>M-ary Trees,</a></li>\
		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='blogGraph.htm'>Directed Graphs,</a></li>\
		    <li class='left' aria-haspopup='false'><a style='font-size:70%' href='blogFileSystem.htm'>C++ File System</a></li>\
      </ul>\
      <br />\
      <ul style='height:15px;'>\
	    </ul>\
      <br />\
      <ul style='height:15px;'>\
	    </ul>\
    </div>\
    <span class='menuend' />"
  );
  //var nodes = document.getElementsByTagName("body");
  //nodes[0].addEventListener("click", toggleLocation, false);
  //document.onclick = function () { alert('test'); }
});