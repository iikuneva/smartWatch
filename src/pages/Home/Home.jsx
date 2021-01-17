import React from 'react'
import styles from './home.module.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center min-vh-100 m-0 p-0">
            <div className={styles.imageContainer}>
                <h2 className="text-white mt-5"><strong>smartWATCH</strong> is watching your business instead of you</h2>
                <h3 className="text-white mt-5">We will monitoring your services and will notify you</h3>
                <h4 className="text-white mt-5">All you need to do is to register your services via url</h4>
                <h5 className="text-white mt-5">Tell us which email you want to use for notifications</h5>
                <p className="text-white mt-5">Take a break and enjoy life!</p>
                <div className="text-white mt-5">
                    <Link to="/login" className="btn btn-success">Login</Link> 
                </div>
            </div>
        </div>


    )

}

export default Home