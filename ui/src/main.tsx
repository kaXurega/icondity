import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { RecoilRoot } from 'recoil';
import { ThemeProvider } from './components/theme';
import './locales/i18n';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    // <RecoilRoot>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    // </RecoilRoot>
  // </React.StrictMode>
);
