/************************************************************************* 
 * TopNav.js - Top level navigation code for website
 * ver 1.0
 * This javascript file is a single source of navigation code on all
 * top level pages in www.lcs.syr.edu/faculty/fawcett
 *
 * Jim Fawcett, Syracuse University, 07 Aug 2011
 *************************************************************************/

$(document).ready(function () {
  $("#nav").html(
   "<hr class='menubegin' />\
    <div class='container'>\
      <ul id='menu'>\
        <li><a href='#'>Home</a>\
          <ul class='active'>\
            <li><a href='FawcettHome.htm'>Home</a>\
            <li><a href='studentPictures.htm'>Student Pics</a></li>\
            <li><a href='StudentCultures.htm'>Student Cult</a></li>\
            <li><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li><a href='#'>Courses</a>\
          <ul class='active'>\
            <li><a href='Courses.htm'>Courses</a></li>\
            <li><a href='CSE681.htm'>CSE681-SMA</a></li>\
            <li><a href='CSE686.htm'>CSE686-IP</a></li>\
            <li><a href='CSE687.htm'>CSE687-OOD</a></li>\
            <li><a href='CSE775.htm'>CSE775-DO</a></li>\
            <li><a href='CSE776.htm'>CSE776-DP</a></li>\
            <li><a href='CSE784.htm'>CSE784-SS</a></li>\
            <li><a href='OfficeHours.htm'>Office Hours</a></li>\
            <li><a href='Courses.htm'>Program Plan</a></li>\
            <li><a href='SoftwareTrack.htm'>SW Track</a></li>\
            <li><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li><a href='#'>Core Tech</a>\
          <ul class='active'>\
            <li><a href='CoreTechnologies.htm'>Core Tech</a>\
            <li><a href='../coretechnologies/Cpp.htm'>C++</a></li>\
            <li><a href='../coretechnologies/Cpp.htm'>C++/CLI</a></li>\
            <li><a href='../coretechnologies/CSharp.htm'>C#, .Net</a></li>\
            <li><a href='../coretechnologies/Sockets.htm'>Network Prog</a></li>\
            <li><a href='../coretechnologies/ThreadsAndSynch.htm'>Threads</a></li>\
            <li><a href='../coretechnologies/Win32SystemProgramming.htm'>Win32 Sys</a></li>\
            <li><a href='../coretechnologies/WindowsProgramming.htm'>Win GUI</a></li>\
            <li><a href='../coretechnologies/XML.htm'>XML</a></li>\
            <li><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li><a href='#'>Handouts</a>\
          <ul class='active'>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts'>Handouts</a>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts/CoreTechnologies'>CoreTech</a></li>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts/CSE681'>CSE681-SMA</a></li>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts/CSE686'>CSE686-IP</a></li>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts/CSE687'>CSE687-OOD</a></li>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts/CSE775'>CSE775-DO</a></li>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts/CSE776'>CSE776-DP</a></li>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts/CSE784'>CSE784-SS</a></li>\
            <li><a href='http://www.lcs.syr.edu/faculty/fawcett/handouts/SummerProjects'>Summer Proj</a></li>\
            <li><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li><a href='TechnicalLinks.htm'>Tech Links</a></li>\
        <li><a href='Graduates.htm'>Graduates</a></li>\
        <li><a href='Notices.htm'>Notices</a></li>\
        <li><a href='Research.htm'>Research</a></li>\
        <li><a href='#'>Other Links</a>\
          <ul class='active'>\
            <li><a href='OtherLinks.htm'>Other Links</a>\
            <li><a href='Books.htm'>Books</a></li>\
            <li><a href='Articles.htm'>Articles</a></li>\
            <li><a href='Mathematics.htm'>Math</a></li>\
            <li><a href='BrownBagSeminar.htm'>Seminars</a></li>\
            <li><a href='../SummerProjects'>Summer Proj</a></li>\
            <li><a href='SWDev.htm'>SW Dev</a></li>\
            <li><a href='WebDev.htm'>Web Dev</a></li>\
            <li><a href='TestPage.htm'>Test HTML5</a></li>\
            <li><a href='TLPT.htm'>Pg Template</a></li>\
            <li><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
      </ul>\
    </div>\
    <hr class='menuend' />"
  );
});
