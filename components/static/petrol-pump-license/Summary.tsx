import dft from "../../../assets/images/static/petrol-pump-license/pre-incorporation.svg";
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}
export const Summary = ({ cityName }: HeroProps) => {
    return (
        <div id="Summary">
            
            <div className='summary flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="In summary"
                            className="Importance-img-h-100 w-100"
                            height={240}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p>It was determined that Oil Marketing Companies place advertisements in newspapers or on their official website to establish gas stations at various points throughout the nation. An application for the post of Franchisee of Retail Outlet is available on the official portals of numerous oil companies, such as Essar Group, IOC, Hindustan Petroleum, etc. A lottery system is used to choose the candidate if the Oil Marketing Company receives a large number of applications. The chosen candidate must provide the oil firm with the relevant paperwork within the time frame that the company specifies.</p>
                </div>
            </div>
        </div>
    )
}