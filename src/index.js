import React from 'react';
import ReactDOM from 'react-dom'; //imports the React tools required to render to the DOM

import Detail from './pages/Detail'; //is where we import our new React component into our app so that we can start using it.

ReactDOM.render( //is what kicks off the rendering of our entire app, and it takes two parameters: some JSX to render and where to render it to.
    <Detail />, //it's the JSX name of our Detail component.
    document.getElementById('app')// it tells React we want it to render inside the HTML element named "app" – that's inside the index.html file we made earlier.
);
