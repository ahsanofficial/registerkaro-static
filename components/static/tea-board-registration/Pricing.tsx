import React from 'react'
interface HeroProps {
    cityName: string;
}
export const Pricing = ({ cityName }: HeroProps) => {
    return (
        <div id='Pricing' className='w-80 m-auto'>
            <p className="main-para">The pricing for different licences and registrations being granted by the Board are as follows:</p>
            <table>
                <tr>
                    <th className='first'>Types</th>
                    <th className=''>Fees</th>
                    <th className=''>Validity</th>
                    <th className='last'>Renewal Fees</th>
                </tr>
                <tr>
                    <td>Issuance of Registration Certificate for Manufacturing unit</td>
                    <td>1,20,000</td>
                    <td>Lifetime</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>Tea Waste</td>
                    <td>3300</td>
                    <td>
                        Upto 31st Dec of the First Year (New Application) <br />
                        Upto 31st Dec of the Third Year (Renewal Application)
                    </td>
                    <td>3300</td>
                </tr>
                <tr>
                    <td>Flavour Registration</td>
                    <td>
                        For Non-MSME: 6000 (for 3 flavours & 6000 for each additional flavour) <br />
                        For MSME: 4000 (for 3 flavours & 4000 for each additional flavour)
                    </td>
                    <td>Lifetime</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>Buyer Registration</td>
                    <td>1,20,000</td>
                    <td>Lifetime</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>Distributor Registration</td>
                    <td>50500</td>
                    <td>Lifetime</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>Tea Auction Organisers</td>
                    <td>200000</td>
                    <td>31st Dec of each year</td>
                    <td>125000</td>
                </tr>
                <tr>
                    <td>Tea Auction Broker</td>
                    <td>90000</td>
                    <td>31st Dec of each year</td>
                    <td>56000</td>
                </tr>
                <tr>
                    <td>Exporter Licence</td>
                    <td>2800</td>
                    <td>% years</td>
                    <td>2800</td>
                </tr>
                <tr>
                    <td>Permanent Exporter</td>
                    <td>2800</td>
                    <td>Lifetime</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <td>Warehouse License</td>
                    <td>14,000</td>
                    <td>3 years</td>
                    <td>14000</td>
                </tr>
            </table>
            <p className="main-para">Besides these fees which need to be paid to the government, applicants also need to pay professional fees which range from Rs. 15000 to 25000. At RegisterKaro, we understand the importance of Tea Board registration and the significant impact it can have on businesses in {cityName}. Complying with legal requirements and regulations is crucial for ensuring smooth operations and long-term success for any business. Our expert team consisting of experienced CA, CS and Lawyers can fully comprehend the complexities and challenges entrepreneurs face while navigating through complex legal frameworks. We have extensive knowledge and expertise in obtaining Tea Board Licences and Registrations, allowing us to provide comprehensive guidance and dedicated support to our clients.</p>
        </div>
    )
}