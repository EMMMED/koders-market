import { useState, useEffect } from "react"
import api from '../../lib/api'
import Card from '../../Components/CardProduct'

const Product = props => {
    const {token, addShoppingCar} = props
    // coleccion de Products
    const [allProducts, setAllProducts] = useState({})
    const [productMarket, setProductMarket] = useState({})


    useEffect(async () => {
        let data = await api.getAllProducts()
        setAllProducts(data) 
        
    },[])

    const inputData = event => {
        let quantity = event.target.value
        console.log(quantity)
        setProductMarket({...productMarket, quantity})
    }


    const addProductMarket = event => {
        let name = event.target.dataset.productName
        let cost = event.target.dataset.productCost
        let productId = event.target.dataset.productId
        setProductMarket({...productMarket, name, cost, productId})
        console.log(productMarket)
    }




    return (
        <div className="container">
            <div className="row">
                {
                    Object.keys(allProducts).map((key, index) => {
                        return <Card 
                        productData={{...allProducts[key], productId: key}}
                        addProductMarket={addProductMarket}
                        inputData={inputData}
                        token={token}
                        addShoppingCar={addShoppingCar}
                        />
                    })
                }
            </div>

        </div>
    )
}

export default Product
