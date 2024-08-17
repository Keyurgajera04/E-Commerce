import react,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () =>{

    const navigate = useNavigate();
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const userId = JSON.parse(localStorage.getItem('user'))._id;

    const AddProductHandler=async ()=>{
        if(name=="" || price=="" || category=="" || company==""){
            alert('Please enter details');
        }else{
        // console.log(name,price,category,company);
        let result =await fetch('http://localhost:4000/add-product',{
            method:'post',
            body: JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        // console.log(result)
        navigate('/')
       }
    }
    return(
        <div>
            <h1>Add Product</h1>
            <input className='inputbox' value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter product name..' />
            <input className='inputbox' value={price} onChange={(e)=>{setPrice(e.target.value)}} type='text' placeholder='Enter price..' />
            <input className='inputbox' value={category} onChange={(e)=>{setCategory(e.target.value)}} type='text' placeholder='Enter category..' />
            <input className='inputbox' value={company} onChange={(e)=>{setCompany(e.target.value)}} type='text' placeholder='Enter company name..' />
            <button className='appbutton' onClick={AddProductHandler}>Add Product</button>
        </div>
    )
}

export default AddProduct;