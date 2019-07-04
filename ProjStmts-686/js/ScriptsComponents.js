/* ScriptsComponents.js */

/*---- make picture bigger ----*/

function biggerImage(id) {
  let pict = document.getElementById(id);
  pict.width = 1.2 * pict.width;
}
/*---- make picture smaller ----*/

function smallerImage(id) {
  let pict = document.getElementById(id);
  pict.width = pict.width / 1.2;
}

function showHide(id) {
  let pict = document.getElementById(id).parentElement;
  if (pict.style.display === "none") {
    pict.style.display = "block";
    pict.parentElement.style.position = "static";
  }
  else {
    pict.style.display = "none";
    pict.parentElement.style.position = "absolute";
  }
}
/*---- add resizing buttons and image to placeholder ----*/

function makeSizer(imageUrl, iwidth, placeholder, figtitle) {

  /* find placeholder element - that's where the resizable image will go */
  let elem = document.getElementById(placeholder);

  /* create flexbox button container */
  let sizer = document.createElement("sizerbutton-container");

  /* create + and - buttons and set their click events */
  let buttonPlus = document.createElement("sizer-button");
  buttonPlus.appendChild(document.createTextNode('+'));
  buttonPlus.addEventListener("click", function () { biggerImage("tempId"); });

  let buttonMinus = document.createElement("sizer-button");
  buttonMinus.appendChild(document.createTextNode('-'));
  buttonMinus.addEventListener("click", function () { smallerImage("tempId"); });

  let buttonHide = document.createElement("sizer-button");
  buttonHide.appendChild(document.createTextNode('H'));
  buttonHide.addEventListener("click", function () { showHide("tempId"); });

  /* add buttons to button container */
  sizer.appendChild(buttonHide);
  sizer.appendChild(buttonMinus);
  sizer.appendChild(buttonPlus);

  let title = document.createElement("title-block");
  title.appendChild(document.createTextNode(figtitle));
  sizer.appendChild(title);

  /* add button container to placeholder element */
  elem.appendChild(sizer);

  /* create photo styled container to hold image */
  let photoBox = document.createElement("photo-box");

  /* add photoBox to placeholder element */
  elem.appendChild(photoBox);

  /* create image, load it, and set its width and style */
  let image = document.createElement("img");
  image.setAttribute("id", "tempId");
  image.setAttribute("src", imageUrl);
  image.setAttribute("width", iwidth);
  image.classList.add("bordered");

  /* add image to photoBox */
  photoBox.appendChild(image);
}
