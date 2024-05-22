
import dft from "../../../assets/images/static/spice-board-registration/one.svg";

import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const WhyBeneficial = ({ cityName }: HeroProps) => {
    return (
        <div id="WhyBeneficial">
            <div className='whyBeneficial flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Why it’s Beneficial?"
                            className="WhyBeneficial-img w-100 Importance-img-h-100"
                            height={575}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p>Promoting the cultivation and overseas sale of organic spices. Enabling infrastructure for processing and enhancing value. Registration and licensing required for all individuals exporting spices. Support for studying and researching ways to enhance processing practices, quality management systems, grading methods, and packaging techniques. Creation of advertising and informative content using different mediums to assist exporters and importers.</p>
                    <p>Assists exporters and importers in making connections with each other. Finds reliable suppliers to meet the specific needs of importers. Sends trade inquiries from foreign countries to trusted exporters. Facilitates networking between Indian exporters and global buyers by coordinating their presence at key international trade events and gatherings. Review complaints from importers to implement corrective and preventive measures.</p>
                    <p>Leads the program aimed at enhancing the quality of Indian spices. Oversees a thorough and current database for companies involved in exporting and importing. Facilitates communication among global organizations, exporters, and government officials via contact group initiatives. Showcases {cityName} at prominent global food events; hosts food expos and cooking workshops to create awareness.</p>
                </div>
            </div>
        </div>
    )
}