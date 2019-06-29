/************************************************************************* 
 * LectNav.js - Lecture page navigation code for website
 * ver 1.0
 * This javascript file is a single source of navigation code on all
 * lecture pages in www.lcs.syr.edu/faculty/fawcett
 *
 * Jim Fawcett, Syracuse University, 07 Aug 2011
 *************************************************************************/

$(document).ready(function() {
  $("#remove").remove();
  $("#lectnav").append(
    "<hr class='beginning' />\
    <div id='container'>\
      <ul id='menu'>\
        <li><a href='../../webpages/cse681.htm'>Course</a></li>\
        <li><a href='../../webpages/cse681.htm#syllabus'>Syllabus</a></li>\
        <li><a href='#'>Lectures</a>\
          <ul class='active'>\
            <li><a href='cse681codeL1.htm'>Lecture #1</a></li>\
            <li><a href='cse681codeL2.htm'>Lecture #2</a></li>\
            <li><a href='cse681codeL3.htm'>Lecture #3</a></li>\
            <li><a href='cse681codeL4.htm'>Lecture #4</a></li>\
            <li><a href='cse681codeL5.htm'>Lecture #5</a></li>\
            <li><a href='cse681codeL6.htm'>Lecture #6</a></li>\
            <li><a href='cse681codeL7.htm'>Lecture #7</a></li>\
            <li><a href='cse681codeL8.htm'>Lecture #8</a></li>\
            <li><a href='cse681codeL9.htm'>Lecture #9</a></li>\
            <li><a href='cse681codeL10.htm'>Lecture #10</a></li>\
            <li><a href='cse681codeL11.htm'>Lecture #11</a></li>\
            <li><a href='cse681codeL12.htm'>Lecture #12</a></li>\
            <li><a href='cse681codeL13.htm'>Lecture #13</a></li>\
            <li><a href='cse681codeL14.htm'>Lecture #14</a></li>\
            <li><a href='cse681codeL15.htm'>Lecture #15</a></li>\
            <li><a href='cse681codeL16.htm'>Lecture #16</a></li>\
            <li><a href='cse681codeL17.htm'>Lecture #17</a></li>\
            <li><a href='cse681codeL18.htm'>Lecture #18</a></li>\
            <li><a href='cse681codeL19.htm'>Lecture #19</a></li>\
            <li><a href='cse681codeL20.htm'>Lecture #20</a></li>\
            <li><a href='cse681codeL21.htm'>Lecture #21</a></li>\
            <li><a href='cse681codeL22.htm'>Lecture #22</a></li>\
            <li><a href='cse681codeL23.htm'>Lecture #23</a></li>\
            <li><a href='cse681codeL24.htm'>Lecture #24</a></li>\
            <li><a href='cse681codeL25.htm'>Lecture #25</a></li>\
            <li><a href='cse681codeL26.htm'>Lecture #26</a></li>\
            <li><a href='cse681codeL27.htm'>Lecture #27</a></li>\
            <li><a href='cse681codeL28.htm'>Lecture #28</a></li>\
            <li><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li><a href='#'>Study Guides</a>\
          <ul class='active'>\
            <li><a href='StudyGuideSMA.htm'>SMA</li>\
            <li><a href='StudyGuideOCD.htm'>OCD</a></li>\
            <li><a href='StudyGuideNotes.htm'>Notes</a></li>\
            <li><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li><a href='../../.'>Handouts</a>\
          <ul class='active'>\
            <li><a href='../../CoreTechnologies'>CoreTech</a></li>\
            <li><a href='../../CSE681'>CSE681</a></li>\
            <li><a href='../../CSE686'>CSE686</a></li>\
            <li><a href='../../CSE687'>CSE687</a></li>\
            <li><a href='../../CSE775'>CSE775</a></li>\
            <li><a href='../../CSE776'>CSE776</a></li>\
            <li><a href='../../CSE784'>CSE784</a></li>\
            <li><a href='../../SummerProjects'>Summer Proj</a></li>\
            <li><a href='../../webpages/TechnicalLinks.htm'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li><a href='../../webpages/TechnicalLinks.htm'>Tech Links</a></li>\
      </ul>\
    </div>\
    <hr class='end' />"
  );
});
