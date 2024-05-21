import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>As per Section 29 of the Trademarks Act, trademark infringement with respect to registered trademarks simply means violating the exclusive rights attached to a trademark i.e. usage of the mark without the permission of the registered owner or licensees on/with some other products in order to deceive the general public or creates confusion with the registered mark. Such unauthorised usage may lead to financial and reputation losses.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Trademark Infringement in India</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>What Constitutes Trademark Infringement?</li>
                            </a>
                            <a href="#CapitalRequirement" className="scrollTo">
                                <li>What does not Constitute Trademark Infringement? </li>
                            </a>
                            <a href="#Remedies" className="scrollTo">
                                <li>What Remedies are Available Against the Infringer?</li>
                            </a>
                            <a href="#passingoff" className="scrollTo">
                                <li>What is Passing Off ?</li>
                            </a>
                            
                            <a href="#Difference" className="scrollTo">
                                <li>What is the Difference b/w Infringement and Passing Off?</li>
                            </a>
                            
                            <a href="#Limitation" className="scrollTo">
                                <li>What is the Limitation Period for Filling the Suit?</li>
                            </a>
                            <a href="#TrademarkCase" className="scrollTo">
                                <li>Documents Required for Filing Trademark Infringement Case</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Procedure for Filing Trademark Infringement Suit</li>
                            </a>
                            <a href="#Pricing" className="scrollTo">
                                <li>Pricing for Institution of the Suit</li>
                            </a>
                            
                            
                            
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How does Register Karo help ?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                           

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Trademark Infringement</p>
                <div>
                    <Image alt="As per Section 29 of the Trademarks Act, trademark infringement with respect to registered trademarks simply means violating the exclusive rights attached to a trademark  " className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}