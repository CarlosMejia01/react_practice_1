import React from 'react'
import ReactDOM from 'react-dom/client'
// import { UsersApp } from './UsersApp.jsx'
import './styles.css'
// import { LoginPage } from './auth/pages/LoginPage.jsx'
import { UsersApp } from './UsersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
  </React.StrictMode>,
)
