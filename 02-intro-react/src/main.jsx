import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './components/HelloWorld';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelloWorld user={'Pepe'} id='1'/>
  </React.StrictMode>,
)
