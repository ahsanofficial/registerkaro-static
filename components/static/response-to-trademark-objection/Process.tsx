import certificate from '../../../assets/images/static/qatar-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In India, trademarks are crucial for businesses, yet obtaining them can be complex. Each year, numerous applications face rejection due to potential conflicts with existing trademarks. Examiners meticulously review applications against registered trademark databases to pinpoint identical or potentially confusing marks. They then compile their findings and rationale for objection in a trademark examination report. This rigorous process serves to protect existing trademarks and maintain clarity for consumers, ultimately preventing confusion in the marketplace.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                             <li>Benefits of starting a Business in Qatar</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                             <li>Types of companies for Company Registration in Qatar</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                             <li>Company registration Process in Qatar</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>Why Choose RegisterKaro for Company Registration in Qatar?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Company Registration in Qatar</p>
                <div>
                    <Image alt="An Overview of Company Registration in Qatar" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}