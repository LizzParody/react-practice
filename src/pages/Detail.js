import React from 'react';

class Detail extends React.Component { //defines a new React component. React components can be big (like pages) or small (like a custom component to render breadcrumbs) and they are very flexible.
    render() { //starts the render() method of our component. This is called by React when the component needs to be drawn to the screen, and needs to return something that can be drawn in the browser.
      return <p>{this.props.message}</p>;
    } //inside {} bc it's JavaScript code rather than plain text.
}

export default Detail; //The "export" keyword means this component is being exposed to the rest of our app to use, and "default" means it's the only thing this class will expose.
