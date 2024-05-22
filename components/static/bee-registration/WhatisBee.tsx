import dft from "../../../assets/images/static/bee-registration/What is BEE Certification_.svg";
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const WhatisBee = ({ cityName }: HeroProps) => {
    return (
        <div id="WhatisBee">
            
            <div className='whatisBee flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="What is BEE Certification?"
                            className="WhatisBee-img w-100 Importance-img-h-100"
                            height={300}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p>To assist consumers in making knowledgeable decisions about energy conservation, the BEE requires star ratings and labels for certain products. The goals of BEE are to spearhead sector-wide energy efficiency initiatives, establish national delivery methods, and institutionalize energy efficiency programs.</p>
                    <p>To obtain a star rating that indicates the degree of energy savings in a product, manufacturers, importers, and merchants of electrical appliances are needed to register, submit to BEE-mandated testing, and provide the necessary documents.</p>
                </div>
            </div>
        </div>
    )
}