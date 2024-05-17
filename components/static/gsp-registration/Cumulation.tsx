import dft from "../../../assets/images/static/gsp-registration/two.svg";
import Image from 'next/image';

export const Cumulation = () => {
    return (
        <div id="Cumulation">
            <div className='cumulation flex w-80 m-auto mobile-flex-column'>
                <div className='flex-3'>
                    <div>
                        <Image
                            alt="Cumulation"
                            className="Importance-img-h-100 w-100"
                            height={220}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p><strong>1. </strong>Bilateral cumulation</p>
                    <p><strong>2. </strong>Regional cumulation</p>
                    <p><strong>3. </strong>Extended cumulation</p>
                    <p><strong>4. </strong>Cumulation with goods originating in Norway, Switzerland, and Turkey</p>
                    <p>Neither diagonal cumulation nor full cumulation is permitted</p>
                </div>
                
            </div>
            
        </div>
    )
}