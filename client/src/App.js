
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home'; 
import CreateVehicle from './pages/CreateVehicle';
import Vehicle from './pages/Vehicle';

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
        <Link to="/createvehicle"> Create a Vehicle</Link>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createvehicle" element={<CreateVehicle/>}/>
            <Route path="/vehicle/:id" element={<Vehicle/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
