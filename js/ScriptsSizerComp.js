
/* SizerScriptComp.js */

/*---------------------------------------------------------
*  Make image larger
*/
function bigger(id) {
  let pict = document.getElementById(id);
  let width = pict.style.width;                         // "100px"
  let truncWidth = width.substr(0, width.length - 2);   // "100"
  let value = Number(truncWidth);                       // 100
  value = 1.2 * value;                                  // 120
  let newWidth = value.toString();                      // "120"
  newWidth = newWidth + "px";                           // "120px"
  pict.style.width = newWidth;
}
/*---------------------------------------------------------
*  Make image smaller
*/
function smaller(id) {
  let pict = document.getElementById(id);
  let width = pict.style.width;                         // "100px"
  let truncWidth = width.substr(0, width.length - 2);   // "100"
  let value = Number(truncWidth);                       // 100
  value = value/1.2;                                    // 120
  let newWidth = value.toString();                      // "120"
  newWidth = newWidth + "px";                           // "120px"
  pict.style.width = newWidth;
}
/*---------------------------------------------------------
*  Create styled image in floated container
*  - url is relative address of image
*  - caption is image title text
*  - placeholderId is id of div to be replaced with image
*/
var idCount = 0;

function createSizer(url, caption, size, placeHolderId) {

  /* create title element */
  let title = null;
  if (caption !== "") {
    title = document.createElement("div");
    title.appendChild(document.createTextNode(caption));
    title.setAttribute("class", "imgTitle");
    title.addEventListener("click", function () { smaller(imgId); });
  }

  /* create image element */
  let img = document.createElement("img");
  let imgId = "imgId" + idCount.toString();
  img.setAttribute("id", imgId);
  img.setAttribute("src", url);
  let imgStyle = "width: " + size.toString() + "px;";
  img.setAttribute("style", imgStyle);
  img.addEventListener("click", function () { bigger(imgId); });

  /* create image frame div */
  let imgFrame = document.createElement("div");
  imgFrame.setAttribute("class", "imgFrame");
  if (isDefined(title))
    imgFrame.appendChild(title);
  imgFrame.appendChild(img);

  /* create image container, padded to provide space between image and page content */
  let imgContr = document.createElement("img-container");
  let imgContrId = "imgContrId" + idCount.toString();
  imgContr.setAttribute("id", imgContrId);
  imgContr.setAttribute("class", "imgContr");
  imgContr.setAttribute("style", "padding-left:20px;");
  imgContr.appendChild(imgFrame);
  //imgContr.addEventListener("click", function () { bigger(imgId); });

  /* add image container to page at placeholder */
  let loc = document.getElementById(placeHolderId);
  loc.appendChild(imgContr);
  ++idCount;
}
