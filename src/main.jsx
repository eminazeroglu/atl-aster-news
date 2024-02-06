import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from '@/providers/GlobalProvider'
import { Provider } from 'react-redux'
import store from './store'
import { AuthContextProvider } from './context/AuthContext'
import { GlobalContextProvider } from './context/GlobalContext'
import { ModalContextProvider } from './context/ModalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalContextProvider>
                <AuthContextProvider>
                    <ModalContextProvider>
                        <GlobalProvider />
                    </ModalContextProvider>
                </AuthContextProvider>
            </GlobalContextProvider>
        </Provider>
    </BrowserRouter>
)
