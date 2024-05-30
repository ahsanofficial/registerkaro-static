import React from 'react'
interface HeroProps {
    cityName: string;
}
const ListOfEssential = ({ cityName }: HeroProps) => {
    return (
        <div id='ListOfEssential' className='w-80 m-auto'>
            <table >
                <tr>
                    <th colSpan={4} style={{borderRadius:"25px 25px 0 0"}}>Annual Compliances</th>
                </tr>
                <tr>
                    <th>Form</th>
                    <th>Type of NBFC</th>
                    <th>Description</th>
                    <th>Due Date</th>
                </tr>
                <tr>
                    <td>DNBS-02</td>
                    <td>Non-NDSI</td>
                    <td>For capturing financial information such as assets & liabilities statements and compliance with various prudential norms.</td>
                    <td>On or before 30th May (either audited or provisional), if provisional filled, then file audited within 30 days of finalization of financials.</td>
                </tr>
                <tr>
                    <td>DNBS-010</td>
                    <td>All NBFCs & ARC</td>
                    <td>To ensure continuous regulatory compliance for all NBFCs.</td>
                    <td>Within 15 days from the finalising of the balance sheet date but not later than 31 Oct.</td>
                </tr>
                <tr>
                    <th colSpan={4}>Quarterly Compliances</th>
                </tr>
                <tr>
                    <td>DNBS-01</td>
                    <td>NBFCs-D & NBFC-NDSI</td>
                    <td>This return is to capture financial statements such as Assets and Liabilities, P&L accounts etc</td>
                    <td>15th of every quarter’s last month i.e 15th April, 15th July, 15th October, 15th January</td>
                </tr>
                <tr>
                    <td>DNBS-03</td>
                    <td>NBFCs-D & NBFCs-NDSI and Non-NDSI and NBFCs having assets worth more than 100 cr.</td>
                    <td>This return checks the compliance with prudential norms set by RBI such as Capital Adequacy Asset (CAA), Asset Classification, and Provisioning etc.</td>
                    <td>15th of every quarter’s last month</td>
                </tr>
                <tr>
                    <td>DNBS-04A</td>
                    <td>NBFCs-D & NBFCs-NDSI and Non-NDSI and NBFCs having assets worth more than 100 cr.</td>
                    <td>To return is to foresee if there would be any mismatch in future cash inflows and outflows.</td>
                    <td>15th of every quarter’s last month</td>
                </tr>
                <tr>
                    <td>DNBS-06</td>
                    <td>RNBCs</td>
                    <td>This return is to catch the financial information such as assets & liabilities statement and also checks the compliance with prudential norms of RBI</td>
                    <td>15th of every quarter’s last month</td>
                </tr>
                <tr>
                    <td>DNBS-07</td>
                    <td>ARCs</td>
                    <td>This return is to check the financial parameters and different operational details such as assets acquired, their acquisition cost and their recovery status etc</td>
                    <td>15th of every quarter’s last month</td>
                </tr>
                <tr>
                    <td>DNBS-08</td>
                    <td>NBFCs-D & NBFCs-NDSI and NBFC Factors</td>
                    <td>The purpose of this return is to report credits, having an aggregate exposure greater than 5 crores to a single borrower.</td>
                    <td>21st of every quarter’s last month</td>
                </tr>
                <tr>
                    <td>DNBS-11</td>
                    <td>NBFC-CICs</td>
                    <td>This return captures financial information such as Assets and Liabilities, P&L accounts, exposure to sensitive sectors etc.</td>
                    <td>15th of every quarter’s last month</td>
                </tr>
                <tr>
                    <td>DNBS-12</td>
                    <td>NBFC-CICs</td>
                    <td>This return checks the compliance with prudential norms set by RBI.</td>
                    <td>15th of every quarter’s last month</td>
                </tr>
                <tr>
                    <td>DNBS-13</td>
                    <td>All NBFCs</td>
                    <td>This return is for capturing information on Foreign Investment</td>
                    <td>15th of every quarter’s last month</td>
                </tr>
                <tr>
                    <td>DNBS-14</td>
                    <td>NBFC-P2Ps</td>
                    <td>This return captures financial information such as Assets and Liabilities, P&L accounts, compliance with prudential norms etc.</td>
                    <td>15th of every quarter’s last month</td>
                </tr>
                <tr>
                    <th colSpan={4}>Monthly Compliances</th>
                </tr>
                <tr>
                    <td>DNBS-04B</td>
                    <td>NBFCs-NDSI and NBFCs-D</td>
                    <td>The details of the expected future cash inflows & outflows are captured through this return to check the possibility of a mismatch.</td>
                    <td>Within 10 days from the end of every month.</td>
                </tr>
                <tr>
                    <td>NESL Reporting</td>
                    <td>All NBFCs</td>
                    <td>All NBFCs are required to mandatorily report their Financial Debts to NESL</td>
                    <td>Within 1 week from the date of the succeeding month.</td>
                </tr>
                <tr>
                    <td>CTC Reporting</td>
                    <td>All NBFCs</td>
                    <td>All NBFCs are required to mandatorily report their loans to all 4 CICs</td>
                    <td>On & before the 10th day of the succeeding month.</td>
                </tr>
                <tr>
                    <th colSpan={4}>Event-Based Compliances</th>
                </tr>
                <tr>
                    <td>DIR-12 & MGT-14</td>
                    <td>All NBFCs</td>
                    <td>Change/Appointment  of Director</td>
                    <td>Within 30 days from the change of director and passing of resolution respectively.</td>
                </tr>
                <tr>
                    <td>INC-22</td>
                    <td>All NBFCs</td>
                    <td>Change of Registered Office</td>
                    <td>Within 30 days</td>
                </tr>
                <tr>
                    <td>SH-7 & MGT-14</td>
                    <td>All NBFCs</td>
                    <td>Change in Capital Structure</td>
                    <td>Within 30 days</td>
                </tr>
                <tr>
                    <td>Report to RBI and other authorities or Approval as the case may be</td>
                    <td>All NBFCs</td>
                    <td>Foreign Direct Investment</td>
                    <td>Depending on the Foreign Trade Policy, some sectors are allowed to have 100% FDI and some sectors are not even allowed to have FDI, so accordingly NBFCs need to comply.</td>
                </tr>
            </table>
        </div>
    )
}

export default ListOfEssential