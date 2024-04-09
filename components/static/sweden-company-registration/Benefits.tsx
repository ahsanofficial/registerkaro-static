import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/sweden-company-registration/Benefits.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
      <p className="main-para">
        The following are the benefits of Company Registration in Sweden:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Benefits of Company Registration in Sweden"
            className="Benefits-img w-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>1. Business Made Easy: </strong>Sweden takes pride in its
            business-friendly atmosphere, with clear rules, efficient government
            processes, and strong legal protections. It consistently ranks high
            on the global ease of doing business index, making tasks like
            registering a company, following tax rules and enforcing contracts
            straightforward. Entrepreneurs thrive in an environment that
            encourages new ideas, business ventures, and eco-friendly practices.
            Sweden is known for its innovation and technology, especially in
            cities like Stockholm, which is often called the "unicorn factory"
            for its many successful startups. The country attracts large tech
            companies thanks to its focus on research and development, supported
            by government funding and investment capital, making it perfect for
            industries like IT, biotech, and clean energy.
          </p>
          <p>
            <strong>2. Gateway to European Market: </strong>As a member of the
            EU, Sweden gives access to the world's biggest market, with over 500
            million consumers. Companies registered in Sweden benefit from EU
            trade deals, shared regulations, and free movement of goods,
            services, money, and workers across member countries. This opens up
            huge opportunities for expanding markets, diversifying trade, and
            reaching a vast consumer base without facing tariffs or customs
            fees.
          </p>
          <p>
            <strong>3. Gateway to Nordic Market: </strong>Registering your
            business in Sweden also provides access to the Nordic market. This
            means that not only do you get to operate within Sweden, but you
            also have opportunities to do business in neighbouring Nordic
            countries like Norway, Denmark, Finland, and Iceland. These
            countries share similar economic systems and have close trade ties.
            By establishing your business in Sweden, you can leverage these
            connections to expand your market reach beyond Sweden's borders,
            tapping into a larger customer base and exploring new business
            opportunities across the Nordic region.
          </p>
        </div>
       
      </div>
      <div>
        <div className="w-80 m-auto">
          <p>
            <strong>4. Tax Benefits and Business Advantages: </strong>
            <div className="ps-5 ">
              <p >
                <strong>1. Corporate Tax: </strong>Sweden is often thought of as
                a place with high taxes for individuals. However, for companies,
                it's a different story. Swedish corporate tax rates are
                reasonable at 20.6%, which is moderate compared to other
                countries. Moreover, companies often end up paying even less by
                using profit allocation reserves. Furthermore, the companies are
                also allowed to carry forward losses for an indefinite period.
              </p>
              <p>
                <strong>2. Double Tax Treaties: </strong>Sweden, being part of
                the EU, has many double tax treaties. This means it doesn't have
                thin capitalization rules and doesn't tax interest payments.
                This makes Sweden an attractive place for holding companies,
                even for those with smaller holdings.
              </p>
              <p>
                <strong>
                  3. No Withholding Taxes on Interest Paid Abroad:{" "}
                </strong>
                Sweden doesn't charge withholding taxes on interest, even for
                transactions involving investors from tax havens. This makes
                loans to holding companies more favourable than using equity.
              </p>
              <p>
                <strong>4. Dividend Exemption: </strong>In Sweden, dividends
                from certain shares are tax-exempt if they meet specific
                criteria. This includes shares not listed on any stock exchange,
                representing at least 10% of voting power, and held for a year.
                Shares in EU resident companies or similar to Swedish entities
                may also qualify. This often means dividends received from
                subsidiaries are tax-exempt for Swedish holding companies,
                except those from tax haven jurisdictions due to controlled
                foreign company rules (CFC- rules).
              </p>
              <p>
                <strong>5. Capital Gains Exemption: </strong>Swedish holding
                companies don't pay taxes on capital gains, but there are
                exceptions for "shell companies" and careful planning is needed
                to avoid issues with capital gains tax.
              </p>
              <p>
                <strong>6. No Stamp Duty: </strong>There's no stamp duty or
                incorporation tax when establishing a Swedish company, making
                the process easy. Additionally, accounting can be done in Euros,
                and advisor fees are usually low compared to international
                standards.
              </p>
              <p>
                <strong>7. Fund the Company with Loans: </strong>Unlike many
                other countries, Sweden doesn't have thin capitalization rules.
                This means investors can fund the company with loans instead of
                needing a lot of share capital.
              </p>
              <p>
                <strong>8. Deductible Interest Expenses: </strong>Interest
                expenses on external loans are fully deductible, with some
                exceptions for affiliated companies following certain
                principles.{" "}
              </p>
            </div>
          </p>
        </div>
      </div>

      <p className="main-para pt-4  ">
        Registering your business in Sweden opens up numerous benefits that pave
        the way for growth, creativity, and achievement. With its strong
        economy, welcoming atmosphere for businesses, ample pool of skilled
        workers, innovation-friendly environment, and strategic position within
        the EU, Sweden offers an ideal environment for businesses to thrive.
        Whether you're a new startup with ambitious goals or an established
        company looking for new opportunities, Sweden gives you the tools,
        resources, and assistance necessary to make your business dreams come
        true in the heart of Scandinavia.
      </p>
    </div>
  );
};
