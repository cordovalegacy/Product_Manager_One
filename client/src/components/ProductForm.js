import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = (props) => {

    const {productList, setProductList} = props

    const navigate = useNavigate()

    const [products, setProducts] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const changeHandler = (e) => {
        setProducts({...products, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setProductList([...productList, products])
        navigate('/display')
    }

    return (
        <form onSubmit={submitHandler} className="bg-primary p-2 m-auto d-flex flex-column align-items-center w-75 rounded">
            <h4 className="text-warning">Add a product to the shop!</h4>
            <div className="form-group p-1 text-center">
                <label className="w-50" htmlFor="title">Title: </label>
                <input className="w-100" type="text" name="title" onChange={changeHandler}/>
            </div>
            <div className="form-group p-1 text-center">
                <label className="w-50" htmlFor="price">Price: </label>
                <input className="w-100" type="number" name="price" onChange={changeHandler}/>
            </div>
            <div className="form-group p-1 text-center">
                <label className="w-50" htmlFor="description">Description: </label>
                <input className="w-100" type="text" name="description" onChange={changeHandler}/>
            </div>
            <input type="submit" value="Add to Shop" />
        </form>
    )

}

export default ProductForm