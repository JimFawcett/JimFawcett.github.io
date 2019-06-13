/************************************************************************* 
 * Relevant.js - Javascript to color relevent nodes in code and
 *               presentation pages
 * ver 1.0
 *
 * Jim Fawcett, Syracuse University, 29 Aug 2015
 *************************************************************************/

function keys()
{
  var evtObj = window.event ? event : e;
  var uniCode = evtObj.charCode;
  var whichKey = String.fromCharCode(uniCode);
  if (whichKey == 's') {
    showRelevanceSMAProjects();
    showRelevanceSMAExams();
  }
  if (whichKey == 'o')
  {
    showRelevanceOODProjects();
    showRelevanceOODExams();
  }
  if (whichKey == 'c')
    clearAll();
  //alert(whichKey);
}
function init() {
  initElementsWithClass('ProjectOOD');
  initElementsWithClass('ExamOOD');
  initElementsWithClass('ProjectAndExamOOD');
  initElementsWithClass('ProjectSMA');
  initElementsWithClass('ExamSMA');
  initElementsWithClass('ProjectAndExamSMA');
}
function initElementsWithClass(className) {
  var body = document.getElementsByTagName('body');
  var bodyStyle = window.getComputedStyle(body[0], null);
  var elemNodes = document.getElementsByClassName(className);
  for (i = 0; i < elemNodes.length; ++i) {
    elemNodes[i].style.backgroundColor = bodyStyle.backgroundColor;
    elemNodes[i].style.color = bodyStyle.color;
  }
}
function clearAll() {
  clear('ProjectOOD');
  clear('ExamOOD');
  clear('ProjectAndExamOOD');
  clear('ProjectSMA');
  clear('ExamSMA');
  clear('ProjectAndExamSMA');
}
function clear(className) {
  var body = document.getElementsByTagName('body');
  var bodyStyle = window.getComputedStyle(body[0], null);

  var elemNodes = document.getElementsByClassName(className);
  for (i = 0; i < elemNodes.length; ++i) {
    elemNodes[i].style.backgroundColor = bodyStyle.backgroundColor;
    elemNodes[i].style.color = bodyStyle.color;
    elemNodes[i].style.padding = "0px";
    for (j = 0; j < elemNodes[i].childNodes.length; ++j) {
      tempChild = elemNodes[i].childNodes[j];
      tempChild.color = bodyStyle.color;
      if (tempChild.localName == 'a')
        tempChild.style.color = bodyStyle.color;
    }
  }
}
function showRelevanceOODProjects() {
  changeStyle('ProjectOOD', 'ProjectOODColor');
  changeStyle('ProjectAndExamOOD', 'ProjectAndExamOODColor');
}
function showRelevanceOODExams() {
  changeStyle('ExamOOD', 'ExamOODColor');
  changeStyle('ProjectAndExamOOD', 'ProjectAndExamOODColor');
}
function showRelevanceSMAProjects() {
  changeStyle('ProjectSMA', 'ProjectSMAColor');
  changeStyle('ProjectAndExamSMA', 'ProjectAndExamSMAColor');
}
function showRelevanceSMAExams() {
  changeStyle('ExamSMA', 'ExamSMAColor');
  changeStyle('ProjectAndExamSMA', 'ProjectAndExamSMAColor');
}
function showRelevance() {
  changeStyle('ProjectOOD', 'ProjectOODColor');
  changeStyle('ExamOOD', 'ExamOODColor');
  changeStyle('ProjectAndExamOOD', 'ProjectAndExamOODColor');
}
function changeStyle(className, classNameColor) {
  var color = document.getElementsByClassName(classNameColor);
  var elemStyle = window.getComputedStyle(color[0], null);
  var body = document.getElementsByTagName('body');
  var bodyStyle = window.getComputedStyle(body[0], null);

  var elemNodes = document.getElementsByClassName(className);
  for (i = 0; i < elemNodes.length; ++i) {
    var temp = elemNodes[i];
    temp.style.backgroundColor = elemStyle.backgroundColor;
    temp.style.color = elemStyle.color;
    temp.style.paddingLeft = "5px";
    temp.style.paddingRight = "5px";
    //temp.style.padding = window.getComputedStyle(color[0],null).padding;
    for (j = 0; j < temp.childNodes.length; ++j) {
      tempChild = temp.childNodes[j];
      tempChild.color = elemStyle.color;
      if (tempChild.localName == 'a')
        tempChild.style.color = elemStyle.color;
    }
  }
}

