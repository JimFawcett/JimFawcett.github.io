/////////////////////////////////////////////////////////////////////
// ScriptsTemplate.js - Toggles visibility for target of event     //
//                                                                 //
// Jim Fawcett, 25 June 2018                                       //
/////////////////////////////////////////////////////////////////////
/*
 * - used for More-Less construct
 * - no longer needed since HTML5 provides <details> and <summary> tags
 * - still used on a few pages that haven't been updated yet
 */
function toggleVisibility(event) {

  var caller = event.currentTarget;
  var e = caller.nextElementSibling;

  var toggle = window.getComputedStyle(e, null).getPropertyValue("display");
  if (toggle === 'block') {
    e.style.display = 'none';
    caller.innerHTML = "More";
  }
  else {
    e.style.display = 'block';
    caller.innerHTML = "Less";
  }
}
