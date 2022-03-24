import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import FilterbyCategorie from './Components/Categories'
import FilterByName from './Components/FilterByName'


function App() {
  return (
    <div className="App container">
      <main className='row'>
        <aside className='col-3 justify-content-center'>
          <FilterByName/>
          <FilterbyCategorie />
        </aside>
      </main>
    </div>
  );
}

export default App;
