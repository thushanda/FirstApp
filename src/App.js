import Login from './Components/login';
import Sign_in from './Components/sign_in';
import Dashboard from './Components/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // import router
import Forget_password from './Components/forget_password';


function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/sign_in' element={<Sign_in/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/forget_password' element={<Forget_password/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
