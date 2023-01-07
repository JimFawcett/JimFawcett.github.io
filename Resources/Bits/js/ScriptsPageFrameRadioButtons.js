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
/*-- implemented in Bits page --*/
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
/*-- implemented in Bits page --*/
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
}
function loadCppRight() {
  loadCppCodeRight();
  loadCppOutRight();
  loadCppBldRight();
  localStorage.setItem("right", "Cp2");
}

/*-- Load C# Code, Output, Build --*/
function loadCsCodeLeft() {
  loadCsCode("codeleft");
}
function loadCsCodeRight() {
  loadCsCode("coderight");
}
/*-- implemented in Bits page --*/
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
/*-- implemented in Bits page --*/
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
}
function loadCsRight() {
  loadCsCodeRight();
  loadCsOutRight();
  loadCsBldRight();
  localStorage.setItem("right", "Cs2");
}

/*-- Load Rust Code, Output, Build --*/
function loadRsCodeLeft() {
  loadRsCode("codeleft");
}
function loadRsCodeRight() {
  loadRsCode("coderight");
}
/*-- implemented in Bits page --*/
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
/*-- implemented in Bits page --*/
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
}
function loadRsRight() {
  loadRsCodeRight();
  loadRsOutRight();
  loadRsBldRight();
  localStorage.setItem("right", "Rs2");
}
/*-- Load Python Code, Output, Build --*/
function loadPyCodeLeft() {
  loadPyCode("codeleft");
}
function loadPyCodeRight() {
  loadPyCode("coderight");
}
/*-- implemented in Bits page --*/
//function loadPyCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Code"
//}
function loadPyOutLeft() {
  loadPyOut("outleft");
}
function loadPyOutRight() {
  loadPyOut("outright");
}
/*-- implemented in Bits page --*/
//function loadPyOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Output"
//}
function loadPyBldLeft() {
  loadPyBld("bldleft");
}
function loadPyBldRight() {
  loadPyBld("bldright");
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
}
function loadPyRight() {
  loadPyCodeRight();
  loadPyOutRight();
  loadPyBldRight();
  localStorage.setItem("right", "Py2");
}


/*-- Load  Javascript Code, Output, Build --*/
function loadJsCodeLeft() {
  loadJsCode("codeleft");
}
function loadJsCodeRight() {
  loadJsCode("coderight");
}
/*-- implemented in Bits page --*/
//function loadJsCode(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Code"
//}
function loadJsOutLeft() {
  loadJsOut("outleft");
}
function loadJsOutRight() {
  loadJsOut("outright");
}
/*-- implemented in Bits page --*/
//function loadJsOut(id) {
//  let codecont = document.getElementById(id);
//  codecont.innerHTML = "Rust Output"
//}
function loadJsBldLeft() {
  loadJsBld("bldleft");
}
function loadJsBldRight() {
  loadJsBld("bldright");
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
}
function loadJsRight() {
  loadJsCodeRight();
  loadJsOutRight();
  loadJsBldRight();
  localStorage.setItem("right", "Js2");
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
  let cp = document.getElementById("Cp1");
  if (cp.checked) {
    loadCppLeft();
  }
  let cs = document.getElementById("Cs1");
  if (cs.checked) {
    loadCsLeft();
  }
  let rs = document.getElementById("Rs1");
  if (rs.checked) {
    loadRsLeft();
  }
  let py = document.getElementById("Py1");
  if (py.checked) {
    loadPyLeft();
  }
  let js = document.getElementById("Js1");
  if (js.checked) {
    loadJsLeft();
  }
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
}
