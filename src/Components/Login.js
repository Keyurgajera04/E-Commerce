import react,{useState,useEffect} from 'react';
import { json,useNavigate } from 'react-router-dom';

const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[]);

    const handlerLogin =async ()=>{
        let result = await fetch('http://localhost:4000/login',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'Application/json'
            }
        })
        result = await result.json();
        // console.log(result.user)
        if(result.user){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')
        }else{
            alert('Please enter correct details')
        }
        // console.log(result);
    }
    return(
        <div>
            <h1 className='login'>Login</h1>
            <input type='text' onChange={(e)=>setEmail(e.target.value)} className='inputbox' placeholder='Enter email' value={email}/>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} className='inputbox' placeholder='Enter password' value={password}/>
            <button onClick={handlerLogin} className='appbutton' type='button'>Login</button>
        </div>
    )
}

export default Login;