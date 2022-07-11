import React, { useState, useEffect, useContext } from 'react';
//  import UserContext from '../UserContext';
import { NavLink } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

 
export default function Registration (){
    // const navigate = useNavigate();
    // const { user, setUser } = useContext(UserContext);
    // const [ fullName, setFullName ] = useState('');
	const [ fullName, setFullName ] = useState('');
	const [ address, setAddress] = useState('');
	const [ mobileNo, setMobileNo ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ verifyPassword, setVerifyPassword ] = useState('');
	const [ isActive, setIsActive ] = useState(true);
    
    useEffect(() => {
		if((fullName !== '' && address!== '' && mobileNo !== '' && email !== '' && password !== '' && verifyPassword !== '') && (password === verifyPassword)){
			setIsActive(true);
		}else {
			setIsActive(false);
		}
	}, [fullName, address, mobileNo, email, password, verifyPassword])

    
    // const handleChange = (event) => {
    //     setValues({
    //         ...values, [event.target.name]: event.target.value,
    //     });

    // };
    
    function handleFormSubmit(e){
        e.preventDefault();
    };

    return(
   
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Create Account</h2>
                </div>
                <form className='form-wrapper' onSubmit={e => handleFormSubmit (e)}>
                    <div className='name'>
                        <label className='label'>Full Name</label>
                        <input className='input' type="text" name="fullname" value={fullName} onChange={e=>setFullName(e.target.value)} required />
                    </div>
                    <div className='address'>
                        <label className='label'>Address</label>
                        <input className='input' type="text" name="address" value={address} onChange={e=>setAddress(e.target.value)} required />
                    </div>
                    <div className='mobileNo'>
                        <label className='label'>Mobile Number</label>
                        <input className='input' type="mobileNo" name="number" value={mobileNo} onChange={e=>setMobileNo(e.target.value)} required />
                    </div>
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
                    <small>Already have an account? <NavLink to="/login" style={{textDecoration:'none'}}>Click here </NavLink>to log in</small>

                  

                </form>

            </div>
        </div>
    )
}
{/* <small className='white-text'>Already have an account? <NavLink to="/login" style={{textDecoration:'none'}}>Click here</NavLink> to log in.</small> */}