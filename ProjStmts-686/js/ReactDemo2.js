/*---------------------------------------------------------------------- 
  ReactDemo2.js - Defines a reusable button that accepts text inputs

  Jim Fawcett, CSE686 - Internet Programming, Spring 2019
-----------------------------------------------------------------------*/

'use strict';

const e = React.createElement;

/*-------------------------------------------------------------
   This class would normally be placed in a library file
   along with other component definitions.

   I didn't do that here to make it easier to understand
   what is going on.
 ------------------------------------------------------------*/

class ReactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };  /* have I been clicked? */
  }

  /*---- returns a React element for rendering ----------------*/

  render() {
    if (this.state.clicked) {
      var elem = e(
        'button',
        { className: this.props.className, onClick: () => { this.setState({ clicked: false }); } },
        'Hello CSE686 - Internet Programming, using ' + this.props.name
      );
      return elem;
    }

    return e(
      'button',
      { className: this.props.className, onClick: () => this.setState({ clicked: true }) },
      this.props.text
    );
  }
}

/*-------------------------------------------------------------
   This is application specific code and would normally be
   packaged separately from the definitions of reusable parts
 ------------------------------------------------------------*/

/*-- create and pass labels to the first button for clicked and unclicked states --*/

var props1 = { name: 'upper button', text: '1st React Button', className: 'demoButtonClass1' };
const Btn1 = React.createElement(ReactButton, props1);

/*-- create and pass different labels to the second button --*/

var props2 = { name: 'lower button', text: '2nd React Button', className: 'demoButtonClass2' };
const Btn2 = React.createElement(ReactButton, props2);

/*-- define a space element to place between buttons --*/

const VSpacer = React.createElement(
  'div',
  { style: { height: '10px', paddingBottom: '10px', paddingLeft: '50px' }, align:'Left' },
  'VSpacer'
);

/*-- create a container for the two buttons - this will be the component --*/

const Container = React.createElement(
  'div',
  { style: { border: '1px solid black', display: 'table-cell', float: 'left' } },
  [Btn1, VSpacer, Btn2]  /* children of the div */
);

/*-- now, render the component, as a custom HTML element --*/

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(Container, domContainer);


