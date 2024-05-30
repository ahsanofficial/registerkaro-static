import React from 'react'

export const CostOfCertification = () => {
    return (
        <div id='CostOfCertification' className='w-80 m-auto'>
            <p className="main-para">The cost of certification ranges between Rs 7,000 to Rs 10,000</p>
            <p className="main-para">These costs are dependent upon situations which are broken down in the table below.</p>
            <table>
                <tr>
                    <th className='first'>Category</th>
                    <th className='last'>Price</th>
                </tr>
                <tr>
                    <td>Urgent Requirement</td>
                    <td>Rs. 9,999</td>
                </tr>
                <tr>
                    <td>Regular Process</td>
                    <td>Rs. 7,499</td>
                </tr>
            </table>
        </div>
    )
}