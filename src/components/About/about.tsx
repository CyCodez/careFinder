import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import FooterLayout from "./FooterLayout.tsx";
import { useNavigate } from "react-router-dom";
import "./about.css";
import ThreeColumnLayout from "./ThreeColumnLayout.tsx";
import careAbout from "./images/aboutcare.webp";
import doc1 from "./images/doctor1.jpg";
import doc2 from "./images/doctor2.jpg";
import doc3 from "./images/doctor3.jpg";
import doc4 from "./images/doctor4.jpg";
import doc5 from "./images/doctor5.jpg";
import doc6 from "./images/doctor6.jpg";
import Form from "./Form.tsx";
import { Helmet } from "react-helmet-async";
import { Button, Modal, Typography } from "@mui/material";

interface DoctorProfile {
  name: string;
  specialization: string;
  experience: number;
  email: any;
  phone: any;
  avaliable: string;
}

const DoctorModal = ({
  isOpen,
  onClose,
  doctor,
}: {
  isOpen: boolean;
  onClose: () => void;
  doctor: DoctorProfile;
}) => {
  return (
    <Modal open={isOpen} onClose={onClose} className="modalContainer">
      <div className="modalContent">
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          className="profileName"
        >
          {doctor.name}
        </Typography>
        <Typography variant="body1" gutterBottom className="profileInfo">
          <b>Specialization:</b> {doctor.specialization}
        </Typography>
        <Typography variant="body1" gutterBottom className="profileInfo">
          <b>Experience:</b> {doctor.experience} years
        </Typography>
        <Typography variant="body1" gutterBottom className="profileInfo">
          <b>Email:</b> {doctor.email}
        </Typography>
        <Typography variant="body1" gutterBottom className="profileInfo">
          <b>phone:</b> {doctor.phone}
        </Typography>
        <Typography variant="body1" gutterBottom className="profileInfo">
          <b>Avaliable:</b> {doctor.avaliable}
        </Typography>
      </div>
    </Modal>
  );
};

