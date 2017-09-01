import React from 'react';
import Chance from 'chance'; //generates realistic-looking random data, which means it can generate random first names, last names, sentences of text,

class Detail extends React.Component { //defines a new React component. React components can be big (like pages) or small (like a custom component to render breadcrumbs) and they are very flexible.
    constructor(props) {
    super(props);

    this.state = {
        name: chance.first(),
        country: chance.country({ full: true })
        };
    }

    buttonClicked(){
        this.forceUpdate(); // re-render our component so that a new name and place are generated
    }

    render() { //starts the render() method of our component. This is called by React when the component needs to be drawn to the screen, and needs to return something that can be drawn in the browser. It only returns ONE value.
        return (<div>
            <p>Hello, {this.state.name}.</p>
            <p>Youre from {this.state.country}.</p>
            <button onClick={this.buttonClicked.bind(this)}>Meet someone New</button>
        </div>);
    } // bind() that lets you force JavaScript to use a definition of this you specify.
}

export default Detail; //The "export" keyword means this component is being exposed to the rest of our app to use, and "default" means it's the only thing this class will expose.
