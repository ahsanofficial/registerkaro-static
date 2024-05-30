import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>It is a type of Investment Fund in which investors put their money in a fund where the money is invested in assets other than bonds, stocks and cash. It collects a pool of money from multiple types of investors in the fund. Further, this fund invests them in various places as specified by the Security and Exchange Board of India(SEBI), generally different from conventional investments like- debt securities and stocks. It consists of privately pooled funds invested in private equity, venture capital, and hedge funds. It acts as an investment option for many domestic and international investors, generally done by high-net-worth individuals. Investing in this requires a lot of money for investing in AIF.</p>
                <div className='page-point'>
                    <ul>
                        <ul>

                        <a href="#Types" className="scrollTo">
                             <li>Categories</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                             <li>Benefits</li>
                            </a>
                           
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Eligibility</li>
                            </a>
                            <a href="#AlternativeFunds" className="scrollTo">
                             <li>How to Register for Alternative Funds?</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How does Register Karo help?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                           

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Alternative investment fund registration</p>
                <div>
                    <Image alt="An Overview of Alternative investment fund registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}