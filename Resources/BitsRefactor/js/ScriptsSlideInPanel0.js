/* ------------------------------------------------------------------
 *  ScriptsSlideInPanel.js 
 *    - code for slide-in info panel
 *  
 *  Jim Fawcett, Emeritus Teaching Professor, Syracuse University
 * ------------------------------------------------------------------
 */


var slideIn = new Object;

slideIn.toggleSlideIn = function () {
  let cont = document.getElementById("slideInPanel");
  if (cont.classList.contains("slidein-panel--is-visible"))
    cont.classList.remove("slidein-panel--is-visible")
  else
    cont.classList.add("slidein-panel--is-visible");
};
