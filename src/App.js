import logo from './logo.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { HeaderMain } from './components/Header/Header-main'
import { Skills } from './components/Skills/Skills'

function App () {
  return (
    <div>
      <Header />
      <HeaderMain />
      <Skills/>
    </div>
  )
}

export default App
