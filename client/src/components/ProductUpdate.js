import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const ProductUpdate = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        }).catch(err => console.log(err))
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description,
        })
        .then(res => {
            console.log(res);
            navigate("/");
        }).catch(err => console.log(err))

    }

    return (
    <div>
        <form onSubmit={updateHandler} className='form col-4 mx-auto'>
            <label  className='form-label'>Title:</label>
            <input type="text" value={title} className='form-control' onChange={(e) => setTitle(e.target.value)}/>
            <label className='form-label'>Price: $</label>
            <input type="number" value={price} className='form-control' onChange={(e) => setPrice(e.target.value)}/>
            <label className='form-label'>Description:</label>
            <input type="text" value={description} className='form-control' onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit">Edit Product</button>
        </form>
    </div>
  )
}

export default ProductUpdate