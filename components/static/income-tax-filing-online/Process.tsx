import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Income tax filing involves the online submission of your Income Tax Return (ITR) to governmental tax authorities in a specified digital format. This method offers a more secure, straightforward, and expeditious alternative compared to the traditional approach of physically visiting the Income Tax Office for filing returns. In accordance with the prevailing income tax regulations in India, e-filing has become obligatory for the majority of taxpayers, marking a shift from the previous paper-based ITR filing system. Not only is e-filing a mandated practice, but it also enhances safety, simplifies the process, and expedites the overall filing experience.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Different Types of ITR Forms in India</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of filing ITR Online in India</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Eligibility criteria for Income Tax Filing Online</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents required for ITR filing online</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for filing Income Tax Online</li>
                            </a>
                            <a href="#Penalty" className="scrollTo">
                                <li>Penalty for late income tax filing</li>
                            </a>
                            
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Company Registration in United Kingdom</p>
                <div>
                    <Image alt="An Overview of Company Registration in United Kingdom" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}