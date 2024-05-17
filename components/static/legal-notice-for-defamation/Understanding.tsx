import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/legal-notice-for-defamation/one.svg";

export const Understanding = () => {
  return (
    <div id="Understanding">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Understanding Legal Notices"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-4 align-items-center">
          <p>
            A legal notice is a formal communication or written document made by
            one party to another to convey that there is legal intent, or there
            is a claim or demand to be made. It is served to another party to
            inform of a potential legal action to be taken against the party. It
            acts as a formal communication between the parties, along with a
            notice period which is the duration in which the other party is
            supposed to take action, reply or respond. The purpose of a legal
            notice is to solve the disputes among the parties amicably,
            notifying the other party of a legal claim, or of his/her legal
            obligations, and also to provide a warning before initiating the
            legal proceedings against the party. It has legal significance in
            the court, as it can be used as evidence before the court, that
            steps had been taken to make the person aware of the initiation as
            well as the grounds of the legal proceeding.
          </p>
        </div>
      </div>
    </div>
  );
};
