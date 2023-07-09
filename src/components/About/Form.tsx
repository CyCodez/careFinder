import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase-config";
import { ToastContainer, toast } from "react-toastify";

interface FormData {
  address: string;
  hospital: string;
  department: string;
  names: string;
  email: string;
  date: string;
  time: string;
}
const db = getFirestore(app);

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    address: "",
    hospital: "",
    department: "",
    names: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create the data object for the new user document
    const newUser = {
      names: names,
      email: email,
      address: address,
      hospital: hospital,
      department: department,
      date: date,
      time: time,
    };

    // Add the new user document to the "users" collection
    addDoc(collection(db, "users"), newUser)
      .then((docRef) => {
        console.log("User added with ID: ", docRef.id);
        // Reset the form fields
        setFormData({
          address: "",
          hospital: "",
          department: "",
          names: "",
          email: "",
          date: "",
          time: "",
        });
      })
      .catch((error) => {
        console.error("Error adding user: ", error);
      });
    const validateFields = (
      address: string,
      hospital: string,
      department: string,
      names: string,
      email: string,
      date: string,
      time: string
    ): string => {
      let message = "";

      switch (true) {
        case address === "":
          toast.error("address field is required");
          break;
        case hospital === "":
          toast.error("hospital field is required");
          break;
        case department === "":
          toast.error("Department is required");
          break;
        case names === "":
          toast.error("name is required");
          break;
        case email === "":
          toast.error("email 3 is required");
          break;
        case date === "":
          toast.error("date 3 is required");
          break;
        case time === "":
          toast.error("time is required");
          break;
        default:
          toast.success("Appointment Submitted Successfully!");
          break;
      }

      return message;
    };

    validateFields(address, hospital, department, names, email, date, time);
  };

  const { address, hospital, department, names, email, date, time } = formData;

  return (
    <div id="form-container" className="form-container">
      <ToastContainer />
      <h3>Book An Appointment</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="address"
            className="form-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="hospital">Hospital</label>
          <input
            type="text"
            name="hospital"
            value={hospital}
            onChange={handleChange}
            placeholder="Choose Hospital"
            className="form-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            value={department}
            onChange={handleChange}
            placeholder="Choose Department"
            className="form-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="names">Name</label>
          <input
            type="text"
            name="names"
            value={names}
            onChange={handleChange}
            placeholder="Enter Name"
            className="form-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="form-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            placeholder="Select Date"
            className="form-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={handleChange}
            placeholder="Select Time"
            className="form-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Book Appointment Now
        </button>
      </form>
    </div>
  );
};
export default Form;
