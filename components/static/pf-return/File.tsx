
import Image from 'next/image'
import { useState } from 'react'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps {
    cityName: string;
}

export const File = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='File'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>You may follow the given step-by-step instructions to file your PF Return</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1:  Login into Portal</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Download the form</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Enter details</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Save the file</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Upload the File</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: TRN Generation & payment</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1:  Login into Portal</h3>
            <p className='mb-0'>After registering successfully for the Unified Shram Suvidha Portal, use the login credentials that were supplied to your email address to access the EPFO portal.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Download the form</h3>
            <p className='mb-0'>Go to Payment and select “ECR/Return Filing” by clicking. Next, select the pay month for which you wish to file a PF return, click on “ECR Upload,” then select “Download ECR File,” “ECR File Download,” and “ECR File Type.” You will obtain an ECR file with the list of employees compared to their UAN.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Enter details</h3>
            <p className='mb-0'> Now enter details such as Gross wages which includes EPF Wages, EPS Wages, EDLI wages, remitted EPF Contribution, etc.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Save the file</h3>
            <p className='mb-0'>Save the Excel file as a CSV file after that. Ensure that the first column with the details is deleted. Now, open the CSV file and eliminate any unnecessary commas. After that, save the file as a text document and replace all of the commas (,) that separate two fields with #~#.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Upload the File</h3>
            <p className='mb-0'>After logging in, navigate to Payments  ECR Filing  ECR Upload on the EPFO Portal. After choosing the wage month to file the return for and providing the other necessary information, upload the text file.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: TRN Generation & payment</h3>
            <p className='mb-0'>A Temporary Return Reference Number (TRRN) will thereafter be generated once the uploaded ECR has been verified. Additionally, select “Prepare Challan” and enter the appropriate EDLI and EPF costs. Include the number of workers, the number of workers who are excluded, and the workers’ salaries. Click “Generate Challan”  “Finalize” now, and then click “Pay” to complete the payment.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}




