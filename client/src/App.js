
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home'; 
import CreateProduct from './pages/CreateProduct';
import Product from './pages/Product';

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
        <Link to="/createproduct"> Create a Product</Link>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createproduct" element={<CreateProduct/>}/>
            <Route path="/product/:id" element={<Product/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
