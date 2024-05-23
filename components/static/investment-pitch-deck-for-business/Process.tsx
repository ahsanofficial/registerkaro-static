import certificate from '../../../assets/images/static/qatar-company-registration/certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-6'>
                <p className='text-justify'>You recognize the potential market for your idea and believe you possess the necessary skills to make it a reality. However, convincing investors of the worth of your idea and expertise can feel daunting.</p>
                <p className='text-justify'>This presentation for investors was created to demonstrate why your idea is the most promising one among all others. Utilize it to outline the issue your company addresses, your income strategy, their contribution, and a financial analysis of its allocation. It is simple to personalize it to align with your brand and work together on the presentation with your team in real time.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                          
                            <a href="#InvestorDeck" className="scrollTo">
                             <li>Investor Deck vs Pitch Deck</li>
                            </a>
                            <a href="#HowDeck" className="scrollTo">
                             <li>How to create a Pitch Deck</li>
                            </a>
                            <a href="#MoreFacts" className="scrollTo">
                             <li>More Facts About Investment Pitch Deck</li>
                            </a>
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
            <div className='flex-4'>
                <p className="small-heading text-center">Investment Pitch Deck for Business</p>
                <div>
                    <Image alt="Investment Pitch Deck for Business" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}