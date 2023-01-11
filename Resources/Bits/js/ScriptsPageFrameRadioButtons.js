/*
 * ScriptsPageFrameRadioButtons.js
 */

var hinc = 0;
//var gleft = document.getElementById("lb");
//gleft.

function movel() {
  hinc = -30;
  let left = document.getElementById("lb");
  let cs = window.getComputedStyle(left);
  let width = cs.getPropertyValue("width");
  let nwidth = parseInt(width);
  left.style.width = nwidth + hinc + "px";
}

function movec() {
  let ruler = document.getElementById("ruler");
  let cs = window.getComputedStyle(ruler);
  let width = cs.getPropertyValue("width");
  let nwidth = parseInt(width);
  let left = document.getElementById("lb");
  left.style.width = nwidth + "px";
}

function mover() {
  hinc = 30;
  let left = document.getElementById("lb");
  let cs = window.getComputedStyle(left);
  let width = cs.getPropertyValue("width");
  let nwidth = parseInt(width);
  left.style.width = nwidth + hinc + "px";
}

function noChecked() {
  let no = localStorage.getItem("right");
  if (no === "No2") {
    return true;
  }
}
function hideLower() {
  let outlabel = document.getElementById("outlabel");
  outlabel.style.display = "none";
  let outcontent = document.getElementById("outcontent");
  outcontent.style.display = "none";
  let bldlabel = document.getElementById("bldlabel");
  bldlabel.style.display = "none";
  let bldcontent = document.getElementById("bldcontent");
  bldcontent.style.display = "none";
  let label = document.getElementById("rb");
  label.innerHTML = "Output";
}
function showLower() {
  let outlabel = document.getElementById("outlabel");
  outlabel.style.display = "table-row";
  let outcontent = document.getElementById("outcontent");
  outcontent.style.display = "table-row";
  let bldlabel = document.getElementById("bldlabel");
  bldlabel.style.display = "table-row";
  let bldcontent = document.getElementById("bldcontent");
  bldcontent.style.display = "table-row";
  let label = document.getElementById("rb");
  label.innerHTML = "Source Code";
}
/*-- Load Cpp Code, Output, Build --*/
function loadCppCodeLeft() {
  loadCppCode("left1");
}
function loadCppCodeRight() {
  loadCppCode("right1");
}
/*-- implemented in Bits page --*/
//function loadCppCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C++ Code"
//}
function loadCppOutLeft() {
  loadCppOut("left2");
}
function loadCppOutRight() {
  loadCppOut("right2");
}
/*-- implemented in Bits page --*/
//function loadCppOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C++ Output"
//}
function loadCppBldLeft() {
  loadCppBld("left3");
}
function loadCppBldRight() {
  loadCppBld("right3");
}
/*-- implemented in Bits page --*/
//function loadCppBld(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C++ Build"
//}
function loadCppLeft() {
  loadCppCodeLeft();
  loadCppOutLeft();
  loadCppBldLeft()
  localStorage.setItem("left", "Cp1");
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}
function loadCppRight() {
  loadCppCodeRight();
  loadCppOutRight();
  loadCppBldRight();
  localStorage.setItem("right", "Cp2");
  document.getElementById("exeRight").style.display = "inline";
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}

/*-- Load C# Code, Output, Build --*/
function loadCsCodeLeft() {
  loadCsCode("left1");
}
function loadCsCodeRight() {
  loadCsCode("right1");
}
/*-- implemented in Bits page --*/
//function loadCsCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C# Code"
//}
function loadCsOutLeft() {
  loadCsOut("left2");
}
function loadCsOutRight() {
  loadCsOut("right2");
}
/*-- implemented in Bits page --*/
//function loadCsOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C# Output"
//}
function loadCsBldLeft() {
  loadCsBld("left3");
}
function loadCsBldRight() {
  loadCsBld("right3");
}
/*-- implemented in Bits page --*/
//function loadCsBld(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "C# Build"
//}
function loadCsLeft() {
  loadCsCodeLeft();
  loadCsOutLeft();
  loadCsBldLeft()
  localStorage.setItem("left", "Cs1");
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}
function loadCsRight() {
  loadCsCodeRight();
  loadCsOutRight();
  loadCsBldRight();
  localStorage.setItem("right", "Cs2");
  document.getElementById("exeRight").style.display = "inline";
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}

