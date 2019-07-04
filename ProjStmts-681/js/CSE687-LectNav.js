/************************************************************************* 
 * CSE681-LectNav.js - Lecture page navigation code for SMA
 * ver 1.1 - 15 Aug 2011
 * Jim Fawcett, Syracuse University
 *************************************************************************/

$(document).ready(function() {
  $("nav").html(
    "<hr class='menubegin' />\
    <div id='menu'>\
      <ul>\
        <li aria-haspopup='false'><a href='../../Webpages/FawcettHome.htm'>Home</a>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/cse687.htm'>Course</a></li>\
        <li aria-haspopup='false'><a href='../../webpages/cse687.htm#syllabus'>Syllabus</a></li>\
        <li aria-haspopup='true'><a href='#'>Lectures &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='cse687codeL1.htm'>L1: Intro</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL2.htm'>L2: C++</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL3.htm'>L3: Encaps</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL4.htm'>L4: ADT1</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL5.htm'>L5: ADT2</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL6.htm'>L6: Templ1</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL7.htm'>L7: Templ2</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL8.htm'>L8: Hier1</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL9.htm'>L9: Hier2</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL10.htm'>L10: LSP</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL11.htm'>L11: OCP</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL12.htm'>L12: DIP</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL13.htm'>L13: ISP</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL14.htm'>L14: Strms1</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL15.htm'>L15: MT Rev</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL16.htm'>L16: MidTrm</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL17.htm'>L17: MT Rslts</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL18.htm'>L18: Thrds1</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL19.htm'>L19: Thrds2</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL20.htm'>L20: Socks1</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL21.htm'>L21: Socks2</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL22.htm'>L22: STL1</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL23.htm'>L23: STL2</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL24.htm'>L24: MCpp</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL25.htm'>L25: Forms</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL26.htm'>L26: TMP1</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL27.htm'>L27: TMP2</a></li>\
            <li aria-haspopup='false'><a href='cse687codeL28.htm'>L28: Next?</a></li>\
            <li aria-haspopup='false'><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Study Guides &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='StudyGuideClassRelationships.htm'>Class Relationships</a></li>\
            <li aria-haspopup='false'><a href='StudyGuideDesign.htm'>OOD Design</a></li>\
            <li aria-haspopup='false'><a href='StudyGuideTemplates.htm'>Templates</a></li>\
            <li aria-haspopup='false'><a href='StudyGuideOOD.htm'>OOD Review</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
          </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Notes &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='CSE687designConcept1.htm'>Encapsulate</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept2.htm'>Prime Direct</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept3.htm'>App/Sol side</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept4.htm'>Namespaces</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept5.htm'>Top-Down</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept6.htm'>Bottom-Up</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept6b.htm'>Increm Devl</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept7.htm'>Partitions</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept8.htm'>Interfaces</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept9.htm'>Components</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept10.htm'>Events</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept11.htm'>Async Msgs</a></li>\
            <li aria-haspopup='false'><a href='CSE687designConcept12.htm'>Least Knowl</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
          </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Directories &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='../../.'>Handouts</a>\
            <li aria-haspopup='false'><a href='../../CoreTechnologies'>CoreTech</a></li>\
            <li aria-haspopup='false'><a href='../../CSE681'>CSE681</a></li>\
            <li aria-haspopup='false'><a href='../../CSE686'>CSE686</a></li>\
            <li aria-haspopup='false'><a href='../../CSE687'>CSE687</a></li>\
            <li aria-haspopup='false'><a href='../../CSE775'>CSE775</a></li>\
            <li aria-haspopup='false'><a href='../../CSE776'>CSE776</a></li>\
            <li aria-haspopup='false'><a href='../../CSE784'>CSE784</a></li>\
            <li aria-haspopup='false'><a href='../../SummerProjects'>Summer Proj</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
          </ul>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/TechnicalLinks.htm'>Tech Links</a></li>\
        <li aria-haspopup='false'><a href='../../webpages/OfficeHours.htm'>Office Hours</a></li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Projects &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../../WebPages/AdviceProjects.htm'>Advice</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/BuildingProjects.htm'>Constructing</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/SubmittingProjects.htm'>Submissions</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/Upload.htm'>Uploading Projects</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/GradingPolicy.htm'>Grading Policy</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/BuildTools/VS2012Help.pdf'>Visual Studio 2012 Help</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/dd831853.aspx'>Visual Studio 2012 - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/kx37x362.aspx'>Visual C# - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/gg145045(v=VS.100).aspx'>.Net Framework - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://en.cppreference.com/w/cpp'>CppReference.com</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/60k1461a.aspx'>Visual C++ - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/cscc687y.aspx'>Std C++ Libraries - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/TechnicalLinks.htm#cpp'>C++ Tech Links</a></li>\
				    <li aria-haspopup='false'><a href='http://sourcemaking.com/refactoring/bad-smells-in-code'>Code Smells</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/SummerProjects.htm'>Summer Projects</a></li>\
			    </ul>\
		    </li>\
      </ul>\
    </div>\
    <hr class='menuend' />"
  );
});
