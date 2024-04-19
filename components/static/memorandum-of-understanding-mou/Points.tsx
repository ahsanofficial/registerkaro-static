import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/memorandum-of-understanding-mou/Points_to_remembe.svg";

const Points = () => {
  return (
    <div id="Points">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 align-content-center">
          <Image
            alt="Points to remember while writing a Memorandum of Understanding (MoU)"
            className="Points-img w-100"
            height={980}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Title & Date: </strong>
            Include the title, for example, “Memorandum of understanding between
            (name of organisation) and (name of organisation).” Secondly,
            include the date where it should Indicate the month, day, and year
            the agreement was reached, when it goes into effect, and when it
            should get expired.
          </p>

          <p>
            <strong>Parties to the MoU: </strong>
            Next step begins by starting to list all of the parties to the
            agreement precisely. Provide each organization’s or person’s
            complete legal name, address, and phone number. Together with
            outlining the MOU’s objectives, this section should express the
            parties’ intention to establish a relationship.
          </p>

          <p>
            <strong>Scope and Objectives: </strong>
            Define the agreement’s purpose in more detail. In this section,
            outline the scope of the agreement by defining its boundaries and
            limitations. Clearly state the objectives and goals you aim to
            achieve through the collaboration. Be specific and concise to avoid
            ambiguity or confusion. Ensure that both parties are aligned in
            their understanding of the scope and objectives of the MOU.{" "}
          </p>

          <p>
            <strong>Duties and rights: </strong>
            This defines what each party will bring to the agreement. Explain
            which roles are to be performed and who will perform them. Specify
            the responsibilities and contributions of each party involved in the
            agreement. Clearly define the tasks, deliverables, and timelines
            expected from each party. Ensure there is clarity on how the parties
            will collaborate and communicate throughout the duration of the
            agreement.
          </p>

          <p>
            <strong>Dispute Resolution: </strong>
            Another clause to incorporate in the Memorandum of Understanding is
            the clause for dispute resolution mechanism in terms of any dispute
            arising in relation to the MoU. It is suggested to clearly draft the
            clause incorporation the little details especially in case of
            arbitration is the chosen mechanism, as to avoid any hurdles.
            Arbitration requires an arbitration agreement in order to resort for
            the same and it includes minute details such as chosen language,
            seat, number of arbitrators, etc.
          </p>

          <p>
            <strong>Governing Law: </strong>
            Clause defining the governing law for the entire memorandum is
            another important clause to not to forget incorporating. Missing
            upon such clause can bring enforcement related problem for the MoU.
            In terms of resorting to arbitration as the dispute resolution
            mechanism, it is important to be careful about the law choosing to
            govern the entire memorandum, and arbitration agreement as well
            because of separate nature of the arbitration agreement.
          </p>

          <p>
            <strong>Termination or Dissolution: </strong>
            You may also wish to add clauses pertaining to termination of the
            Memorandum of Understanding depending upon the different
            circumstances to take place such as incompetency, non-performance of
            obligations, etc. You may also include the dissolution clause for
            the MoU, along with other Intellectual Property, etc.
          </p>

          <p>
            <strong>Signature & Stamp: </strong>
            You should add a signature to the template to allow all interested
            parties to sign. If you use eSignature, your document can be signed
            within minutes. Along with the signature, you may also add the stamp
            column to enhance the authentication of the MoU.
          </p>
        </div>
     
      </div>
    </div>
  );
};

export default Points;
