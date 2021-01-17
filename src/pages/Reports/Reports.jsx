import React from 'react'
import { useParams } from 'react-router-dom'

const Reports = (props) => {

    let { id } = useParams()

    return (
        <div>
            <h2>Reports for service ...</h2>
            <table className="table table-hover">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">Date and Time</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>15.01.2021</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>14.01.2021</td>
                        <td>Deactive</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Reports