import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Navbar>
        <Login />
      </Navbar>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
