
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home'; 
import Vehicle from './pages/Vehicle';
import Test from './pages/Navbar'
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/vehicle/:id" element={<Vehicle/>}/>
            <Route path='/homepage' element={<HomePage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
