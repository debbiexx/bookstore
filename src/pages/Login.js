import { useState, useEffect,useContext} from 'react';
import styled from 'styled-components';

export default function Login(){
    const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isActive, setIsActive ] = useState(true);

    useEffect(() => {
		if(email !== '' && password !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password])

    function authentication(e) {
		e.preventDefault();
    }

    return(
        <div className='main-wrapper'>
            <LoginStyle>
            <div className='login-wrapper'>
                <div>
                    <h2 className='title'>Login</h2>
                </div>
                <form className='form-wrapper' onSubmit={e => authentication (e)}>
                    <div className='email'>
                        <label className='label'>Email</label>
                        <input className='input' type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}required />
                    </div>
                    <div className='password'>
                        <label className='label'>Password </label>
                        <input className='input' type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                    </div>
                    <div>
                        {isActive ?
                        <button className='submit'>Login</button>
                        :
                        <button className='submit' disabled>Login</button>
                        }
                    </div>
                </form>

            </div>
            </LoginStyle>
        </div>
    )
}

const LoginStyle = styled.div`
.login-wrapper{
    background-color:var(--white);
    min-width: 350px;
    min-height: 400px;
    padding:30px;
    box-sizing: border-box;
    border-radius: 5px;
}

`;