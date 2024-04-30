
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home'; 
import Vehicle from './pages/Vehicle';
import HomePage from './pages/HomePage';

//            <Route path="/vehicle/:id" element={<Vehicle/>}/> 

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
