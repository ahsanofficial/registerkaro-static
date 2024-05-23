import certificate from '../../../assets/images/static/payment-gateway-licence/What is a payment gateway licence_.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Payment Gateway licences are legal authorisations that are granted, by regulatory bodies like the Reserve Bank of { cityName }.  The statute governing regarding the issuance and rules of the lisence is  Payment and Settlement Act. The regulations are tightened by RBI to ensure that there is financial stability, ensuring  consumer protection, as well trust of the common public in doing transactions digitally. The payment permission under this licence can be done from debit, credit card as well as in the form on Internet Banking.
There are multiple benefits and steps involved in acquiring various types of payment gateway licences which we will be discussing in detail. 
</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Benefits</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Procedure</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents Required</li>
                            </a>
                            <a href="#CapitalRequirement" className="scrollTo">
                                <li>Capital Requirements for licence</li>
                            </a>
                            
                            
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How does Register Karo help ?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                           

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">What is a payment gateway licence?</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="What is a payment gateway licence?" className="certificate h-100 w-80" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}