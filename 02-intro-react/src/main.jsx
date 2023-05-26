import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const h1 = React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'item 1')));
// const h1 = <div><ul><li>Hello World</li></ul></div>
const ul = /*#__PURE__*/ React.createElement(
  "container",
  null,
  /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "ul",
      null,
      /*#__PURE__*/ React.createElement("li", null, "1"),
      /*#__PURE__*/ React.createElement("li", null, "2"),
      /*#__PURE__*/ React.createElement("li", null, "3"),
      /*#__PURE__*/ React.createElement("li", null, "4"),
      /*#__PURE__*/ React.createElement("li", null, "5")
    )
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  ul
)