function About(): JSX.Element {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);

  const openModal1 = () => {
    let auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      alert("login first");
      return;
    }
    setIsModalOpen1(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const openModal3 = () => {
    setIsModalOpen3(true);
  };
  const openModal4 = () => {
    setIsModalOpen4(true);
  };

  const openModal5 = () => {
    setIsModalOpen5(true);
  };

  const openModal6 = () => {
    setIsModalOpen6(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };
  const closeModal4 = () => {
    setIsModalOpen4(false);
  };

  const closeModal5 = () => {
    setIsModalOpen5(false);
  };

  const closeModal6 = () => {
    setIsModalOpen6(false);
  };

  const doctor1: DoctorProfile = {
    name: "Dr. John Doe",
    specialization: "Cardiology",
    experience: 10,
    email: <a href="mailto:">johnDoe@gmail.com</a>,
    phone: <a href="+23455588870">+23455588870</a>,
    avaliable: "Monday to friday",
  };

  const doctor2: DoctorProfile = {
    name: "Dr. James Smith",
    specialization: "Dermatology",
    experience: 8,
    email: <a href="mailto:">jamesSmith@gmail.com</a>,
    phone: <a href="+23455588870">+23488550041</a>,
    avaliable: "Monday to friday",
  };
  const doctor3: DoctorProfile = {
    name: "Dr. Angela Jones",
    specialization: "Optician",
    experience: 20,
    email: <a href="mailto:">angelaJones@gmail.com</a>,
    phone: <a href="+23455588870">+234333335555</a>,
    avaliable: "Monday to friday",
  };
  const doctor4: DoctorProfile = {
    name: "Dr. Mark Johnson",
    specialization: "Pediatrician",
    experience: 16,
    email: <a href="mailto:">markJohnson@gmail.com</a>,
    phone: <a href="+23455588870">+234000007771</a>,
    avaliable: "Monday to friday",
  };

  const doctor5: DoctorProfile = {
    name: "Dr. Sarah Davis",
    specialization: "Obsterician",
    experience: 30,
    email: <a href="mailto:">sarahDavis@gmail.com</a>,
    phone: <a href="+23455588870">+234777799993</a>,
    avaliable: "Monday to friday",
  };
  const doctor6: DoctorProfile = {
    name: "Dr. Michael Marvins",
    specialization: "Gynaecologist",
    experience: 12,
    email: <a href="mailto:">michaelMarvins@gmail.com</a>,
    phone: <a href="+23455588870">+2348888111000</a>,
    avaliable: "Monday to friday",
  };

  useEffect(() => {
    if (!auth) {
      signOut(auth).then(() => {
        navigate("/login");
      });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="careFinder about page" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="container">
        <div className="content">
          <div className="left-content">
            <img className="aboutImg" src={careAbout} />
          </div>
          <div className="right-content">
            <h3>About CareFinder</h3>
            <p>
              Welcome to Care Finder, your trusted companion in finding quality
              healthcare services near you. Our mission is to connect
              individuals with compassionate care providers and guide them
              towards exceptional care services.
            </p>
            <h3>Who We Are</h3>
            <p>
              At Care Finder, we understand the importance of finding the right
              healthcare services that cater to your unique needs. Whether
              you're looking for hospitals, clinics, doctors, or specialists,
              we've got you covered. Our platform simplifies the process of
              finding and accessing healthcare facilities and professionals in
              your area.
            </p>
            <div>
              <h3>Get Started</h3>
              <p>
                Ready to discover quality care services near you? Start using
                Care Finder today to find the nearest hospitals, clinics, and
                healthcare providers. Take control of your healthcare journey
                and experience exceptional care that meets your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="docText">
        <h3>Qualified Doctors</h3>{" "}
      </div>
      <div className="image-container">
        <div className="column">
          <div className="circle">
            <img src={doc1} alt="Profile Picture" />
          </div>
          <div className="text">
            <Button
              variant="contained"
              onClick={openModal1}
              className="buttonStyle"
            >
              View Profile
            </Button>
          </div>
          <div className="circle">
            <img src={doc2} alt="Profile Picture" />
          </div>
          <div className="text">
            <Button
              variant="contained"
              onClick={openModal2}
              className="buttonStyle"
            >
              View Profile
            </Button>
          </div>
          <div className="circle">
            <img src={doc5} alt="Profile Picture" />
          </div>
          <div className="text">
            <Button
              variant="contained"
              onClick={openModal3}
              className="buttonStyle"
            >
              View Profile
            </Button>
          </div>
        </div>

        <div className="column">
          <div className="circle">
            <img src={doc3} alt="Profile Picture" />
          </div>
          <div className="text">
            <Button
              variant="contained"
              onClick={openModal4}
              className="buttonStyle"
            >
              View Profile
            </Button>
          </div>
          <div className="circle">
            <img src={doc4} alt="Profile Picture" />
          </div>
          <div className="text">
            <Button
              variant="contained"
              onClick={openModal5}
              className="buttonStyle"
            >
              View Profile
            </Button>
          </div>
          <div className="circle">
            <img src={doc6} alt="Profile Picture" />
          </div>
          <div className="text">
            <Button
              variant="contained"
              onClick={openModal6}
              className="buttonStyle"
            >
              View Profile
            </Button>
          </div>
        </div>

        <div className="column">
          <Form />
        </div>
        <div>
          {isModalOpen1 && (
            <DoctorModal isOpen={true} onClose={closeModal1} doctor={doctor1} />
          )}
          {isModalOpen2 && (
            <DoctorModal isOpen={true} onClose={closeModal2} doctor={doctor2} />
          )}
          {isModalOpen3 && (
            <DoctorModal isOpen={true} onClose={closeModal3} doctor={doctor3} />
          )}
          {isModalOpen4 && (
            <DoctorModal isOpen={true} onClose={closeModal4} doctor={doctor4} />
          )}
          {isModalOpen5 && (
            <DoctorModal isOpen={true} onClose={closeModal5} doctor={doctor5} />
          )}
          {isModalOpen6 && (
            <DoctorModal isOpen={true} onClose={closeModal6} doctor={doctor6} />
          )}
        </div>
      </div>
      <div className="user-review">
        <h3>What Our Users Say</h3>
      </div>
      <ThreeColumnLayout />
      <FooterLayout />
    </>
  );
}

export default About;
