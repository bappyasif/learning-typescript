import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { CartProvider } from './context/CartProvider.tsx'
import { ProdsProvider } from './context/ProductsProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // just to re iterate we dont necessarily have to wrap our context provider with our enitre App rather componnets whichg would actually use them
  // but for simplicity we are wraping entire APP in here
  <React.StrictMode>
    <ProdsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProdsProvider>
  </React.StrictMode>,
)
