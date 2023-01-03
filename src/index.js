import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./styles/_reset.module.scss";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
