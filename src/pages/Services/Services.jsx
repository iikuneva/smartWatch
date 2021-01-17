import React from 'react'
import {Link} from 'react-router-dom'

const Services = (props) => {

    return (
        <div>
            <h1>Service manager</h1>
            <div>
                <div>
                    <Link to="/create">Add service</Link>
                </div>
            </div>
            <div>
                <div>No monitoring services are currently configured</div>
                <Link to="/create">Add service</Link>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Email</th>
                            <th>Reports</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>https://amazon.com</td>
                            <td>Active</td>
                            <td>nia_kuneva@abv.bg</td>
                            <td><Link to="/service/:id/reports">Reports</Link></td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Services