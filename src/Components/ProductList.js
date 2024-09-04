import { Link } from "react-router-dom";
import react, { useState,useEffect } from 'react';

const ProductList=()=>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async()=>{
        let result = await fetch('http://localhost:4000/products',{
            headers : {
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async(id)=>{
        let result = await fetch(`http://localhost:4000/product/${id}`,{
            method:"Delete",
            headers : {
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if(result){
            getProducts();
        }
    }
    const searchHandle =async (event)=>{
        let key = event.target.value;
        if(key){
            // console.log(key)
            let result = await fetch(`http://localhost:4000/search/${key}`,{
                headers : {
                    authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            result = await result.json();
            if(result){
                setProducts(result)
            }
        }else{
            getProducts();
        }
        
    }

    return(
        <div className='product-list'>
            
            <h1>Product List</h1>
            <input type="text" className="search-box" placeholder="Search Product" onChange={searchHandle}/>
            <ul>
                <li>SR NO.</li>
                <li>NAME</li>
                <li>PRICE</li>
                <li>CATEGORY</li>
                <li>COMPANY</li>
                <li>OPARATION</li>
            </ul>
            {
                products.length>0 ? products.map((item,index,key)=>
                    <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}/-</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>
                        <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                        <Link to={'/update/'+item._id}>UPDATE</Link>
                    </li>
                    </ul>
                )
                :
                    <h1>No record found</h1>
            }
        </div>
    )
}

export default ProductList;