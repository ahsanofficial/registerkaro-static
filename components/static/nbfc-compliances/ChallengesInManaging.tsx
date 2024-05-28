import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/pvt-reg/benefit.svg';

const ChallengesInManaging = () => {
    return (
        <div id="ChallengesInManaging">
            <p className="main-para">Handling compliance for NBFCs in India can be tough due to several reasons. Here are some main challenges:</p>
            <div className="benefits flex w-80 m-auto mobile-flex-column">
                <div className="flex-4">
                    <Image
                        alt="Challenges in Managing Compliance for NBFCs"
                        className="ChallengesInManaging-img w-100 Importance-img-h-100"
                        height={575}
                        loading="lazy"
                        src={bft}
                    />
                </div>
                <div className="flex-6">
                    <p><strong>1. Complicated Rules :</strong>The rules for NBFCs in India are complicated and keep changing, which makes it hard for companies to keep track. These rules come from various government bodies like the RBI, SEBI, MCA, IRDA etc.</p>
                    <p><strong>2. Lack of Clear Guidelines :</strong>Sometimes, the guidelines set by regulators aren't very clear. This can make it confusing for NBFCs to know exactly what they need to do to follow the rules properly</p>
                    <p><strong>3. Limited Resources :</strong>NBFCs, especially smaller ones, might not have enough money or people to handle compliance properly. It takes a lot of time and money to manage compliance, and not all NBFCs can afford it.</p>
                    <p><strong>4. Human Mistakes :</strong>Even with good systems in place, people can still make mistakes. This can lead to not following the rules, even by accident. The compliance team needs to be well-trained to avoid these errors.</p>
                    <p><strong>5. Lack of Knowledge :</strong>Some NBFCs might not know all the rules they need to follow, especially if they're new to the industry. This lack of knowledge can lead to not following the rules properly and getting fined.</p>
                    <p><strong>6. Different Rules for Different Sectors :</strong>Compliance rules for NBFCs are different from those for other industries. This difference can make it hard for NBFCs to manage compliance effectively. They need to understand the rules specific to their industry well.</p>
                </div>
            </div>
        </div>
      );
};

export default ChallengesInManaging;
