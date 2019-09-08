//////////////////////////////////////////////////////////////////////
// ScriptsTemplate.js - JavaScript library for page components     //
//                                                                 //
// Jim Fawcett, Website, Syracuse University, Summer 2018          //
/////////////////////////////////////////////////////////////////////

//----< more-less component >----------------------------------------
/*
 *  - component that shows-hides content
*/
function toggleVisibility(event) {

  var caller = event.currentTarget;
  var e = caller.nextElementSibling;

  var toggle = window.getComputedStyle(e, null).getPropertyValue("display");
  if (toggle === 'block') {
    e.style.display = 'none';
    caller.innerHTML = "More";
  }
  else {
    e.style.display = 'block';
    caller.innerHTML = "Less";
  }
}
//----< image sizing component with buttons >------------------------

function incrementSize(id) {
  var e = document.getElementById(id);
  var wdth = window.getComputedStyle(e, null).getPropertyValue("width");
  wdth = wdth.substr(0, wdth.length - 2);
  var size = Number(wdth) + 100;
  e.style.width = size.toString() + "px";
}

function decrementSize(id) {
  var e = document.getElementById(id);
  var wdth = window.getComputedStyle(e, null).getPropertyValue("width");
  wdth = wdth.substr(0, wdth.length - 2);
  var size = Number(wdth) - 100;
  e.style.width = size.toString() + "px";
}

function hidePageNote() {
  let pgNote = document.getElementsByTagName("page-note")[0];
  pgNote.style.display = "none";
}

let x0 = null;

function lock(e) {
  x0 = unify(e).clientX;
}

function move(e) {
  let cont = document.getElementsByTagName('body')[0];
  if (x0 || x0 === 0) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx);
    if (dx > 50)
      loadNext();
    else if (dx < -50)
      loadPrev();
    x0 = null;
  }
}
function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}
function addSwipeListeners() {
  let cont = document.getElementsByTagName('body')[0];
  cont.addEventListener('touchstart', lock, false);
  cont.addEventListener('mousedown', lock, false);
  cont.addEventListener('touchend', move, false);
  cont.addEventListener('mouseup', move, false);
}
