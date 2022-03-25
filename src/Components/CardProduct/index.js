const Card = props => {
    const {addProductMarket, inputData} = props
    const {image, name, resume, cost, category, productId} = props.productData
    return (
        <div className="card mb-3 shadow p-3 mb-5 bg-body rounded-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..."/>
          </div>

          <div className="col-md-8">
            <div className="card-body d-flex row ">
              <h2 className="card-title">{name}</h2>
              <p className="card-text">{resume}</p>
              <div className="d-flex justify-content-between">
              <h4>${cost}</h4>
              <p>Cantidad:</p>
              <input type="number" name="quantity" list="number" id="" min="1" max="10" onChange={inputData}/>
              <datalist id="number">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option value="7"></option>
                <option value="8"></option>
                <option value="9"></option>
                <option value="10"></option>
              </datalist>
              </div>
              <div className="d-flex justify-content-between mt-4">
              {/* <select name="" id="">Categoria: {category}</select> */}
              <li className='list-group-item'>Categoria: {category}</li>

              <button className="btn btn-dark" onClick={addProductMarket} data-product-name={name} data-product-cost={cost} data-product-id={productId}>Agregar</button>
              </div>

                </div>
          </div>
        </div>
      </div>
    )
}

export default Card