import react, { useEffect } from 'react';
import { Link,useNavigate   } from 'react-router-dom'

const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <img alt='logo' src='download.png' />
            { auth ? 
                <ul className='nav-ul'>
                <li>< Link to='/'>Products</Link></li>
                <li>< Link to='/add'>Add Product</Link></li>
                {/* <li>< Link to='/update/:id'>Update Product</Link></li> */}
                <li>< Link to='/profile'>Profile</Link></li>
                <li className='float-r'> < Link onClick={logout} to='/signup' className='rounded'>Logout</Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li>< Link to='/signup' className='rounded'>Sign Up</Link></li>
                    <li>< Link to='/login' className='rounded'>Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;