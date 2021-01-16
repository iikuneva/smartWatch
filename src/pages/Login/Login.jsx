import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Input from '../../components/Input/Input'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitHandler}>
                <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <Input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button>Login</button>
            </form>
            <Link to='/register'>Don't have an account yet?</Link>
        </div>
    );


}

export default Login