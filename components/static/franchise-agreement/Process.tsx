import certificate from '../../../assets/images/static/qatar-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The franchise agreement typically includes provisions such as the grant of franchise rights, territorial rights, franchisee's development obligations, initial and ongoing training, operating procedures, initial and ongoing fees, marketing fees and obligations, restrictive covenants, and legal rights. A franchise agreement is a legally binding contract between a franchisor and a franchisee that includes the rights and obligations of both parties in the franchise relationship. It provides the legal rights to the franchisee to establish and operate a franchised business and then a franchisee undertakes the obligation to operate the business following the franchisor's systems and procedures.</p>
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