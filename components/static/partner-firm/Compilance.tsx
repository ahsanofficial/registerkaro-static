import Image from 'next/image'
import React from 'react'
import compliance from '../../../assets/images/static/partnership-firm/compliance_after_getting_partnership_firm_reg_online_upd.svg'
interface HeroProps {  cityName: string;}
export const Compilance = ({ cityName }: HeroProps) => {
  return (

    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='Compilance'>
     
      <div className='flex-5 pt-5'>
     <p><strong>1: </strong>After the Registration, the Partners must receive PAN and TAN from the IT Department;</p>
     <p><strong>2: </strong>No matter how much you generate or lose money, a Partnership Firm in { cityName } must file an Income Tax Return;</p>
     <p><strong>3: </strong>In the case of a registered Partnership Firm, the total income will be taxed at a rate of 30%+ an additional income tax surcharge;</p>
     <p><strong>4: </strong>A Tax Audit must be performed by all Partnership Firms with yearly revenue of over Rs. 100 lakhs;</p>
     <p><strong>5: </strong>Businesses that make more than Rs. 40 lakhs in annual income must register for GST online (Rs. 20 lakhs in the case of the northeastern states). However, businesses involved in e-commerce, export-import & marketplace aggregation must register for GST to operate;</p>
     <p><strong>6: </strong>After GST Registration, the concerned firm is required to submit monthly, quarterly, and yearly GST returns. In { cityName }, Partnership Firms must also submit their quarterly TDS Returns, which must deduct tax at source as per the applicable TDS Rules & have TANs;</p>
     <p><strong>7: </strong>All Partnership Firms in { cityName } must get ESIC Registration and file an EIC Return.</p>
      </div>
      <div className='flex-5'>
          <Image alt="Compliance after getting Partnership Firm Registration Online" className="compliance-img w-100" height={600} loading="lazy" src={compliance} />
      </div>
      </div>
  )
}
