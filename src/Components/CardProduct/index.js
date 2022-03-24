const Card = props => {
    const {addProductMarket, inputData} = props
    const {image, name, resume, cost, category, productName} = props.productData
    return (
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..."/>
          </div>

          <div className="col-md-8">
            <div className="card-body d-flex row">
              <h2 className="card-title" data-name={name} >{name}</h2>
              <p className="card-text">{resume}</p>
              <div className="d-flex justify-content-between">
              <h4>${cost}</h4>
              <input type="number" name="input" id="" onChange={inputData}/>
              </div>
              <div className="d-flex justify-content-between mt-4">
              {/* <select name="" id="">Categoria: {category}</select> */}
              <li className='list-group-item'>Categoria: {category}</li>

              <button className="btn btn-dark" onClick={addProductMarket}>Agregar</button>
              </div>

                </div>
          </div>
        </div>
      </div>
    )
}

export default Card