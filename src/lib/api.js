export default {
    login: async userData => {
        let response = await fetch(
            "https://react-crud-15g-default-rtdb.firebaseio.com/users/.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );
          return await response.json()
    }
}