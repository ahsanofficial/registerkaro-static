import certificate from '../../../assets/images/static/consent to establish/Vector Smart Object2 280.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The Pollution Control Board has been established as a regulatory authority for implementing various pollution control laws. Industries shall get permission to set up and run their operations according to the Water (Prevention and Control of Pollution) Act, 1974, and the Air (Prevention and Control of Pollution) Act, 1981.
Prior consent is mandatory for setting up any industrial plant or process that might discharge sewage or trade effluent, 
An application for this consent must be submitted in the prescribed form with the required details and fees.
</p>

                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>What is Consent to Establish?</li>
                            </a>
                            <a href="#WhyReg" className="scrollTo">
                                <li>Things to know about Consent to Establish (CFE)</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents Required for Consent to Establish (CFE)Application:</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Procedure for Consent To Establish</li>
                            </a>
                            <a href="#advantage" className="scrollTo">
                                <li>Advantages of Consent to Establish (NOC):</li>
                            </a>
                            <a href="#Consent" className="scrollTo">
                                <li>Consent to Establish a validity period shall be as follows: </li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro Can Assist You in the Franchise Agreement Process?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Conset-to-Establish</p>
                <div>
                    <Image alt="regulatory authority for implementing various pollution control laws," className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}