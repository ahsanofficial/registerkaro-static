import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'


export const MandatoryCompilance = () => {

  return (
    <div id='MandatoryCompilance'>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
      <div className='flex-6'>
          <p><strong>Essential Surveillance Component:</strong> Market surveillance plays a pivotal role in the BIS CRS Certification Scheme, serving as a crucial mechanism to assess the quality of products available in the market. This robust surveillance framework is instrumental in verifying the adherence of certified products to the applicable standards. Moreover, these surveillance activities serve as valuable inputs, offering opportunities for enhancement to manufacturers.</p>
          <p><strong>Initiation of Market Surveillance:</strong> BIS is currently in the process of initiating market surveillance, following the provisions outlined in sub-para 6 of para 3 of Scheme II of Schedule II BIS (Conformity Assessment) Regulations, 2018.</p>
          <p><strong>Licensee Obligations and Surveillance Cost:</strong> As per the conditions stipulated in Regulation 6 of BIS (Conformity Assessment Regulations), 2018, all licensees are mandated to furnish details of their distributors, retailers, consignees, or dealers. Furthermore, licensees bear the responsibility of covering the surveillance costs. To facilitate effective surveillance, licensees are required to deposit the specified surveillance cost.</p>
          <p><strong>Staged Implementation of Surveillance:</strong> The implementation of market surveillance is planned in stages. Letters or emails are being dispatched to licensees, urging them to provide necessary details and deposit fees with BIS.</p>
          <p><strong>Development of Online System:</strong> A systematic online system is currently under development for the submission of consignee information and online fee deposits. Until the online system is operational, details may be submitted via email, and fees may be remitted through DD or Demand Draft.</p>
          <p><strong>Timely Submission Requirements:</strong> Licensees are requested to submit information regarding distributors, dealers, consignees, or retailers via email, adhering to the specified format. It is imperative to deposit the surveillance cost within 10 days and 15 days, respectively, upon the receipt of the email or letter by DD.</p>
          <p><strong>Consequences of Non-Compliance:</strong> Failure to submit details and deposit fees within the stipulated timeframe will be considered a violation of the conditions of BIS CRS Certification or the License to apply or use the BIS CRS Standard Mark. Subsequent actions, including suspension or cancellation of the license, may be initiated in accordance with the provisions outlined in BIS (Conformity Assessment) Regulations, 2018.</p>
      </div>
      <div className='flex-4 mt-2'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={750} loading="lazy" src={bft} />
      </div>
      </div>
    </div>
  )
  
}
