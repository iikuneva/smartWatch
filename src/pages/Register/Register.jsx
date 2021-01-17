import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <div className="d-flex flex-column container-fluid justify-content-center align-items-center mt-5 p-0">
            <h1>Register</h1>
            <div className="col-xs-12 col-md-6 col-lg-6 col-md-offset-3 p-0">
                <form onSubmit={onSubmitHandler} className="form-group d-flex flex-column container-fluid justify-content-center align-items-center" >
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
                        placeholder="Repeat password"
                    />
                    <button className="btn btn-primary">Register</button>
                </form>
                <Link to='/login'> Already have an account?</Link>
            </div>
        </div>
    );

}

export default Register