import bft from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const WhatisPBL = () => {
    return (
        <div id="WhatisPBL">
            <div className='WhatisPBL flex w-80 m-auto mobile-flex-column'>
                <div className='flex-3'>
                    <Image
                        alt="What is a Payment Bank Licence?"
                        className="WhatisPBL-img w-100 Importance-img-h-100"
                        height={125}
                        loading="lazy"
                        src={bft}
                    />
                </div>
                <div className="flex-7">
                    <p>Payment Bank License is a mandatory requirement to open a Payment Bank in India.  The applicant needs to fulfil the eligibility criteria before applying for the license. The Reserve Bank of India has the authority to issue the Payment Bank License as per section 22 of the Banking Regulation Act, 1949.</p>
                </div>
            </div>
        </div>
    )
}