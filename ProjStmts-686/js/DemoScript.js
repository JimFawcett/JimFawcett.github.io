/*
 * ============================================================
 *  DemoScript.js - Event handlers for changing element widths
 * ============================================================
 */

function loader()
{
  var node = document.getElementById("design");
  node.onmousedown = larger;
  node.onmouseup = smaller;
}
function resize(ident,width) {
  var node = document.getElementById(ident);
  node.attributes.getNamedItem("width").value = width;
}
function larger() {
  var node = document.getElementById("design");
  node.attributes.getNamedItem("width").value = 600;
}
function smaller() {
  var node = document.getElementById("design");
  node.attributes.getNamedItem("width").value = 300;
}
