
/* ScriptsSlideShow.js 
 *
 * - minor modification of code from w3schools.com
 */

var slideShow = new Object;

slideShow.slideIndex = 1;

slideShow.plusDivs = function (n) {
  slideShow.showDivs(slideShow.slideIndex += n);
};

slideShow.showDivs = function (n) {
  var i;
  var x = document.getElementsByClassName("slideShow");
  if (!isDefined(x))
    return;
  if (n > x.length) { slideShow.slideIndex = 1; }
  if (n < 1) { slideShow.slideIndex = x.length; }
  for (i = 0; i < x.length; ++i) {
    x[i].style.display = "none";
  }
  x[slideShow.slideIndex - 1].style.display = "block";
};