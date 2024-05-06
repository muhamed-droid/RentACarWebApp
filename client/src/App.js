
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

//            <Route path="/vehicle/:id" element={<Vehicle/>}/> 

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
