// import Axios from 'axios';
import React, { useState, useEffect } from 'react';

function Lyrics() {
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        await fetch("https://dummyjson.com/products")
        .then((response)=> response.json())
        .then((product)=> {
         setProduct(product.products) 
            console.log(product.products)
        })
        .catch((error)=>{
            throw new Error(error)
        }) 

     }

        useEffect(()=>{
            getProducts()
        }, []);
        
return (
        <div className="Main" >
            <h1>products</h1>
            {
                product.map((product)=>
                <div key = {product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.discountPercentage}</p>
                    <p>{product.category}</p>
                    <img src={product.thumbnail} alt = "image"/>

                </div>
                )}            
        </div>
    );
}

export default Lyrics;