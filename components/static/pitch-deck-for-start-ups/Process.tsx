import certificate from '../../../assets/images/static/pitch-deck-for-start-ups/What is a Pitch Deck_.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-6'>
                <p className='text-justify'>These are documents that business owners, prepare to present their start-up visually, all the important details that are related to the business to communicate about their business to pitch for investors or to pitch for partnership. Information that is contained in the pitch deck includes- a business plan, financial projection, target market for the business and the vision for the start-up</p>
                <p className='text-justify'>How a pitch deck is different from a presentation is on the point of preparing it. A presentation is prepared to provide specific information to a particular group of people or an audience whereas a pitch deck is prepared to generate interest in the business, educating just about things related to the business nothing outside of the business.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                          
                            <a href="#WhyDo" className="scrollTo">
                             <li>Why do you need a pitch deck</li>
                            </a>
                            <a href="#Elements" className="scrollTo">
                             <li>Elements</li>
                            </a>
                            <a href="#HowPrepare" className="scrollTo">
                             <li>How to prepare a pitch deck</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How does Register Karo help</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-4'>
                <p className="small-heading text-center">Pitch Deck for Start-ups</p>
                <div>
                    <Image alt="What is a Pitch Deck?" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}