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
    
    return (
        <div>
        {
            productList.map((product)=>(
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <Link to={`/api/products/${product._id}`}>{product.title}</Link>
                    </li>
                </ul>
            ))
        }
        </div>
    )
}

export default ProductList