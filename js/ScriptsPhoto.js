/* ------------------------------------------------------------------
 *  ScriptsPhoto.js
 */

  var photoWidget = new Object;
photoWidget.create = function (id, url, caption, fontSize, size) {
  var placeholder = document.getElementById(id);
  if (!isDefined(placeholder))
    return;
  var cont = document.createElement("photo-container");
  var imgWrapper = document.createElement("photo-image");
  var img = document.createElement("img");
  img.setAttribute("src", url);
  if (isDefined(size))
    img.setAttribute("width", size);
  imgWrapper.appendChild(img);
  cont.appendChild(imgWrapper);
  if (isDefined(caption)) {
    var cap = document.createElement("photo-caption");
    var txt = document.createTextNode(caption);
    if(isDefined(fontSize))
      cap.style.fontSize = fontSize;
    cap.appendChild(txt);
    cont.appendChild(cap);
  }
  placeholder.appendChild(cont);
};
