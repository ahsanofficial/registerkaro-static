import bft from '../../../assets/images/static/payment-bank-license/What is a Payment Bank Licence_.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const WhatisPBL = ({ cityName }: HeroProps) => {
    return (
        <div id="WhatisPBL">
            <div className='WhatisPBL flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <Image
                        alt="What is a Payment Bank Licence?"
                        className="WhatisPBL-img w-100 Importance-img-h-100"
                        height={150}
                        loading="lazy"
                        src={bft}
                    />
                </div>
                <div className="flex-5">
                    <p>Payment Bank License is a mandatory requirement to open a Payment Bank in {cityName}.  The applicant needs to fulfil the eligibility criteria before applying for the license. The Reserve Bank of India has the authority to issue the Payment Bank License as per section 22 of the Banking Regulation Act, 1949.</p>
                </div>
            </div>
        </div>
    )
}