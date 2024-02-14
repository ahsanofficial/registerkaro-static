import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/fssai/DocsRequire.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocRequiredBIS = () => {
  return (
    <div >
        
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='DocRequiredBIS'>
      <div className='flex-7'>
        <p>The following essential documents are imperative for BIS FMCS Certification  and should be available with the applicant before initiating the project:</p>
           <h3>Factory or Company Registration Documents:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Documentation validating the registration of the factory or company.</li>
          </ul> 
          <h3>Flow Chart of Manufacturing Process:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A comprehensive flow chart outlining the manufacturing process.</li>
          </ul> 
          <h3>Business License & ISO Certificate:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Business license and ISO certificate, with mandatory English translations if originally in another language.</li>
          </ul> 
          <h3>Test Reports as per Indian Standards:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Reports documenting tests conducted in accordance with Indian Standards.</li>
          </ul> 
          <h3>Nomination:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Nomination details pertaining to the project.</li>
          </ul> 
          <h3>Declaration & Undertaking:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Official declarations and undertakings relevant to the certification process.</li>
          </ul> 
          <h3>Product or Component Drawings (If Applicable):</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Drawings illustrating the product or its components, if applicable.</li>
          </ul> 
          <h3>List of Raw Materials & Raw Material Test Certificates:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A detailed list of raw materials accompanied by test certificates for each.</li>
          </ul> 
          <h3>Information on Other Certificates for Factory System (If Applicable):</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details regarding any other certificates relevant to the factory system.</li>
          </ul> 
          <h3>List of Raw Materials & Raw Material Test Certificates (Duplicate Entry):</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Reiteration of the list of raw materials and accompanying test certificates.</li>
          </ul> 
          <h3>Information on Test Equipment & Test Equipment Calibration Certificates:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A comprehensive list containing information on test equipment along with calibration certificates.</li>
          </ul>
          <p>Ensuring the availability and accuracy of these documents is crucial for a seamless initiation of the BIS FMCS Certification process.</p>
      </div>
      <div className='flex justify-content-center' id='DocsREquired'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={682} loading="lazy" src={dft} />
      </div>
      </div>
    </div>
  )
}