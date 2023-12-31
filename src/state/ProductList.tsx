import React from 'react'

function ProductList(props: any) {

    var { productList, deleteProduct, sortByName } = props

    return (<>
        <table className='w3-table-all'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th style={{cursor:'pointer'}} onClick={() => sortByName()}>Product Name</th>
                    <th>Product Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {productList.map((product: any) => {
                    return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.unitsInStock}</td>
                        <td><button onClick={() => deleteProduct(product.id)}>Delete Product</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </>)
}

export default ProductList