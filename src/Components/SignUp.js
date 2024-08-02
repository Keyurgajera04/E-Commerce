import react,{useState} from 'react';

const Signup=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const collectData=()=>{
        console.log(name,email,Password)
    }
    return (
        <div>
            <h1>Register</h1>
            <input className='inputbox' value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter your name..' />
            <input className='inputbox' value={email} onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='Enter your email..' />
            <input className='inputbox' value={Password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Enter password..' />
            <button className='signup-button' onClick={collectData}>SignUp</button>
        </div>
    )
}

export default Signup;