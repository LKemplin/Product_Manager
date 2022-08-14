import React, {useState} from 'react'
import axios from 'axios';


const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState()
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/create', {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
    <div>
        <form className='form mx-auto col-4 bg-secondary p-3' onSubmit={submitHandler}>
            <label className='form-label'>Title:</label>
            <input type="text" className='form-control' onChange={(e) => setTitle(e.target.value)} />
            <label className='form-label'>Price: </label>
            <input type="number" className='form-control' onChange={(e) => setPrice(e.target.value)} />
            <label className='form-label'>Description:</label>
            <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)}/>
            <button>Add Product</button>
        </form>
    </div>
  )
}

export default ProductForm