const BASE_URL = 'https://react-crud-15g-default-rtdb.firebaseio.com/products'

export default {
    getAllProducts: async () => {
        let response = await fetch(`${BASE_URL}.json`)
        return await response.json()
      }

}
