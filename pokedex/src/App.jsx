import './App.css'
import PokemonDetail from './components/PokemonDetail'
import PokemonList from './components/PokemonList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonList/>}/>
        <Route path='/pokemon/:id' element={<PokemonDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
