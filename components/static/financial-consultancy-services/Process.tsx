import certificate from '../../../assets/images/static/qatar-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The term "financial consultant" is outdated and has mostly been substituted with the term "financial advisor." Financial consultants can be employed by a company or work independently, serving either businesses or individuals. Briefly put, financial advisors provide custom guidance to assist investors in growing their finances. They might provide financial planning services, recommend appropriate investments, and assist with insurance choices. </p>
                <p className='text-justify'>They frequently oversee the purchasing and selling of investments, such as stocks and bonds, on behalf of their clients. Some individuals may additionally market financial products. Typically, a financial advisor will meet with clients to evaluate their financial status prior to providing any suggestions. Whenever a client undergoes a significant life event (such as getting married, changing jobs, or retiring), they will probably ask for another meeting. Consultants dedicate time to promoting their businesses as well. They frequently journey and conduct tasks after regular business hours in order to cater to their clients' availability.</p>
                
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro helps you in the Registration process?</li>
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
                <p className="small-heading text-center">Financial Consultancy Services</p>
                <div>
                    <Image alt="Financial Consultancy Services" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}