import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Dashboard from './Components/Dashboard/Dashboard';
import './dist/output.css';


const App = () => {
  //setTemplate()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
