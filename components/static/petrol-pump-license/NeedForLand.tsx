import dft from "../../../assets/images/static/petrol-pump-license/needForLand.svg";
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}
export const NeedForLand = ({ cityName }: HeroProps) => {
    return (
        <div id="NeedForLand">
            
            <div className='needForLand flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Need for Land to Begin a Petrol Pump"
                            className="Importance-img-h-100 w-100"
                            height={600}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p>Upon fulfilling these fundamental prerequisites, the candidate may effectively submit an application for a gas station dealership. To select the best candidate to open a gas station in the designated area, there is a subsequent stage that entails a drawing or bidding procedure. To find out where you can start a gas station, look for ads in the newspaper and check the Petrol Pump Dealership Chayan website often.</p>
                    <p>The area must, as a minimum, fit within the range of 800 to 2000 square meters in terms of land requirements. On the other hand, one should search for the minimal land requirements that the Oil Marketing Company posts for different areas. The locations of sanctioned land listed in the advertisements may differ, thus it is up to the individual to make sure their land satisfies the criteria.</p>
                    <p>One may either own or lease the land. However, ensure that the leasing duration is registered in accordance with the oil dealership's agreement. First and foremost, the land needs to be conveniently accessible. In addition, the land needs to be leveled and developed. For the purpose of the verification procedure, all of the land's legal documentation must be in order.</p>
                    <p>That's all there was to it when it came to obtaining a license to open a gas station dealership in {cityName}. Please ask any queries you may have below.</p>
                </div>
            </div>
        </div>
    )
}