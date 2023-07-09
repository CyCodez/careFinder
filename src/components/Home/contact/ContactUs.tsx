import React, { useState } from "react";
import "./ContactUs.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { app } from "../../../firebase-config";
import { Helmet } from "react-helmet-async";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const db = getFirestore(app);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      message: message,
    };
    addDoc(collection(db, "users"), newUser)
      .then((docRef) => {
        console.log("User added with ID: ", docRef.id);
        // Reset the form fields
        setFormData({
          name: name,
          email: email,
          message: message,
        });
      })
      .catch((error) => {
        console.error("Error adding user: ", error);
      });
    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    toast.success(
      "Thank You For Contacting Us, We'll Get Back To You Shortly!"
    );
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, email, message } = formData;

  return (
    <div>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="contains contact information" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <ToastContainer />
      <div className="contactHeader">
        <h2>Contact Us</h2>
        <p>
          We value your feedback and are here to assist you. If you have any
          questions, concerns, or suggestions, please feel free to reach out to
          us using the contact information or the form below.
        </p>
      </div>

      <div className="contact-us-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <b>Phone:</b> (123) 456-7890
          </p>

          <p>
            <b>Email:</b> info@carefinder.com
          </p>

          <p>
            <b>Address:</b> 123 Care Finder St, City, State, 12345
          </p>

          <p>
            {" "}
            <b>Business Hours:</b> Monday - Friday: 9:00 AM to 5:00 PM
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={handleChange}
              value={name}
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleChange}
              value={email}
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              onChange={handleChange}
              value={message}
              name="message"
              required
            ></textarea>
          </div>
          <button className="form-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook">
              <FaFacebook className="contact-icon" />
            </i>
          </a>
          <a
            href="https://www.twitter.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter">
              <FaTwitter className="contact-icon" />
            </i>
          </a>
          <a
            href="https://www.instagram.com/carefinder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram">
              <FaInstagram className="contact-icon" />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
