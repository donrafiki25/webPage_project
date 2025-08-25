import { createRoot } from 'react-dom/client'
import './Styles/General.css'
import App from './UI/App.tsx'
import Dicee from './UI/Dicee.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/Dicee' element={<Dicee/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
