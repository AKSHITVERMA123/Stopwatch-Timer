import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import UserRegistration from './Components/UserRegistration';
import Login from './Components/Login';
import FileNotFound from './Components/FileNotFound';
import CostCalculate from './Components/CostCalculate';
import Password from './Components/Password';
import Moon from './Components/Moon';
import Sun from './Components/Sun';
import TataComp from './Component/TATAcomp';
import Useref from './Components/Useref';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Password' element={<Password />}></Route>
          <Route path='/CostCalculator' element={<CostCalculate />}></Route>
          <Route path='/UserRegistration' element={<UserRegistration></UserRegistration>}></Route>
          <Route path='/Sun' element={<Sun></Sun>}></Route>
          <Route path='/Moon' element={<Moon></Moon>}></Route>
          <Route path='/PythonProject' element={<Moon></Moon>}></Route>
          <Route path='/CarProject' element={<TataComp></TataComp>}></Route>
          <Route path='/Registration' element={<Login></Login>}></Route>
          <Route path='/UseRef' element={<Useref></Useref>}></Route>
          <Route path='*' element={<FileNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;