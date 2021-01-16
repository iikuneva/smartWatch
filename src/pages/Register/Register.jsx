import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import Input from '../../components/Input/Input'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')
    // const [error, setError] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Register</h1>
            <form  onSubmit={onSubmitHandler}>
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
                <Input
                    name="repeat"
                    type="password"
                    value={repeat}
                    onChange={e => setRepeat(e.target.value)}
                    placeholder="Re-password"
                />
                <button>Register</button>
            </form>
            <Link to='/login'> Already have an account?</Link>
        </div>
    );

}

export default Register