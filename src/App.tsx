import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import NavigationBar from './components/navbar/NavigationBar'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar />
       <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
