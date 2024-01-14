import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from '@/providers/GlobalProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GlobalProvider />
    </BrowserRouter>
)
