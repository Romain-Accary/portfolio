import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import './style/header.css';
import './style/about.css';
import { Header } from './compenent/Header';
import { About } from './compenent/about';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
  </StrictMode>,
)
