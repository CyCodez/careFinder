import React, { ChangeEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BasicButtons from "./Button.tsx";
import { Helmet } from "react-helmet-async";
import "./Form.css";

interface BasicTextFieldsProps {
  title: string;
  btnTitle: string;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  handleAction: () => void;
  SignUpComponent?: JSX.Element;
  LoginInComponent?: JSX.Element;
  pwdtxt?: string;
}

const BasicTextFields: React.FC<BasicTextFieldsProps> = ({
  title,
  btnTitle,
  setPassword,
  setEmail,
  handleAction,
  SignUpComponent,
  LoginInComponent,
  pwdtxt,
}) => {
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="formContainer">
      <Helmet>
        <title>Login/Signup page</title>
        <meta name="description" content="contains login/signup details" />
        <link rel="canonical" href="/login" />
      </Helmet>
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
          onChange={handleEmailChange}
        />
        <TextField
          id="password"
          label="Enter Your Password"
          variant="outlined"
          onChange={handlePasswordChange}
        />
        <p>{pwdtxt}</p>
        <BasicButtons btnTitle={btnTitle} handleAction={handleAction} />
        {SignUpComponent}
        {LoginInComponent}
      </Box>
    </div>
  );
};

export default BasicTextFields;
