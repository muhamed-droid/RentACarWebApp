
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home'; 
import Vehicle from './pages/Vehicle';
import Test from './pages/Test'

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Test/>}/>
            <Route path="/vehicle/:id" element={<Vehicle/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
