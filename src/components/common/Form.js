import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BasicButtons from "./Button";
import "./Form.css";

export default function BasicTextFields({
  title,
  btnTitle,
  setPassword,
  setEmail,
  handleAction,
  SignUpComponent,
  LoginInComponent,
  Facebook,
}) {
  return (
    <div className="formContainer">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <div className="heading-container">
          <h3>{title}</h3>
        </div>
        <TextField
          id="email"
          label="Enter Your Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter Your Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <BasicButtons btnTitle={btnTitle} handleAction={handleAction} />
        {SignUpComponent}
        {LoginInComponent}
        {Facebook}
      </Box>
    </div>
  );
}
