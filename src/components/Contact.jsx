// import "./Contact.css";

// function Contact() {
//   return (
//     <section className="contact-section" id="contact">
//       <div className="contact-container">

//         {/* Main Contact Area */}
//         <div className="contact-main">

//           <div className="contact-heading">
//             <span className="section-label">
//               CONNECT WITH US
//             </span>

//             <h2>
//               Build something
//               <br />
//               <span>worth connecting.</span>
//             </h2>
//           </div>

//           <div className="contact-content">

//             <p>
//               Have a question about our programs, projects,
//               cloud lab or student activities? Reach out to
//               the CloudConnect department.
//             </p>

//             <a
//               href="mailto:hello@cloudconnect.edu"
//               className="contact-email"
//             >
//               hello@cloudconnect.edu
//               <span>↗</span>
//             </a>

//           </div>

//         </div>

//         {/* Contact Details */}
//         <div className="contact-details">

//           <div className="contact-detail">
//             <span>EMAIL</span>
//             <p>hello@cloudconnect.edu</p>
//           </div>

//           <div className="contact-detail">
//             <span>LOCATION</span>
//             <p>CloudConnect Technology Campus</p>
//           </div>

//           <div className="contact-detail">
//             <span>OFFICE HOURS</span>
//             <p>Monday — Friday · 09:00 — 17:00</p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Contact;


import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSubmitted(false);
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">

          {/* Main Contact Area */}
          <div className="contact-main">

            <div className="contact-heading">
              <span className="section-label">
                CONNECT WITH US
              </span>

              <h2>
                Build something
                <br />
                <span>worth connecting.</span>
              </h2>
            </div>

            <div className="contact-content">

              <p>
                Have a question about our programs, projects,
                cloud lab or student activities? Reach out to
                the CloudConnect department.
              </p>

              {/* Open Contact Form */}
              <button
                className="contact-email"
                onClick={() => setShowForm(true)}
              >
                hello@cloudconnect.edu
                <span>↗</span>
              </button>

            </div>

          </div>

          {/* Contact Details */}
          <div className="contact-details">

            <div className="contact-detail">
              <span>EMAIL</span>
              <p>hello@cloudconnect.edu</p>
            </div>

            <div className="contact-detail">
              <span>LOCATION</span>
              <p>CloudConnect Technology Campus</p>
            </div>

            <div className="contact-detail">
              <span>OFFICE HOURS</span>
              <p>Monday — Friday · 09:00 — 17:00</p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          CONTACT MODAL
      ========================= */}

      {showForm && (
        <div
          className="contact-modal-overlay"
          onClick={closeForm}
        >
          <div
            className="contact-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="modal-header">

              <div>
                <span className="modal-label">
                  REACH OUT
                </span>

                <h3>
                  How can we
                  <span> help?</span>
                </h3>
              </div>

              <button
                className="modal-close"
                onClick={closeForm}
                aria-label="Close contact form"
              >
                ×
              </button>

            </div>

            {!submitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* Name + Email */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      NAME
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      EMAIL
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject">
                    SUBJECT
                  </label>

                  <select id="subject" required>
                    <option value="">
                      Select a topic
                    </option>

                    <option value="academics">
                      Academic Programs
                    </option>

                    <option value="projects">
                      Student Projects
                    </option>

                    <option value="cloud-lab">
                      Cloud Lab
                    </option>

                    <option value="events">
                      Events & Activities
                    </option>

                    <option value="general">
                      General Query
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="form-submit"
                >
                  Send Query
                  <span>↗</span>
                </button>

                <p className="form-note">
                  We'll get back to you during office hours.
                </p>

              </form>
            ) : (
              <div className="success-message">

                <div className="success-icon">
                  ✓
                </div>

                <h4>
                  Query received.
                </h4>

                <p>
                  Thank you for reaching out to
                  CloudConnect. Your message has been
                  recorded for this demonstration.
                </p>

                <button
                  className="success-button"
                  onClick={closeForm}
                >
                  Back to website
                </button>

              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}

export default Contact;