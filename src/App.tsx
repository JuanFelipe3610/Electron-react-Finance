// import Update from '@/components/update'
import './App.scss'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Translate } from './pages/Translate'
import { Navigator } from './components/Navigator'

function App () {
  return (
    <div className='App'>
      <Navigator>
        <Link to="/">Inicio</Link>
        <Link to="/translate">Traductor</Link>
      </Navigator>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/translate' element={<Translate/>} />
      </Routes>
      {/*  <Update /> */}
    </div>
  )
}

export default App
