/****************************************************************************
   Scripts_Bits.js

   Scripts that are specific to Bits pages
   Jim Fawcett
 ****************************************************************************/

/*-- handle info processing --*/
function closeInfos() {
  var elems = document.querySelectorAll('.txt');
  for (let i = 0; i < elems.length; ++i) {
    if (elems[i].style.display === "block") {
      elems[i].style.display = "none";
    }
  }
}
function toggleInfo(dst) {
  var elem = document.getElementById(dst);
  if (elem.style.display === "none" || elem.style.display === "") {
    elem.style.display = "block";
  }
  else {
    elem.style.display = "none";
  }
}
function toggleInfoRel(src, dst, adj = 0) {
  var txtcont = document.getElementById(dst);
  var elemtop = src.offsetTop;
  txtcont.style.top = parseInt(elemtop - 25 - adj) + 'px';
  var top = txtcont.style.top;
  if (txtcont.style.display === "none" || txtcont.style.display === "") {
    txtcont.style.display = "block";
  }
  else {
    txtcont.style.display = "none";
  }
}
function scrollUp() {
  const gridItemLeft = document.querySelector('.grid-item-left');
  if (gridItemLeft) {
    gridItemLeft.scrollTop = 0;
  }
};
function load() {
  initialize();
  scrollUp();
}
function makeHref(anchor, base) {
  // console.log(base);
  // console.log(window.location.href);
  let comphref = base + window.location.href;
  // console.log(comphref);
  anchor.href = comphref;
  window.location.href = comphref;
  return false
}
function loadifbits() {
  if (window.location !== window.top) {
    return false;
  }
  else {
    return makeHref(this, '../../TOCBits.html?src=');
  }
}
