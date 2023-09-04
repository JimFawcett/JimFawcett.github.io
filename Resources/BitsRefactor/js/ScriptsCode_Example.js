/* ------------------------------------------------------------------
 *  ScriptsCode_Example.js
 */

var CEWidget = new Object;

CEWidget.create = function (id, url, caption, fontSize, size) {
  var placeholder = document.getElementById(id);
  if (!isDefined(placeholder))
    return;
  var cont = document.createElement("code-container");
  var hdg1 = document.createElement("h4");
  hdg1.innerHTML("Example Code:");
  var cb1 = document.createElement("code");
  cb1.classList.add("language-rust");
  var pre1 = document.createElement("pre");
  pre1.appendChild(cb1);
  cont.appendChild(hdg1);
  cont.appendChild(pre1);

  //var imgWrapper = document.createElement("photo-image");
  //var img = document.createElement("img");
  //img.setAttribute("src", url);
  //if (isDefined(size))
  //  img.setAttribute("width", size);
  //imgWrapper.appendChild(img);
  //cont.appendChild(imgWrapper);
  //if (isDefined(caption)) {
  //  var cap = document.createElement("photo-caption");
  //  var txt = document.createTextNode(caption);
  //  if(isDefined(fontSize))
  //    cap.style.fontSize = fontSize;
  //  cap.appendChild(txt);
  //  cont.appendChild(cap);
  //}
  placeholder.appendChild(cont);
};
