import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from './lib/api'
import Card from './Components/CardProduct/index';
import './App.scss';
import Product from './Pages/Product';



function App() {
  const [allProducts, setAllProducts] = useState({})

    useEffect(async () => {
        let data = await api.getAllProducts()
        setAllProducts(data)
        console.log(data)
    },[])
  



  return (
    <div className="App">
      <main>
      <div className="container">
        <div className="row">
          <div className="col-3">
          <Link to='/' className='nav-link'>
                  Productos
                </Link>
          </div>
        </div>
      </div>
      </main>
          <Routes>
            <Route path="/" element={<Product/>}/>
          </Routes>
    </div>

  );
}

export default App;
