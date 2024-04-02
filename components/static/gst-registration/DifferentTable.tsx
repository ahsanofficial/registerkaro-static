import React from 'react'
interface HeroProps {
    cityName: string;
}
export const DifferentTable = ({ cityName }: HeroProps) => {
    return (
        <div id='DifferentTable' className='w-80 m-auto'>
            <table>
                <tr>
                    <th className='first'>Types of GST</th>
                    <th className='last'>Purpose</th>
                </tr>
                <tr>
                     <td>SGST or State Goods and Services Tax	</td>
                     <td>It refers to the tax payable on the sale of services & products within a state. It replaces previous taxes like Entry Tax, Entertainment Tax, Value Added Tax, Sales Tax, etc.</td>
                </tr>
                <tr>
                     <td>CGST or Central Goods and Services Tax	</td>
                     <td>The tax levied on the supply of intra-state products and the Central Government charges this tax. This type of GST replaced many taxes levied by the Centre such as Central Excise Duty, Customs Duty, Service Tax, SAD, CST, etc.</td>
                </tr>
                <tr>
                     <td>UTGST or Union Territory Goods & Services Tax</td>
                     <td>Taxes applicable to the sales of products & services in Union Territory like Andaman & Nicobar, Dadra, Daman & Diu, Chandigarh, etc.,</td>
                </tr>
                <tr>
                    <td>IGST or Integrated Goods and Services Tax</td>
                    <td>Sale of inter-state products & services leads to taxation. Basically, when businesses transfer products & services from one state to another, they need to pay IGST.</td>
                </tr>
            </table>
        </div>
    )
}