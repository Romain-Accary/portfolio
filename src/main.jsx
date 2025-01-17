import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import './style/header.css';
import { Header } from './compenent/header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
