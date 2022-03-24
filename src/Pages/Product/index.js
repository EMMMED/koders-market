import { useState, useEffect } from "react"
import api from '../../lib/api'
import Card from '../../Components/CardProduct'

const Product = () => {
    // coleccion de Products
    const [allProducts, setAllProducts] = useState({})
    const [productMarket, setProductMarket] = useState({})


    useEffect(async () => {
        let data = await api.getAllProducts()
        setAllProducts(data)
        console.log(data)
    },[])

    const inputData = event => {
        let value = event.target.value
        let name = event.target.dataset.name
        console.log(name)
        console.log(value)
        setProductMarket({...productMarket, value})
    }


    const addProductMarket = () => {
        
        setProductMarket({...productMarket})
    }




    return (
        <div className="container">
            <div className="row">
                {
                    Object.keys(allProducts).map(key => {
                        return <Card 
                        key={key}
                        productData={{...allProducts[key], productId: key}} 
                        addProductMarket={addProductMarket}
                        inputData={inputData}
                        />
                    })
                }
            </div>

        </div>
    )
}

export default Product
