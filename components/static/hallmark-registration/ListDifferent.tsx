import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hallmark-registration/List_of_Different_marks_of_a_BIS_Hallmark.svg";
interface HeroProps {
    cityName: string;
}
const ListDifferent = ({ cityName }: HeroProps) => {
  return (
    <div id="ListDifferent">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="List of Different marks of a BIS Hallmark? Old Methods of Hallmarking"
            className="ListDifferent-img w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>BIS Mark or Logo: </strong>his mark shows that a 3rd party or independent assessor has properly evaluated the decoration & validated the purity of a metal. In most instances, it is validated by one of the BIS certified labs.</p>
            <p><strong>Purity Grade: </strong>There are two ways to know the purity of gold; one is Karats which is denoted by KT and the second is Fineness Number. So, the highest grade of gold is 24KT (purest), but it is too soft to be utilised in ornamentation or jewellery. As an outcome, a trace amount of other metals, such as silver or zinc, is added to gold to create long-lasting jewellery/adornment.</p>
            <p><strong>Hallmarking Centre’s Mark: </strong>This is the Hallmarking License of the marking centre or 3rd party evaluator. The label is stamped in every product in the centre and is inspected for purity of silver & gold.</p>
            <p><strong>Jeweller Mark: </strong>This is the manufacturers or jeweller’s mark on the metal article and each BIS certified jeweller’s decorations bear a unique jeweller BIS Hallmark Logo.</p>
            <p><strong>Marking Year: </strong>This shows the year the object was labelled or hallmarked. The marking year is recognised by a letter of code assigned by BIS. For e.g., the letter A stood for 2000 and B for 2001 and so on.</p>
        </div>
       
      </div>
    </div>
  );
};

export default ListDifferent;


