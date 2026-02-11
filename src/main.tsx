import { createRoot } from 'react-dom/client'
import './Styles/General.css'
import App from './UI/App.tsx'
import Dicee from './UI/Dicee.tsx'
import Portfolio from './UI/Portfolio.tsx'
import MusicBlog from './UI/MusicBlog.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/Dicee' element={<Dicee/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/MusicBlog' element={<MusicBlog/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
