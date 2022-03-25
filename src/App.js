import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import FilterbyCategorie from './Components/Categories'
import FilterByName from './Components/FilterByName'

function App() {

  const [inputText, setInputText] = useState('')
  const [allProducts, setAllProducts] = useState({})
  const [filteredProducts, setFilteredProducts] = useState({})


  useEffect(async () => {
    let data = await fetch('https://react-crud-15g-default-rtdb.firebaseio.com/products/.json')
    setAllProducts(data)
  },[])

  useEffect( async () => {
    let data = await fetch('https://react-crud-15g-default-rtdb.firebaseio.com/products/.json')
    let response = await data.json()
    console.log(response)
  },[])


  const inputHandler = (event) => {
      setInputText(event.target.value)
      console.log(inputText)

      const value = event.target.value
      const productsFilteredByN32ame = Object.keys(allProducts).filter(key => {
      const productValue = allProducts[key]
      const productName = productValue.name
      return productName.toLowerCase().includes(value.toLowerCase())
    })
        !value ? setFilteredProducts(null) : setFilteredProducts(productsFilteredByName)
  }

  return (
    <div className="App container">
      <main className='row'>
        <aside className='col-3 justify-content-center'>
          <FilterByName 
          inputHandler={inputHandler}
          />
          <FilterbyCategorie />
        </aside>
      </main>
    </div>
  );
}

export default App;
