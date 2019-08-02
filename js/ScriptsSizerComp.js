
/* SizerScriptComp.js */

/*---------------------------------------------------------
*  Show or hide image
*/
function toggleView(id, elem) {
  let image = document.getElementById(id);
  if (image === null) {
    return;
  }
  if (image.style.display === "none") {
    image.style.display = "block";
    elem.parentElement.style.right = "26px";
    elem.classList.add("darkElem");
    elem.classList.remove("lightElem");
    elem.childNodes[0].classList.add("darkElem");
    elem.childNodes[0].classList.remove("lightElem");
  }
  else {
    image.style.display = "none";
    elem.parentElement.style.right = "1px";
    elem.classList.add("lightElem");
    elem.classList.remove("darkElem");
    elem.childNodes[0].classList.add("lightElem");
    elem.childNodes[0].classList.remove("darkElem");
  }
}
/*---------------------------------------------------------
*  Get distance of elem top from window top
*/
function getTop(elem) {
  let yPos = 0;
  while (elem) {
    yPos += (elem.offsetTop - elem.scrollTop + elem.clientTop);
    elem = elem.offsetParent;
  }
  return yPos;
}
/*---------------------------------------------------------
*  Returns sizer child of elem
*/
function getSizer(elem) {
  let children = elem.getElementsByTagName("sizer-container");
  if (children.length === 1) {
    return children[0];
  }
  return null;
}
/* --------------------------------------------------------
 *  Compute sizer height as sum of its children's heights
 *  - expects elem to be a sizer element
 */
function getSizerHeight(elem) {
  let elems = elem.childNodes;
  let ht = 0;
  for (let i = 0; i < elems.length; ++i) {
    let htStr = window.getComputedStyle(elems[i], null).getPropertyValue("height");
    let htStrTrunc = htStr.substr(0, htStr.length - 2);
    ht += parseFloat(htStrTrunc);
  }
  return ht;
}
/*---------------------------------------------------------
 *  Debugging function:
 *  - trying to place sizers so they don't overlap
 *    when windows are hidden
 *  - for now, setting fixed positions
 */
function sizerPositions() {
  let images = document.getElementsByTagName("image-wrapper");
  let bottom = 0;
  for (let i = 0; i < images.length; ++i)
  {
    let item = images[i];
    let sizer = getSizer(item);
    let ht = getSizerHeight(sizer);
    alert(ht);
    let top = getTop(item);
    alert(top);
    let bottom = top + ht;
    alert(bottom);
  }
}
/*---------------------------------------------------------
*  Make image larger
*/
function bigger(id) {
  let pict = document.getElementById(id);
  let width = pict.style.width;                         // "100px"
  let truncWidth = width.substr(0, width.length - 2);   // "100"
  let value = Number(truncWidth);                       // 100
  value = 1.5 * value;                                  // 120
  let newWidth = value.toString();                      // "120"
  newWidth = newWidth + "px";                           // "120px"
  pict.style.width = newWidth;
}
/*---------------------------------------------------------
*  Make image smaller
*/
function smaller(id) {
  let pict = document.getElementById(id);
  let width = pict.style.width;
  let truncWidth = width.substr(0, width.length - 2);
  let value = Number(truncWidth);
  value = value / 1.5;
  let newWidth = value.toString();
  newWidth = newWidth + "px";
  pict.style.width = newWidth;
  //----------------------
  // Debug test
  // sizerPositions();
}
function restore() {
  alert("in restore");
  let imageContainers = getElementsByTagName("image-container");
  alert(imageContainers.length);
  for (let i = 0; i < imageContainers.length; ++i)
    imageContainers[i].style.width = imageContainers[i].style.width;
}
/*---------------------------------------------------------
*  Global id suffix - needed because we may have more
*                     than one sizer 
*/
var idCount = 0;

/*---------------------------------------------------------
*  Assemble image sizer and attach to placeholder
*  - imageUrl:    relative path to image
*  - caption:     append caption to image if not empty string 
*  - hiderText:   caption for sizer on hider bar
*  - hiderTop:    fixed vertical distance from window top
*                 if zero sizer aligned with image top
*  - size:        width of image container
*  - placeholder: id of div that defines location of image in page
*/
function createSizer(imageUrl, caption, hiderText, hiderTop, size, placeholder) {

  let imageContainerId = "imageContainerId" + (++idCount).toString();
  let top = "top:" + hiderTop;

  // create plus button
  let buttonPlus = document.createElement("bigger-button");
  buttonPlus.appendChild(document.createTextNode("+"));
  buttonPlus.addEventListener("click", function () { bigger(imageContainerId); });

  // create minus button
  let buttonMinus = document.createElement("smaller-button");
  buttonMinus.appendChild(document.createTextNode("-"));
  buttonMinus.addEventListener("click", function () { smaller(imageContainerId); });

  // create hider container
  let hiderContainer = document.createElement("hider-container");
  hiderContainer.addEventListener("click", function () { toggleView(imageContainerId, this); });

  // create hider text
  let hiderTextElem = document.createElement("hider-text");
  let text = "";
  for (i = 0; i < hiderText.length; ++i) {
    text += hiderText[i] + "<br />";
  }
  hiderTextElem.appendChild(document.createTextNode(hiderText));
  hiderTextElem.innerHTML = text;
  hiderContainer.appendChild(hiderTextElem);

  // create sizer
  let sizer = document.createElement("sizer-container");
  if (hiderTop !== "") {
    let value = "top:" + hiderTop;
    sizer.setAttribute("style", value);
  }
 // add children to sizer
  sizer.appendChild(buttonPlus);
  sizer.appendChild(hiderContainer);
  sizer.appendChild(buttonMinus);

  // add sizer to document
  let loc = document.getElementById(placeholder);

  // create image wrapper
  let imageWrapper = document.createElement("image-wrapper");
  let imageWrapperId = "imageWrapperId" + idCount.toString();
  imageWrapper.setAttribute("id", imageWrapperId);
  let imageContainer = document.createElement("image-container");
  imageContainer.setAttribute("id", imageContainerId);
  let imgSize = "width:" + size.toString() + "px";
  imageContainer.setAttribute("style", imgSize);
  let image = document.createElement("img");
  image.addEventListener("click", function () { bigger(imageContainerId); });
  image.setAttribute("src", imageUrl);
  image.setAttribute("width", "100%");
  imageContainer.appendChild(image);
  if (caption !== "") {
    let title = document.createElement("div");
    title.appendChild(document.createTextNode(caption));
    title.setAttribute("style", "text-align:center; white-space:nowrap; overflow:hidden; padding:5px 0px;");
    imageContainer.appendChild(title);
  }
  imageWrapper.appendChild(imageContainer);
  //imageWrapper.appendChild(sizer);

  loc.appendChild(imageWrapper);

  let body = getElementById("github");
  body.addEventListener("click", function () { restore(); });

}
