import react,{useEffect, useState} from 'react';
import navigater, { json, useNavigate } from 'react-router-dom';



const Signup=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[]);

    const collectData=async ()=>{
        if(name=="" || email=="" || password==""){
            alert('Please enter details');
        }else{
        console.log(name,email,password);
        let result =await fetch('http://localhost:4000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result));
        if(result){
            navigate('/')
        }}
    }
    return (
        <div>
            <h1>Register</h1>
            <input className='inputbox' value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter your name..' />
            <input className='inputbox' value={email} onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='Enter your email..' />
            <input className='inputbox' value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Enter password..' />
            <button className='appbutton' onClick={collectData}>SignUp</button>
        </div>
    )
}

export default Signup;