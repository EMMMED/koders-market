import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Login from './Pages/LogIn';
import api from './lib/api'
import Card from './Components/CardProduct/index';
import Product from './Pages/Product';
import './App.scss';


function App() {

  const [hideLogin, setHideLogin] = useState(true)
  const [allProducts, setAllProducts] = useState({})
  const [token, setToken] = useState('')

  useEffect(async () => {
    let data = await api.getAllProducts()
    const token = localStorage.getItem('token')
    setToken(token)
    console.log(token)
    setAllProducts(data)
},[])

  const changeHideLogin = () => {
    setHideLogin(!hideLogin)
  }

  
  



  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
        <div className="container-fluid">
        <Link to='/' className='nav-link'>
        <a className="navbar-brand" >Market Koder</a>
        </Link>
        <Link to='/' className='nav-link'>Productos</Link>
        <form className="d-flex">
          
            {hideLogin &&
            <Link to='/login' className='nav-link'>
            <button className="btn btn-outline-success" type="submit" onClick={changeHideLogin}>Log In</button>
            </Link>
             }            

        </form>
        </div>
      </nav>
      <div className="container">
      <div className="row">
        <div className="col-3">
        
        </div>
      </div>
    </div>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path="/" element={<Product token={token}/>}/>
      </Routes>

    </div>
  )
}

export default App;
