import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

const ProductDisplay = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=> {
            console.log(res.data)
            setProduct(res.data)
        }).catch(err=> console.log(err))
    }, [])

    return (
    <div>
        <h1>{product.title}</h1>
        <h2>Price: ${product.price}</h2>
        <p>Description: {product.description}</p>
    </div>
    )
}

export default ProductDisplay