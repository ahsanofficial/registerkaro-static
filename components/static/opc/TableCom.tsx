import React from 'react'

export const TableCom = () => {
    return (
        <div>
            <table>
                <tr>
                    <th className='first'>Forms</th>
                    <th className='last'>Penalty</th>
                </tr>
                <tr>
                    <td>Appointment of 1st Auditor</td>
                    <td>Within 30 Days of Incorporation</td>
                </tr>
                <tr>
                    <td>Issue of Share Certificate</td>
                    <td>Within 60 Days of Incorporation</td>
                </tr>
                <tr>
                    <td>Stamp Duty Payment on Share Certificate</td>
                    <td>Within 30 Days of the Certificate Issue</td>
                </tr>
                <tr>
                    <td>Filing of INC-20A (Declaration for Business Commencement) <br />Registered Address maintenanceRegistered office details filingCurrent <br /> Bank Account openingEntire Subscribed Capital received</td>
                    <td>Within 180 Days of Incorporation, but before commencing business</td>
                </tr>
            </table>
        </div>
    )
}
