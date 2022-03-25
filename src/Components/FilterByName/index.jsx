import { useState } from "react"

const FilterByName = props => {

    const {inputHandler} = props
    return  (
        <input type="text" onChange={inputHandler} placeholder="Buscar..." className=" my-1 w-100 p-2"></input>
    )  
   }

   export default FilterByName