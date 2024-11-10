import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './Components/Portfolio';
import UserRegistration from './Components/UserRegistration';
import Login from './Components/Login';
import FileNotFound from './Components/FileNotFound';
import CostCalculate from './Components/CostCalculate';
import Password from './Components/Password';
import Moon from './Components/Moon';
import Sun from './Components/Sun';
import TataComp from './Component/TATAcomp';
import Useref from './Components/Useref';
import UseEffect from './Components/UseEffect';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio/>}></Route>
          <Route path='/Password' element={<Password />}></Route>
          <Route path='/CostCalculator' element={<CostCalculate />}></Route>
          <Route path='/UserRegistration' element={<UserRegistration></UserRegistration>}></Route>
          <Route path='/Services' element={<Services></Services>}></Route>
          <Route path='/Sun' element={<Sun></Sun>}></Route>
          <Route path='/Moon' element={<Moon></Moon>}></Route>
          <Route path='/PythonProject' element={<Moon></Moon>}></Route>
          <Route path='/CarProject' element={<TataComp></TataComp>}></Route>
          <Route path='/Registration' element={<Login></Login>}></Route>
          <Route path='/UseRef' element={<Useref></Useref>}></Route>
          <Route path='/UseEffect' element={<UseEffect></UseEffect>}></Route>
          <Route path='*' element={<FileNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;