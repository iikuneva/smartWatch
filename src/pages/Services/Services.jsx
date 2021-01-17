import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import styles from './services.module.css'

const Services = (props) => {

    const [serviceURL, setServiceURL] = useState('')
    const [alertEmail, setAlertEmail] = useState('')
    const [isShow, setIsShow] = useState(false)

    // useEffect(() => {
    //     const onShowDivHandler = () => {
    //         bkg.style.display = 'hidden'
    //         popup.style.display = 'block'
    //     }
    // },[])

    const onAddHandler = async (e) => {
        e.preventDefault()
    }

    const onCancelHandler = () => {

    }

    return (
        <>
            <div className={isShow ? `${styles.pop}` : `${styles.none}`}>
                <div className="form-group d-flex flex-column container-fluid justify-content-center col-xs-12 col-md-6 col-lg-8 col-md-offset-3 p-0">
                    <button type="button" onClick={onCancelHandler} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 className="mt-5">ADD NEW SERVICE</h4>
                    <form onSubmit={onAddHandler} className="form-group d-flex flex-column container-fluid justify-content-center align-items-center">
                        <Input
                            name="url"
                            type="text"
                            value={serviceURL}
                            onChange={e => setServiceURL(e.target.value)}
                            placeholder="Service URL"
                        />
                        <Input
                            name="email"
                            type="email"
                            value={alertEmail}
                            onChange={e => setAlertEmail(e.target.value)}
                            placeholder="Email for notifications"
                        />
                        <button className="btn btn-primary">Add Service</button>
                    </form>
                </div>
            </div>
            <div  className={isShow ? `${styles.bkg}` : ''}></div>
            <div>
                <h3 className="m-5">SERVICE MANAGER</h3>
                <div className="jumbotron">
                    <p className="lead">No monitoring services are currently configured</p>
                </div>
                <div>
                    <button onClick={e => setIsShow(true)} className="btn btn-success mb-5" id="addService"> + Add service</button>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Email</th>
                                <th scope="col">Reports</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>https://amazon.com</td>
                                <td>Active</td>
                                <td>nia_kuneva@abv.bg</td>
                                <td><Link to="/services/:id/reports">Reports</Link></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )

}

export default Services