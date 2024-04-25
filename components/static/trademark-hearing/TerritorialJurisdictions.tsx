import React from 'react'

export const TerritorialJurisdictions = ()=> {
    return (
        <div id='TerritorialJurisdictions'>
            <table>
                <tr>
                    <th className='first'>TMR Offices Location</th>
                    <th className='last'>Territorial Jurisdiction</th>
                </tr>
                <tr>
                    <td>Mumbai</td>
                    <td>Maharashtra, Madhya Pradesh, Chhattisgarh, Goa</td>
                </tr>
                <tr>
                    <td>Ahmadabad</td>
                    <td>Gujarat, Rajasthan, Daman and Diu, Dadra and Nagar Haveli</td>
                </tr>
                <tr>
                    <td>Kolkatta</td>
                    <td>Arunachal Pradesh, Assam, Bihar, Orissa, West Bengal, Manipur, Mizoram, Meghalaya, Sikkim, Tripura, Jharkhand, Nagaland, Andaman & Nicobar Islands</td>
                </tr>
                <tr>
                    <td>New Delhi</td>
                    <td>Jammu & Kashmir, Punjab, Haryana, Uttar Pradesh, Himachal Pradesh, Uttarakhand, Delhi, Chandigarh</td>
                </tr>
                <tr>
                    <td>Chennai</td>
                    <td>Andhra Pradesh, Telangana, Kerala, Tamil Nadu, Karnataka, Pondicherry, Lakshadweep Islands</td>
                </tr>
            </table>
        </div>
    )
}