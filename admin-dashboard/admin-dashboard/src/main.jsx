import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from'./store/index.js'
import { RouterProvider } from 'react-router'
import {router} from './router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
         <RouterProvider  router={router} />
        
      </PersistGate>
    </Provider>  
  </React.StrictMode>,
)
