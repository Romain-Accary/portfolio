import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import './style/header.css';
import './style/about.css';
import './style/project.css';
import { Header } from './compenent/Header';
import { About } from './compenent/about';
import { Project } from './compenent/Project';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Project />
  </StrictMode>,
)
