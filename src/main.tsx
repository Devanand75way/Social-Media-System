import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import store from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer/>
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
