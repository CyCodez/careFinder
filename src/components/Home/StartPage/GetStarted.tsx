import React from "react";
import "./GetStarted.css";
import { Helmet } from "react-helmet-async";
const GetStarted: React.FC = () => {
  return (
    <div className="get-started-container">
      <Helmet>
        <title>Getting Started With Care Finder</title>
        <meta
          name="description"
          content="helps users easily get started with finding health care services"
        />
        <link rel="canonical" href="/startPage" />
      </Helmet>
      <h1>Welcome to Care Finder!</h1>
      <p>
        Our application helps you find the best care providers for your needs.
        Whether you're looking for healthcare professionals, caregivers, or
        specialized services, we've got you covered. Follow the steps below to
        get started.
      </p>

      <h2>Step 1: Sign Up</h2>
      <p>
        To begin using Care Finder, you need to create an account. Click on the
        "Sign Up" button and fill in your information. We'll ask for your name,
        email address, and a secure password. Once you've entered your details,
        click "Submit" to create your account.
      </p>
      <h2>Step 2: Explore Care Providers</h2>
      <p>
        Once you've signed up, you'll be redirected to the home page. Here, you
        can start exploring the available care providers. Use the search bar in
        the "Find Hospital" page to enter your location or specific
        requirements.
      </p>
      <h2>Step 3: View Providers Details</h2>
      <p>
        Click on a provider's listing to view their detailed profile. You'll
        find important information such as their qualifications, experience,
        services offered, and reviews from other users. Take your time to review
        the details and ensure they meet your requirements.
      </p>
      <h2>Step 4: Contact Providers</h2>
      <p>
        When you find a care provider that matches your needs, you can contact
        them directly through our platform. Use the provided contact information
        or messaging feature to get in touch. Feel free to ask any questions or
        discuss your specific care requirements.
      </p>
      <h2>Step 5: Book An Appointment</h2>
      <p>
        Once you've connected with a care provider and are satisfied with their
        services, you can proceed to book an appointment. Use the scheduling
        options available on their profile to select a convenient date and time.
        Confirm the booking and wait for the provider's confirmation.
      </p>
    </div>
  );
};
export default GetStarted;
