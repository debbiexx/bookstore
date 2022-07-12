import React, { useState, useEffect, useContext } from 'react';
//  import UserContext from '../UserContext';
import { NavLink } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

 
export default function Registration (){
    // const navigate = useNavigate();
    // const { user, setUser } = useContext(UserContext);
    // const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ verifyPassword, setVerifyPassword ] = useState('');
	const [ isActive, setIsActive ] = useState(true);
    
    useEffect(() => {
		if((email !== '' && password !== '' && verifyPassword !== '') && (password === verifyPassword)){
			setIsActive(true);
		}else {
			setIsActive(false);
		}
	}, [email, password, verifyPassword])

    
    // const handleChange = (event) => {
    //     setValues({
    //         ...values, [event.target.name]: event.target.value,
    //     });

    // };
    
    function handleFormSubmit(e){
        e.preventDefault();
    };

    return(
   
        <div className='main-wrapper'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Create Account</h2>
                </div>
                <form className='form-wrapper' onSubmit={e => handleFormSubmit (e)}>
                    <div className='email'>
                        <label className='label'>Email</label>
                        <input className='input' type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}required />
                    </div>
                    <div className='password'>
                        <label className='label'>Password </label>
                        <input className='input' type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                    </div>
                    <div className='password'>
                        <label className='label'>Verify Password </label>
                        <input className='input' type="password" name="password" value={verifyPassword} onChange={e=>setVerifyPassword(e.target.value)} required />
                    </div>
                    
                    <div>
                        {isActive ?
                        <button className='submit'>Sign Up</button>
                        :
                        <button className='submit' disabled>Sign Up</button>
                        }
                    </div>
                    <div>

                    
                    <small className='clickHere'>Already have an account?
                    <NavLink to="/login" style={{textDecoration:'none'}}><strong> Click here </strong> </NavLink>to login.</small>
                    </div>
                  

                </form>

            </div>
        </div>
    )
}
{/* <small className='white-text'>Already have an account? <NavLink to="/login" style={{textDecoration:'none'}}>Click here</NavLink> to log in.</small> */}