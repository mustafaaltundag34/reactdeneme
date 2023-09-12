import React from 'react'

function ProductDetail({productname,unitPrice,unitsInStock}:any) {



    return (<>
        <h1>Detail Component</h1>
        <h1>Name: {productname}</h1>
        <h1>Price: {unitPrice}</h1>
        <h1>Stock: {unitsInStock}</h1>
    </>)
}

export default ProductDetail