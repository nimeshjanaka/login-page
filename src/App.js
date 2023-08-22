
import './App.css';
import {Routes ,Route } from 'react-router-dom';
// import { Login } from './Components/Login';
import Dashboard from './Components/Dashbord';
import Login from './Components/Login';


function App() {
  
  return (
    <Routes>
      <Route path= '/' element={<Login />} />
      <Route path= '/dashboard' element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
