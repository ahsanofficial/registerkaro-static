import React from 'react'

interface HeroProps {
    cityName: string;
}

export const TableCom = ({ cityName }: HeroProps) => {
    return (
        <div id='table'>
            {/* <p className='main-para'>Certain requirements are outlined in the Companies Act of 2013 and must be satisfied by the deadlines specified. These rules promote transparency and good governance while protecting the interests of all parties concerned, including the ROC, shareholders, directors, investors, and tax authorities. These compliances are classified as annual compliances, recurring compliances, one-time post-incorporation compliances, and event-based compliances. The first category of one-time compliances has already been thoroughly discussed.</p>
            <p className='main-para'><strong>Compliance</strong></p>
            <p className='main-para'>A one-person company must immediately comply with particular legal requirements established in the Companies Act of 2013 and, if necessary, secure local registrations in accordance with the state legislation of the state in which the One Person Company is conducting business. The full list of compliances, together with their timeframes, is shown below. Contact one of our startup advisors for more in-depth conversations.</p> */}
            <table>
                <tr>
                    <th className='first'>SI.NO.</th>
                    <th >Membership category</th>
                    <th >Existing membership fee</th>
                    <th className='last'>Revised membership fee/offer fees</th>
                </tr>
                <tr>
                    <td>1.</td>
                    <td>Individual Ordinary Members<br/>(Proprietorship/partnership)</td>
                    <td>RS. 7,500 as annual <br/>membership fee + RS.1350 <br/>(GST 18%)<br/>
                     Rs.5,000 as one-time admission fee + Rs.900<br/>(GST 18%)
                    <br/> <strong>= Total RS. 14,750/-</strong> </td>

                    <td>Rs.7,500 as annual<br/> membership fee + Rs.1350(GST 18%)<br/><strong>= Total Rs. 8850/-</strong></td>
                </tr>
                <tr>
                <td>2.</td>
                    <td>Institutional/ corporate Members (All Pvt.  ltd.<br/> Public Limted Companies, Association,Institutions<br/> etc.)</td>
                    <td>RS.20,000 as annual <br/>membership fee + RS.3600 <br/>(GST 18%)<br/>Rs.15,000 as one-time admission fee + Rs.2700<br/>(GST 18%)
                    <br/> <strong>= Total RS.41,300/-</strong></td>

                    <td>Rs.20,000 as annual<br/> membership fee + Rs.3600(GST 18%)<br/><strong>= Total Rs.23600/-</strong></td>
                </tr>
                
              
            </table>
        </div>
    )
}
