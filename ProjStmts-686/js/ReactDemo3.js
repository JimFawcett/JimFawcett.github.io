/*---------------------------------------------------------------------- 
  ReactDemo2.js - Defines a reusable button that accepts text inputs

  Jim Fawcett, CSE686 - Internet Programming, Spring 2019
-----------------------------------------------------------------------*/

'use strict';

const e = React.createElement;

class Widget extends React.Component {
  render() {
    return (
      <h1>Hello React!</h1>
    );
  }
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<Widget />, document.getElementById('widget'));


