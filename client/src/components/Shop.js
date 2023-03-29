import axios from 'axios'
import { useState, useEffect } from 'react'

const Shop = (props) => {

    const {productList, setProductList} = props


    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data)
                setProductList([...productList, res.data])
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }, [])


    return(
        <div>
            {productList.map((product, idx) => (
                <ul className='bg-light' key={idx}>
                    <li>{product.title}</li>
                    <li>{product.price}</li>
                    <li>{product.description}</li>
                </ul>
            ))}
        </div>
    )

}

export default Shop