import React from 'react'
interface HeroProps {
    cityName: string;
}
export const DifferenceGSPnUsual = ({ cityName }: HeroProps) => {
    return (
        <div id='DifferenceGSPnUsual' className='w-80 m-auto'>
            <table>
                <tr>
                    <th className='first'>Aspect</th>
                    <th className=''>GSP</th>
                    <th className='last'>Usual Trade Law (MFN Clause)</th>
                </tr>
                <tr>
                    <td><strong>Preferential Treatment</strong></td>
                    <td>Provides preferential access to certain developing countries' exports through reduced or zero tariffs.</td>
                    <td>Requires equal treatment for all trade partners, as per the Most Favored Nation (MFN) clause.</td>
                </tr>
                <tr>
                    <td><strong>Discrimination</strong></td>
                    <td>Allows for discrimination by providing preferential treatment to specific countries.</td>
                    <td>Prohibits discrimination among trading partners, ensuring equal treatment for all WTO members.</td>
                </tr>
                <tr>
                    <td><strong>Basis of Treatment</strong></td>
                    <td>Based on the Generalized System of Preferences (GSP) scheme.</td>
                    <td>Governed by the Most Favored Nation (MFN) principle, wherein all WTO members receive equal treatment.</td>
                </tr>
                <tr>
                    <td><strong>Purpose</strong></td>
                    <td>Designed to benefit certain developing countries by facilitating access to markets in developed countries.</td>
                    <td>Promotes fairness and non-discrimination in international trade by ensuring that no country receives preferential treatment over others.</td>
                </tr>
                <tr>
                    <td><strong>Exception for Developing Countries</strong></td>
                    <td>Provides unique and differential treatment, including zero-tariff imports, for developing countries.</td>
                    <td>Allows for exceptions to the MFN principle, particularly for developing countries, to promote their economic development through trade.</td>
                </tr>
                <tr>
                    <td><b>Governing Body</b></td>
                    <td>Governed by specific agreements and regulations under the GSP scheme.</td>
                    <td>Governed by the World Trade Organization (WTO) rules and regulations, including the MFN principle.</td>
                </tr>
            </table>
        </div>
    )
}