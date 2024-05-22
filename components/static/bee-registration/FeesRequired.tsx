import React from 'react'

interface HeroProps {
    cityName: string;
}

export const FeesRequired = ({ cityName }: HeroProps) => {
    return (
        <div id='FeesRequired' className='w-80 m-auto'>
            <p className="main-para">The fee structure of BEE registration in {cityName} is as follows:</p>
            <table>
                <tr>
                    <th className='first'>Subject</th>
                    <th className='last'>Fees</th>
                </tr>
                <tr>
                    <td>Company Registration (Large Scale)</td>
                    <td>Rs. 1,00,000</td>
                </tr>
                <tr>
                    <td>Company Registration (Small Scale)</td>
                    <td>Rs. 25,000</td>
                </tr>
                <tr>
                    <td>Model Registration (Per Model)</td>
                    <td>Rs. 2,000</td>
                </tr>
                <tr>
                    <td>Label Fees (Per Labelling)</td>
                    <td>Differs from appliances to appliances</td>
                </tr>
            </table>
        </div>
    )
}