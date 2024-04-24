import certificate from '../../../assets/images/pvt-reg/benefit.svg'
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>An environmental audit is a processed, systematic and continuous assessment of the activities of an organisation to assess their impact on the environment as well as their performance environmental impact and performance in the conduct of their business. An environmental audit determines if a company has complied with the environmental law and met the environmental objective. Doing the environmental audit can improve the image of the company in the public eye and it might impress investors in case the company is trying to attract investors. The Government makes this compliance compulsory through international agreements. The body who is in charge of the auditing , which comes under the Supreme Audit Institution(SAI) is the Comproler and Auditor General(CAG) of India.The audit carried out by CAG falls under the three categories like: financial, compliance and performance audits.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Purpose of Environmental Audit</li>
                            </a>
                            <a href="#WhyReg" className="scrollTo">
                                <li>Areas of Environmental Audit</li>
                            </a>
                            <a href="#processenvironment" className="scrollTo">
                                <li>Process of Environmental Audit</li>
                            </a>
                            <a href="#phases" className="scrollTo">
                                <li>Phases</li>
                            </a>
                            <a href="#benifits" className="scrollTo">
                                <li>Benefits of Environmental Audit</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How does Register Karo Help ?</li>
                            </a>
                            
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                {/* <p className="small-heading text-center">Company Registration in Dubai</p> */}
                <div>
                    <Image alt="environment auditing" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}