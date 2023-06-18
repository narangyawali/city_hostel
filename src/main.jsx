import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './pages/Layout.jsx'
import Home from './components/home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <div style={{overflowX:"hidden"}}>
  	<Layout/>
    </div>
  </React.StrictMode>,
)
