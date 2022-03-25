import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Login from './Pages/LogIn';
import './App.css';


function App() {

  const [hideLogin, setHideLogin] = useState(true)
  const changeHideLogin = () => {
    setHideLogin(!hideLogin)
  }

  useEffect (() => {
    const token = localStorage.getItem('token')
  },[])
  



  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light shadow p-3 mb-5 bg-body rounded
">
        <div className="container-fluid">
        <Link to='/' className='nav-link'>
        <a className="navbar-brand" >Market Koder</a>
        </Link>
        <form className="d-flex">
          <Link to='/login' className='nav-link'>
            {hideLogin &&
            <button className="btn btn-outline-success" type="submit" onClick={changeHideLogin}>Log In</button>
             }            
          </Link>
        </form>
        </div>
      </nav>
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>

    </div>
  )
}

export default App;
