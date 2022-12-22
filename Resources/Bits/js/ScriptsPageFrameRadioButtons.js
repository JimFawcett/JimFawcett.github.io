/*
 * ScriptsPageFrameRadioButtons.js
 */

/*-- Load Cpp Code, Output, Build --*/
function loadCppCodeLeft() {
  loadCppCode("codeleft");
}
function loadCppCodeRight() {
  loadCppCode("coderight");
}
//function loadCppCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C++ Code"
//}
function loadCppOutLeft() {
  loadCppOut("outleft");
}
function loadCppOutRight() {
  loadCppOut("outright");
}
//function loadCppOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C++ Output"
//}
function loadCppBldLeft() {
  loadCppBld("bldleft");
}
function loadCppBldRight() {
  loadCppBld("bldright");
}
//function loadCppBld(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C++ Build"
//}
function loadCppLeft() {
  loadCppCodeLeft();
  loadCppOutLeft();
  loadCppBldLeft()
}
function loadCppRight() {
  loadCppCodeRight();
  loadCppOutRight();
  loadCppBldRight();
}

/*-- Load C# Code, Output, Build --*/
function loadCsCodeLeft() {
  loadCsCode("codeleft");
}
function loadCsCodeRight() {
  loadCsCode("coderight");
}
//function loadCsCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C# Code"
//}
function loadCsOutLeft() {
  loadCsOut("outleft");
}
function loadCsOutRight() {
  loadCsOut("outright");
}
//function loadCsOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C# Output"
//}
function loadCsBldLeft() {
  loadCsBld("bldleft");
}
function loadCsBldRight() {
  loadCsBld("bldright");
}
//function loadCsBld(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C# Build"
//}
function loadCsLeft() {
  loadCsCodeLeft();
  loadCsOutLeft();
  loadCsBldLeft()
}
function loadCsRight() {
  loadCsCodeRight();
  loadCsOutRight();
  loadCsBldRight();
}

/*-- Load Rust Code, Output, Build --*/
function loadRsCodeLeft() {
  loadRsCode("codeleft");
}
function loadRsCodeRight() {
  loadRsCode("coderight");
}
//function loadRsCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Code"
//}
function loadRsOutLeft() {
  loadRsOut("outleft");
}
function loadRsOutRight() {
  loadRsOut("outright");
}
//function loadRsOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Output"
//}
function loadRsBldLeft() {
  loadRsBld("bldleft");
}
function loadRsBldRight() {
  loadRsBld("bldright");
}
//function loadRsBld(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Build"
//}
function loadRsLeft() {
  loadRsCodeLeft();
  loadRsOutLeft();
  loadRsBldLeft()
}
function loadRsRight() {
  loadRsCodeRight();
  loadRsOutRight();
  loadRsBldRight();
}
