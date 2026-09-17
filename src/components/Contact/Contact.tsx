"use client";

import { FormEvent, useState } from "react";
import { RevealSection } from "@/components/RevealSection/RevealSection";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <RevealSection id="contact" className="bg-darker">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="card-3d card p-4 h-100">
              <h4 className="mb-4">
                <i className="fas fa-envelope me-2"></i>Contact Information
              </h4>
              <p className="mb-4">
                Feel free to reach out for collaboration or just to say
                hello!
              </p>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary p-3 rounded-circle me-3">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h6 className="mb-0">Email</h6>
                  <p className="mb-0">
                    <a
                      href="mailto:salabaojeffrey024@gmail.com"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      salabaojeffrey024@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary p-3 rounded-circle me-3">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h6 className="mb-0">Mobile Phone</h6>
                  <p className="mb-0">+63 (930)431-4347</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="bg-primary p-3 rounded-circle me-3">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h6 className="mb-0">Location</h6>
                  <p className="mb-0">Valenzuela City, Philippines</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="card-3d card p-4">
              <h4 className="mb-4">
                <i className="fas fa-paper-plane me-2"></i>Send a Message
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-3d"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <p className="text-success mt-3 mb-0">
                    Message sent! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-danger mt-3 mb-0">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
