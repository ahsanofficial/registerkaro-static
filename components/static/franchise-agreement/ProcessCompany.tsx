
import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import eight from '../../../assets/images/pvt-reg/HowToRegister/eight.svg'
import eleven from '../../../assets/images/pvt-reg/HowToRegister/eleven.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import nine from '../../../assets/images/pvt-reg/HowToRegister/nine.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import ten from '../../../assets/images/pvt-reg/HowToRegister/ten.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'

interface HeroProps {
  cityName: string;
}

export const ProcessCompany = ({ cityName }: HeroProps) => {
    const [active, setActive] = useState('1')
  
    const handleActive = (id: string) => {
      setActive(id)
    }
  
    return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessCompany'>
      <p className="main-para">To draft a franchise agreement effectively, there should be a structured approach that includes several key steps:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1 - Understand the Franchise System:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2 -Define Terms Carefully:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3 - Include Legal Information:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4 - Incorporate Non-compete and Non-disclosure Provisions:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5 - Describe Relationship and Responsibilities:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6 - Intellectual Property Rights (IPR):</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7 - Describe Training & Support:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 8 - Assign Royalties and Fees:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={nine} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 9 - Ensure Compliance with Regulations:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('10')} className={`btn flex ${active === '10' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={ten} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 10 - Include Termination and Renewal Clauses:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('11')} className={`btn flex ${active === '11' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eleven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 11 - Define Exit Strategies:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1 - Understand the Franchise System:</h3>
            <p className='mb-0 pt-2'> It is crucial to comprehend the franchisor's business model, standards, procedures, and training programs before drafting the agreement.</p>
            
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2 -Define Terms Carefully:</h3>
            <p className='mb-0 pt-2'> While drafting a Franchise Agreement essential terms like franchise territory, fees, royalties, and the term within the agreement must be defined clearly.</p>
            
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3 - Include Legal Information:</h3>
            <p className='mb-0 pt-2'> The Franchise Agreement must include all necessary legal details such as parties' names, governing law, dispute resolution mechanisms, and other legal sub-clauses.</p>
            
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4 - Incorporate Non-compete and Non-disclosure Provisions:</h3>
            <p className='mb-0 pt-2'> Incorporating non-compete and non-disclosure clauses helps to protect the franchisor's trade secrets by including provisions that prevent the franchisee from competing or disclosing confidential information.</p>
            
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5 - Describe Relationship and Responsibilities:</h3>
            <p className='mb-0 pt-2'> Outline the roles and responsibilities of both parties, including standards to maintain and support provided by the franchisor.</p>
            
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6 - Intellectual Property Rights (IPR):</h3>
            <p className='mb-0 pt-2'> Details clauses related to IP rights must be included to Specify the access to trademarks, logos, and trade secrets that the franchisee will have.</p>
            
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7 - Describe Training & Support:</h3>
            <p className='mb-0 pt-2'> The training programs and support plan must be described so that the franchisor will provide to ensure operational success.</p>
            
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>Step 8 - Assign Royalties and Fees:</h3>
            <p className='mb-0 pt-2'> This clause shall mention determining the percentage of gross sales paid as royalties, specify all fees associated with the agreement, and outline payment schedules.</p>
            
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>Step 9 - Ensure Compliance with Regulations:</h3>
            <p className='mb-0 pt-2'> Before agreeing research local regulations applicable to franchise agreements and draft clauses to meet compliance requirements.</p>
            
          </div>
          <div className={`${active === '10' ? 'active' : 'none'}`}>
            <h3>Step 10 - Include Termination and Renewal Clauses:</h3>
            <p className='mb-0 pt-2'> This clause shall include the details of circumstances for termination or renewal of the agreement, including any arbitration clauses if needed.</p>
            
          </div>
          <div className={`${active === '11' ? 'active' : 'none'}`}>
            <h3>Step 11 - Define Exit Strategies:</h3>
            <p className='mb-0 pt-2'> Exit strategies shall be included and Incorporate provisions for terminating early, transferring ownership, or selling back the franchise.</p>
            
          </div>
       
        </div>
        
      </div>
      <p className="main-para pt-5">Remember that a well-drafted franchise agreement is crucial for a successful franchise relationship. It should be fair, balanced, comprehensive, and legally compliant to protect both parties' interests.</p>
    </div>
  )
}



