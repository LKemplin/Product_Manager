import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {productList, setProductList} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log(res)
            setProductList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            const newProductList = productList.filter((product) => {
                return product._id !== id
            })
            setProductList(newProductList)
        }).catch((err) => console.log(err))
    }
    
    return (
        <div>
        {
            productList.map((product)=>(
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <Link to={`/api/products/${product._id}`}>{product.title}</Link>
                    </li>
                    <li>
                        <Link to={`/api/products/edit/${product._id}`}>Edit</Link>
                    </li>
                    <li>
                        <button onClick={() => deleteHandler(product._id)}>Delete Product</button>
                    </li>
                </ul>
            ))
        }
        </div>
    )
}

export default ProductList