import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  StopwatchTimer from './Components/StopwatchTimer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/StopwatchTimer' element={< StopwatchTimer></ StopwatchTimer>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;