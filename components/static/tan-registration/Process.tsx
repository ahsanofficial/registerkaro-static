import certificate from '../../../assets/images/static/tan-registration/certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Under Section 203A of the Income Tax Act of 1961, a person is required to register for TAN Registration if they are responsible for collecting or deducting taxes at source on behalf of the government. We'll talk more about online and offline TAN registration options later. The Income Tax Department issues a 10-digit designated number known as the Tax Deduction Account Number or Tax Collection Account Number. This number is made up of both letters and numbers and indicates the TAN jurisdiction code as well as the category of the TAN number holder, such as an individual, an organization, or any other entity.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                        
                            <a href="#Types" className="scrollTo">
                                <li>TAN: What is it?</li>
                            </a>
                            <a href="#WhyReg" className="scrollTo">
                                <li>TAN Number: Meaning and Configuration:</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Who Needs to Get a TAN?</li>
                            </a>
                            <a href="#managing" className="scrollTo">
                                <li>The importance of Obtaining a TAN Number:</li>
                            </a>
                            <a href="#processcompany" className="scrollTo">
                                <li>TAN Registration:</li>
                            </a>

                             <a href="#publiclimited" className="scrollTo">
                                <li>Characteristics of TAN Registration:</li>
                            </a>


                            <a href="#appointment" className="scrollTo">
                                <li>Benefits of TAN Registration:</li>
                            </a>
                            
                            <a href="#Registration" className="scrollTo">
                                <li>Documents Required for TAN Registration: </li>
                            </a>
                            <a href="#Apply" className="scrollTo">
                                <li>Process to apply for TAN Registration: </li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro Can Assist You in the Franchise Agreement Process</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">TAN Registration</p>
                <div>
                    <Image alt="Overview of TAN Registration:"className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}