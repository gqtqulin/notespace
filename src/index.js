import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import detectEthereumProvider from '@metamask/detect-provider';
import './index.css'
import './fonts/Opirus/OpirusOpik.ttf'

const startApp = (provider) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );
}

const provider = await detectEthereumProvider();
if (provider) {
  startApp(provider);
  console.log('Provider is found!')
} else {
  console.log('Please install MetaMask!');
}
