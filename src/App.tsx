import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;