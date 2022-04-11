import './App.css';
import {Routes,Route} from "react-router-dom"
import { Login1 } from './Pages/Login1';
import { Login2 } from './Pages/Login2'
import { Home } from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/registration/one' element={<Login1/>}></Route>
      <Route path='/registration/two' element={<Login2/>}></Route>
    </Routes>
  );
}

export default App;
