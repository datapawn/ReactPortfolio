// CORE CONCEPTS:
// is technically a LIBRARY
// declariative - component based - component is static, accepts props
// components manage state
// turn your site into granular components, and reuse them to build the whole page/app
// Benefits:  components are easily swappable, without breaking a monolithic javascript
//            re-renders by component, instead of messing with dependencies in vanilla JS


// CONVENTIONS:
// PROPS VS. STATE:
// Props:  passed to the component from outside of the component
    // like arguments to a function
    // FREX:  you pass an initial count # to a Counter component.
// State:  handled within a component
    // FREX:  the current count you're on is State within the Counter component.
// if you're handling data within a component, that's State
// if you're handling that info out of that component, pass it as Props

// the App.js File


// the Index.js File
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; -- default CSS that npx create-react-app generates
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);