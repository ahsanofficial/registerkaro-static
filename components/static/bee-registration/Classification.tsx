import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/bee-registration/Classification of BEE Certification.svg";
import dft2 from "../../../assets/images/static/bee-registration/three.svg";

interface HeroProps {
  cityName: string;
}

export const Classification = ({ cityName }: HeroProps) => {
  return (
    <div id="Classification">
      <p className="main-para">The BEE Certification is classified under two major categories:</p>

      <div className="classification-mandatory flex w-80 m-auto mobile-flex-column">
        <div className="flex-5">
          <Image
            alt="Classification of BEE Certification"
            className="Classification-img w-100 Importance-img-h-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>     
        <div className="flex-5">
          <p><strong>For Mandatory Appliances : </strong></p>
          <p><strong>1. </strong>Frost Free Refrigerator</p>
          <p><strong>2. </strong>Stationary storage type Electric Water Heater</p>
          <p><strong>3. </strong>Color Television</p>
          <p><strong>4. </strong>Room Air Conditioner</p>
          <p><strong>5. </strong>TFL</p>
          <p><strong>6. </strong>LED Lights</p>
          <p><strong>7. </strong>Room Air Conditioner (Fixed Speed)</p>
          <p><strong>8. </strong>RAC ( Cassette, Floor standing tower, Ceiling, Corner AC)</p>
          <p><strong>9. </strong>Distribution Transformer</p>
          <p><strong>10. </strong>Direct Cool Refrigerator</p>
          <p><strong>11. </strong>Ceiling Fan</p>
          
        </div>        
      </div>
      <div className="classification-voluntary flex w-80 m-auto mobile-flex-column-reverse">        
        <div className="flex-5">
            <p><strong>For Voluntary Appliances :</strong></p>
            <p><strong>1. </strong>Computer</p>
            <p><strong>2. </strong>Gas Stove for home</p>
            <p><strong>3. </strong>Industrial General Purpose Motor</p>
            <p><strong>4. </strong>Submersible Pump Set</p>
            <p><strong>5. </strong>Washing Machine (Semi/Top Load/Front Load)</p>
            <p><strong>6. </strong>Ballast</p>
            <p><strong>7. </strong>Solid State Inverter</p>
            <p><strong>8. </strong>Office Products</p>
            <p><strong>9. </strong>Monoset Pumps powered by diesel engines for Agricultural use</p>
            <p><strong>10. </strong>Chillers</p>
            <p><strong>11. </strong>Microwave Oven</p>
            <p><strong>12. </strong>Solar Water Heater</p>
            <p><strong>13. </strong>Deep Freezers</p>
            <p><strong>14. </strong>Light Commercial AC Fixed Speed</p>
            <p><strong>15. </strong>Television with Ultra- High Definition (UHD)</p>
            <p><strong>16. </strong>Air Compressors</p>
            <p><strong>17. </strong>Tyres/Tires</p>
            <p><strong>18. </strong>High Energy/ Lithium ion battery</p>
            <p><strong>19. </strong>Pedal Fan</p>
            <p><strong>20. </strong>Induction Cookers</p>
            <p><strong>21. </strong>Side by side Refrigerator</p>          
        </div>
        <div className="flex-5">
          <Image
            alt="Classification of BEE Certification"
            className="Classification-img w-100 Importance-img-h-100"
            height={1000}
            loading="lazy"
            src={dft2}
          />
        </div>
      </div>
    </div>
  );
};
