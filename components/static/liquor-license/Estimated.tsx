import React from 'react'

export const Estimated = () => {
    return (
        <div className='m-auto w-auto' id='Estimated'>
            <p className='main-para'>Because liquor rules differ from one state to the next, getting a license also costs different amounts based on where your business is located. Furthermore, the price of getting a license varies according to your business’s size and type as well as the kind of license you desire. A summary of the typical price of a liquor license in India is provided below:</p>
            <table>
                <tr>
                    <th className='first'>Nature of License </th>
                    <th>Serving location</th>
                    <th>Targeted strength</th>
                    <th className='last'>Cost</th>
                </tr>
                <tr>
                    <td>Temporary License 	</td>
                    <td>Party or event with less than 20 lakh people	</td>
                    <td>Less than 100 people	</td>
                    <td>₹7,000</td>
                </tr>
                <tr>
                    <td> More than 100 people</td>
                    <td>₹10,000</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td> FL-4 License</td>
                    <td>private home, resort, or condominium</td>
                    <td></td>
                    <td>₹13,000</td>
                </tr>
                <tr>	
                    <td>L3, L5, L19</td>
                    <td>Restaurant, Hotel rooms, beer shop, etc</td>
                    <td></td>
                    <td>₹1,50,000- ₹5,00,000</td>
                </tr>
            </table>
        </div>
    )
}