/*-- Load Rust Code, Output, Build --*/
function loadRsCodeLeft() {
  loadRsCode("left1");
}
function loadRsCodeRight() {
  loadRsCode("right1");
}
/*-- implemented in Bits page --*/
//function loadRsCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Code"
//}
function loadRsOutLeft() {
  loadRsOut("left2");
}
function loadRsOutRight() {
  loadRsOut("right2");
}
/*-- implemented in Bits page --*/
//function loadRsOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Output"
//}
function loadRsBldLeft() {
  loadRsBld("left3");
}
function loadRsBldRight() {
  loadRsBld("right3");
}
/*-- implemented in Bits page --*/
//function loadRsBld(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Build"
//}
function loadRsLeft() {
  loadRsCodeLeft();
  loadRsOutLeft();
  loadRsBldLeft()
  localStorage.setItem("left", "Rs1");
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}
function loadRsRight() {
  loadRsCodeRight();
  loadRsOutRight();
  loadRsBldRight();
  localStorage.setItem("right", "Rs2");
  document.getElementById("exeRight").style.display = "inline";
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}
/*-- Load Python Code, Output, Build --*/
function loadPyCodeLeft() {
  loadPyCode("left1");
}
function loadPyCodeRight() {
  loadPyCode("right1");
}
/*-- implemented in Bits page --*/
//function loadPyCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Code"
//}
function loadPyOutLeft() {
  loadPyOut("left2");
}
function loadPyOutRight() {
  loadPyOut("right2");
}
/*-- implemented in Bits page --*/
//function loadPyOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Output"
//}
function loadPyBldLeft() {
  loadPyBld("left3");
}
function loadPyBldRight() {
  loadPyBld("right3");
}
/*-- implemented in Bits page --*/
//function loadPyBld(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Build"
//}
function loadPyLeft() {
  loadPyCodeLeft();
  loadPyOutLeft();
  loadPyBldLeft()
  localStorage.setItem("left", "Py1");
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}
function loadPyRight() {
  loadPyCodeRight();
  loadPyOutRight();
  loadPyBldRight();
  localStorage.setItem("right", "Py2");
  document.getElementById("exeRight").style.display = "inline";
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}


/*-- Load  Javascript Code, Output, Build --*/
function loadJsCodeLeft() {
  loadJsCode("left1");
}
function loadJsCodeRight() {
  loadJsCode("right1");
}
/*-- implemented in Bits page --*/
//function loadJsCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Code"
//}
function loadJsOutLeft() {
  loadJsOut("left2");
}
function loadJsOutRight() {
  loadJsOut("right2");
}
/*-- implemented in Bits page --*/
//function loadJsOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Output"
//}
function loadJsBldLeft() {
  loadJsBld("left3");
}
function loadJsBldRight() {
  loadJsBld("right3");
}
/*-- implemented in Bits page --*/
//function loadJsBld(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Build"
//}
function loadJsLeft() {
  loadJsCodeLeft();
  loadJsOutLeft();
  loadJsBldLeft()
  localStorage.setItem("left", "Js1");
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}
function loadJsRight() {
  loadJsCodeRight();
  loadJsOutRight();
  loadJsBldRight();
  localStorage.setItem("right", "Js2");
  document.getElementById("exeRight").style.display = "inline";
  if (noChecked()) {
    load1();
  }
  else {
    showLower();
  }
}
function load1() {
  localStorage.setItem("right", "No2");
  document.getElementById("exeRight").style.display = "none";
  let left = localStorage.getItem("left");
  switch (left) {
    case "Cp1":
      loadCppOut("right1");
      break;
    case "Cs1":
      loadCsOut("right1");
      break;
    case "Rs1":
      loadRsOut("right1");
      break;
    case "Py1":
      loadPyOut("right1");
      break;
    case "Js1":
      loadJsOut("right1");
      break;
    default:
      alert("load1 failed");
  }
  hideLower();
}

function setChecks() {
  //localStorage.clear();
  if (localStorage == undefined || localStorage.length == 0) {
    document.getElementById("Cp1").checked = true;
    document.getElementById("Rs2").checked = true;
    localStorage.setItem("left", "Cp1");
    localStorage.setItem("right", "Rs1");
    return;
  }
  let idl = localStorage.getItem("left");
  let rbl = document.getElementById(idl);
  if (rbl.checked == false || rbl.checked == undefined) {
    rbl.click();
    //  rbl.dispatchEvent(new Event('change'));
  }
  let idr = localStorage.getItem("right");
  let rbr = document.getElementById(idr);
  if (rbr.checked == false || rbr.checked == undefined) {
    rbr.click();
  }
}

function startLeft() {
  //let nor = null;

  let cp = document.getElementById("Cp1");
  if (cp.checked) {
    loadCppLeft();
  //  nor = cp;
  }
  let cs = document.getElementById("Cs1");
  if (cs.checked) {
    loadCsLeft();
  //  nor = cs;
  }
  let rs = document.getElementById("Rs1");
  if (rs.checked) {
    loadRsLeft();
  //  nor = rs;
  }
  let py = document.getElementById("Py1");
  if (py.checked) {
    loadPyLeft();
  //  nor = py;
  }
  let js = document.getElementById("Js1");
  if (js.checked) {
    loadJsLeft();
  //  nor = js;
  }
//  let no = document.getElementById("No2");
//  if (no.checked) {

//  }
}
function startRight() {
  let cp = document.getElementById("Cp2");
  if (cp.checked) {
    loadCppRight();
  }
  let cs = document.getElementById("Cs2");
  if (cs.checked) {
    loadCsRight();
  }
  let rs = document.getElementById("Rs2");
  if (rs.checked) {
    loadRsRight();
  }
  let py = document.getElementById("Py2");
  if (py.checked) {
    loadPyRight();
  }
  let js = document.getElementById("Js2");
  if (js.checked) {
    loadJsRight();
  }
  let no = document.getElementById("No2");
  if (no.checked) {
    load1();
  }
}
