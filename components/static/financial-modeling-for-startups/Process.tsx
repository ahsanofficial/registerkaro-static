import certificate from '../../../assets/images/static/qatar-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Financial modeling for startups in India is a critical aspect of business planning, helping entrepreneurs make informed decisions, attract investors, and steer the company toward growth and profitability. It involves creating a comprehensive representation of a company’s financial performance using various assumptions, projections, and valuation techniques.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                           
                            <a href="#Importance" className="scrollTo">
                             <li>Importance of Financial Modeling for Businesses in India</li>
                            </a>
                            <a href="#Components" className="scrollTo">
                             <li>Components of Financial Modeling for Businesses</li>
                            </a>
                            <a href="#KeyChallanges" className="scrollTo">
                             <li>Key Challenges in Financial Modeling</li>
                            </a>
                            <a href="#BestPractices" className="scrollTo">
                             <li>Best Practices in Financial Modeling for Businesses in India</li>
                            </a>
                            <a href="#ImportantPoint" className="scrollTo">
                             <li>Important Points to Make a Financial Model</li>
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
                <p className="small-heading text-center ">Financial Modeling for Startups</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="An Overview of Company Registration in Qatar" className="certificate h-50 w-50" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}