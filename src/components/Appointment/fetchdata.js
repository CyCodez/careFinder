import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./fetchdata.css";
import { Helmet } from "react-helmet-async";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const db = getFirestore();

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    setisLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userData = [];
      querySnapshot.forEach((doc) => {
        userData.push({ id: doc.id, ...doc.data() });
      });
      setUserData(userData);
      setisLoading(false);
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  }

  return (
    <div>
      <Helmet>
        <title>Appointment Page</title>
        <meta
          name="description"
          content="Provides a Table Of All Booked Appointments"
        />
        <link rel="canonical" href="/appointment" />
      </Helmet>
      <h1 className="user_data">All Appointments</h1>
      <div className="table-container">
        {isLoading ? (
          <h4>Loading Appointments...</h4>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Hospital</th>
                <th>Department</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.names}>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.hospital}</td>
                  <td>{user.department}</td>
                  <td>{user.time}</td>
                  <td>{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserList;
