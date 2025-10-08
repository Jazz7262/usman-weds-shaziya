import React from 'react';
import '../styles/InviteNote.css';

function InviteNote() {
  return (
    <section id="invite-note">
      <div className="invite-note-wrapper">
        <h5>An Invitation from:</h5>
        <h2>Mr. & Mrs. Al-Haaj T. Shamshuddin Ashrafi Sahab,</h2>
        <h5 className="address mb-3">Bhiwandi.</h5>
        {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
        <h5 className="address mb-3">
          H.NO.: 1/541/120, NGO's Colony,
          <br /> Adoni, Kurnool Dist.,
          <br /> Andhra Pradesh - 518 301.
        </h5>
        <p className="address">
          Contact: <br />
          T. Shamshuddin: +91 93234 58055,
          <br />
          T. Parvez: +91 99751 56017,
          <br />
          T. Basha: +91 99635 41902.
        </p>
      </div>
    </section>
  );
}

export default InviteNote;
