import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/patent-registration/Types_of_Patents.svg";
interface HeroProps {
    cityName: string;
}

const TypesPatents = ({ cityName }: HeroProps) => {
  return (
    <div id="TypesPatents">
      <p className="main-para">
        There are different types of patents to be registered under the Patent,
        which are as follows:
      </p>
      <div className="flex-3">
          <Image
            alt="Types of Patents"
            className="TypesPatents-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-7">
          <h3>Utility Patent</h3>

          <p>
            Utility patents comprise over two thirds of all patents issued
            worldwide, with the majority being issued in the United States. It
            is given for a fresh, practical, and non-obvious invention. It can
            refer to any device, method, produced good, material composition, or
            invention that outperforms an earlier one. There are three
            categories of utility: specific utility, which focuses on how an
            innovation fulfills a certain task, general utility, which is based
            on functionality, and moral utility, which ensures that an invention
            won’t be harmful or encourage improper use.{" "}
          </p>

          <h3>Design Patent</h3>

          <p>
            A design patent is one that is granted for a structure or design. It
            can contain, but is not limited to, particular chairs, shoes,
            tables, equipment, new typefaces, distinctive computer icons, etc. A
            design cannot be useful in order to qualify for a design patent; it
            must be beautiful or attractive. Similar to a typical utility
            patent, a design patent grants the owner exclusive rights to prevent
            third parties from creating, utilizing, importing, and selling the
            design.
          </p>

          <h3>Plant Patent</h3>

          <p>
            Plants that are novel or unusual are frequently protected with plant
            patents. The plant must not be an Irish potato or any tuber
            propagated plant, nor should it be discovered in an uncultivated
            state, and it must be capable of asexual reproduction in order to be
            eligible for this kind of patent. Patents may be awarded for
            discoveries, inventions, or asexual propagation of any new and
            different plant variety.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default TypesPatents;
