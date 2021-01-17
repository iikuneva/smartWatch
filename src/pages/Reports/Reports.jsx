import React from 'react'
import { useParams } from 'react-router-dom'

const Reports = (props) => {

    let { id } = useParams()

    return (
        <div>
            <h2>Reports for service ...</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date and Time</th>
                        <th>Status</th>
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