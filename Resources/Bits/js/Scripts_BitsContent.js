/****************************************************************************
   Scripts_BitsContent.js

   Scripts that are specific to Bits pages
   Jim Fawcett
 ****************************************************************************/

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
function setScroll() {
  let main = document.querySelector("#main");
  const scrollPosition = main.scrollTop;
  localStorage.setItem('scrollPositionHelloRust', scrollPosition);
  let body = document.getElementById("github");
  let style = window.getComputedStyle(body, null).getPropertyValue('line-height');
  let fontsize = parseFloat(style);
  let scroller = document.getElementById("scrollY")
  scroller.innerHTML = Math.trunc(scrollPosition / fontsize);
}
function gotoLastScroll() {
  let main = document.querySelector("#main");
  const scrollPosition = localStorage.getItem('scrollPositionHelloRust');
  if (scrollPosition) {
    main.scrollTo(0, scrollPosition);
  }
  main.addEventListener('scroll', setScroll);
}
function load() {
  //initialize();
  gotoLastScroll();
}
