import certificate from '../../../assets/images/static//due-diligence/Vector Smart Object2 98.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Due diligence stands as a cornerstone for informed decision-making and risk mitigation in the dynamic and intricate world of corporate affairs. Due diligence is like doing your homework or re-checking before you agree to something or do something important in business. It's about taking proactive measures and making sure you know what you're getting into, just like you would before signing a contract or making a big decision.</p>
                <p className='text-justify'>Due diligence can be a legal obligation and it may also offer a defense against legal action. A common illustration of due diligence is the process through which a potential acquirer evaluates a target company or its assets before a merger or acquisition. Due diligence helps decision-making by ensuring that this information is systematically used to deliberate on the decision at hand and all its costs, benefits, and risks. By adhering to best practices and leveraging multidisciplinary expertise, stakeholders can navigate complex transactions with confidence and integrity.</p>

                <div className='page-point'>
                    <ul>
                        <ul>
                            
                            <a href="#WhatisDueDiligence" className="scrollTo">
                             <li>What is Due Diligence?</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                             <li>Types of Due Diligence</li>
                            </a>
                            <a href="#Importance" className="scrollTo">
                             <li>Importance of Due Diligence</li>
                            </a>
                            <a href="#BestPractices" className="scrollTo">
                             <li>Best Practices to be followed for Effective Due Diligence</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How can RegisterKaro help you in the process?</li>
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
                <p className="small-heading text-center">Due diligence</p>
                <div>
                    <Image alt="Introduction to Due diligence" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}