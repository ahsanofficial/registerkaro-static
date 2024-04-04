import certificate from '../../../assets/images/static/types-of-companies/Types of Companies.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The vibrant economic landscape of India is home to a wide diversity of businesses, each with its structure, purpose, and regulations. Understanding the various sorts of companies in India is critical for both entrepreneurs and investors. In this blog, we will look at the several types of companies that exist in India, including their characteristics, formation, and regulatory requirements.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Understanding" className="scrollTo">
                                <li>Understanding Companies</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Different Types of Companies in India</li>
                            </a>
                            <a href="#Conclusion" className="scrollTo">
                                <li>Conclusion</li>
                            </a>
                           
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Different Types of Companies</p>
                <div className='d-flex align-center justify-content-center'>
                    <Image alt="Different Types of Companies" className="certificate h-50 w-50" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}