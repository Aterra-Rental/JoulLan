import React from "react";

function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Contact Us</h1>
        <p className="lead text-muted">
          Have questions about renting or buying a car? We'd love to hear from
          you.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <h3 className="mb-4">Get In Touch</h3>

              <div className="mb-4">
                <h5>📍 Address</h5>
                <p className="text-muted mb-0">Phnom Penh, Cambodia</p>
              </div>

              <div className="mb-4">
                <h5>📞 Phone</h5>
                <p className="text-muted mb-0">+855 12 345 678</p>
              </div>

              <div className="mb-4">
                <h5>✉️ Email</h5>
                <p className="text-muted mb-0">support@carrental.com</p>
              </div>

              <div>
                <h5>🕒 Business Hours</h5>
                <p className="text-muted mb-0">
                  Monday - Friday: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="mb-4">Send a Message</h3>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
