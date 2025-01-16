import React from 'react'
import { useNavigate } from 'react-router-dom';


function Login({setLoginok}) {

    const navigate = useNavigate();
    
    const login = (event)=>{
        event.preventDefault(); //form이 새로고침 방지
        console.log('login');
        setLoginok(true);
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={(event)=>login(event)}>
                <div className='idpw'>
                    <div className='id'>
                        <label htmlFor='id'>아이디</label>
                        <input type="text" id='id' />
                    </div>
                    <div className='pw'>
                        <label htmlFor="pw">비밀번호</label>
                        <input type="password" id='pw' />
                    </div>
                    <button type='submit'>로그인</button>
                </div>
            </form>
        </div>
    )
}

export default Login
