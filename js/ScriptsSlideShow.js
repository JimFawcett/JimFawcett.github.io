
/* ScriptsSlideShow.js 
 *
 * - minor modification of code from w3schools.com
 */

var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideShow")[0];
  if (!isDefined(x))
    return;
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  for (i = 0; i < x.length; ++i) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}