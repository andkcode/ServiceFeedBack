import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import MainView from './layout/MainView.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainView />
  </StrictMode>,
)
