import dft from "../../../assets/images/static/bee-registration/Why do we need a BEE Certificate_.svg";
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const WhyNeedBee = ({ cityName }: HeroProps) => {
    return (
        <div id="WhyNeedBee">
            
            <div className='whyNeedBee flex w-80 m-auto mobile-flex-column-reverse'>
                <div className="flex-7">
                    <p>Through the dissemination of pertinent information, BEE encourages energy conservation and efficiency. A product's level of performance and electricity usage must be supported by a BEE-rating certificate. Metrics for assessing a product's effectiveness and efficiency in relation to its electricity consumption are included in the certificate.</p>
                    <p>Establishing a standard for energy efficiency across all economic sectors, enabling national delivery networks, and "institutionalizing" energy efficiency services are the goals of the Bureau of Energy Efficiency. Reducing the economy's energy intensity is its main goal.</p>
                </div>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Why do we need a BEE Certificate?"
                            className="WhyNeedBee-img w-100 Importance-img-h-100"
                            height={300}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}