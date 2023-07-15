import { Modal, Typography } from "@mui/material";
import React from "react";
interface DoctorProfile {
  name: string;
  specialization: string;
  experience: number;
  email: any;
  phone: any;
  avaliable: string;
}

export const doctor1: DoctorProfile = {
  name: "Dr. John Doe",
  specialization: "Cardiology",
  experience: 10,
  email: <a href="mailto:">johnDoe@gmail.com</a>,
  phone: <a href="+23455588870">+23455588870</a>,
  avaliable: "Monday to friday",
};

export const doctor2: DoctorProfile = {
  name: "Dr. James Smith",
  specialization: "Dermatology",
  experience: 8,
  email: <a href="mailto:">jamesSmith@gmail.com</a>,
  phone: <a href="+23455588870">+23488550041</a>,
  avaliable: "Monday to friday",
};
export const doctor3: DoctorProfile = {
  name: "Dr. Angela Jones",
  specialization: "Optician",
  experience: 20,
  email: <a href="mailto:">angelaJones@gmail.com</a>,
  phone: <a href="+23455588870">+234333335555</a>,
  avaliable: "Monday to friday",
};
export const doctor4: DoctorProfile = {
  name: "Dr. Mark Johnson",
  specialization: "Pediatrician",
  experience: 16,
  email: <a href="mailto:">markJohnson@gmail.com</a>,
  phone: <a href="+23455588870">+234000007771</a>,
  avaliable: "Monday to friday",
};

export const doctor5: DoctorProfile = {
  name: "Dr. Sarah Davis",
  specialization: "Obsterician",
  experience: 30,
  email: <a href="mailto:">sarahDavis@gmail.com</a>,
  phone: <a href="+23455588870">+234777799993</a>,
  avaliable: "Monday to friday",
};
export const doctor6: DoctorProfile = {
  name: "Dr. Michael Marvins",
  specialization: "Gynaecologist",
  experience: 12,
  email: <a href="mailto:">michaelMarvins@gmail.com</a>,
  phone: <a href="+23455588870">+2348888111000</a>,
  avaliable: "Monday to friday",
};

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
export default DoctorModal;
