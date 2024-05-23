import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/investment-pitch-deck-for-business/How to create a Pitch Deck.svg";

interface HeroProps {
  cityName: string;
}

const HowDeck = ({ cityName }: HeroProps) => {
  return (
    <div id="HowDeck">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <h3>Describe The Product: </h3>
          <p>
              your product or service should be succinctly described in a few
              words. Describing the functionality and operation of your product
              is important, but it's crucial to prioritize explaining the "why"
              behind it, focusing on the advantages for the end user. What is
              the issue faced by consumers that you are addressing? The
              technology powering your product may be impressive, and it
              definitely reflects extensive effort. However, consumers - and
              consequently investors - are not worried about the functioning of
              their smartphone. They desire to have the internet accessible in
              their pocket. Show instead of tell. Showing your product will give
              you a significant edge. Klein of Bloomberg Beta believes that a
              product demonstration is more valuable than using slides.
          
          </p>
          <p>
            One is an explanation of an object; the other is the actual object
            itself. Having good pictures and a video link can be extremely
            helpful if achieving this is not an option. As a creator, you might
            be too attached to your product to effectively craft a quality
            product description. Before going "live", hand your deck over to an
            individual who is not part of your company. If they are able to
            understand the purpose of your product from the presentation, then
            you have effectively communicated your message.
          </p>
          <h3>Problem & Solution:</h3>
          <p>
            If your business concept doesn't address a real issue, what is your
            purpose? You need to pinpoint a problem that your target audience is
            encountering, a gap that is not being addressed by the current
            market. A quality problem slide should outline two or three issues
            your product will address, avoiding excessive details. Present a
            straightforward and understandable solution that investors can
            quickly grasp. This slide is significant as it enhances the
            attractiveness of your product presentation.
            <p>
              Refrain from making sweeping declarations such as "we are the sole
              individuals undertaking this." The majority of individuals in the
              room are likely familiar with several companies attempting to
              solve the issue you've recognized.
            </p>
            <p>
              Another effective approach is to provide several potential
              solutions to the issue at hand before elaborating on your selected
              solution and explaining the reasoning behind it. This demonstrates
              to investors your commitment and thorough examination.
            </p>
            Shift your presentation's focus from being unique to emphasizing
            your research, determination, dedication, and ability to solve the
            problem. However, ensure that you do not include all of that on your
            slide. Stick to simplicity and brevity, allowing these principles to
            influence your entire presentation.
          </p>
          <h3>Market Size:</h3>
          <p>
            Make sure to incorporate a brief overview of your market research
            when designing a sales pitch structure. Whether or not you receive
            funding will be decided by the market. In a small market, investors
            may deem the potential ROI too minimal or too risky to invest in
            your business. Using information from your investigation, a
            comprehensive market analysis will visually display previous market
            expansion and future market potential for investors to assess the
            potential of your product.
          </p>
          <p>
            Estimating your market too high and exaggerating your potential can
            be alluring. However, resist the urge. Support your projections with
            industry standards, benchmarks, and the success of similar products.
            Avoid asserting your correctness while labeling everyone else as
            incorrect. If your rivals are intelligent and strong, demonstrate
            how you can secure the upper hand. No matter the size of your
            market, investors are primarily interested in how thoroughly you
            have analyzed the opportunity. Also discuss what will happen in the
            future. Once you achieve the success you expect, you must address
            the query regarding your strategy for expanding to accommodate the
            increased demand. Above all, always tell the truth.
          </p>
          <h3>Competitors:</h3>
          <p>
            Begin by providing an overview of your company, identifying your
            demographic target audience, and outlining your projected market
            size. Next, shift the conversation to discussing risks, patterns,
            and what sets you apart in terms of achievements. Lastly, thoroughly
            analyze your main rivals, examining their market position, earnings,
            and expansion.
          </p>
          <p>
            It acts as a discussion opener for investors to assess the founder's
            expertise in their market. This section requires you to identify and
            list all major competitors in your industry. After thorough
            investigation, list their strong and weak points.
          </p>
          <h3>Your Team is Capable:</h3>
          <p>
            Qualifications, experiences, and accomplishments are important, but
            they are just the beginning. You need to demonstrate how your
            individual abilities align with this company and show that you are
            capable of persuading investors and partners to buy into your idea.
            Additionally, you must prove that you can successfully attract
            qualified team members and acquire customers.{" "}
          </p>
          <p>
            /You must also take into account the diversity of your team. The
            outline of your pitch deck will list your key team members. The
            investor wants to know what motivates these individuals and what
            sets them apart to ensure the success of the project. For each core
            team member, think about adding bullet points, descriptions, or
            titles that demonstrate their importance to your mission.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="How to create a Pitch Deck"
            className="Importance-img-h-100 w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default HowDeck;
