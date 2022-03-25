const BASE_URL = 'https://react-crud-15g-default-rtdb.firebaseio.com'


export default {
    login: async userData => {
        let response = await fetch(
          `${BASE_URL}/users.json`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );
          return await response.json()
    },
    getAllProducts: async () => {
      let response = await fetch(`${BASE_URL}/products.json`)
      return await response.json()
    }
}
