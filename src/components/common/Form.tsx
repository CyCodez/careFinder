import React, { ChangeEvent } from "react";
import Box from "@mui/material/Box";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { TextField, IconButton, InputAdornment } from "@mui/material";
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
  LoadingState: any;
  isLoading: boolean;
  setisLoading: boolean;
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
  LoadingState,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
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
          autoComplete="off"
          sx={{
            backgroundColor: "#E5F3FD",
          }}
          label="Enter Your Email"
          variant="standard"
          onChange={handleEmailChange}
        />
        <TextField
          id="password"
          autoComplete="off"
          label="Enter Your Password"
          variant="standard"
          sx={{
            backgroundColor: "#E5F3FD",
          }}
          type={showPassword ? "text" : "password"}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <p>{pwdtxt}</p>

        {isLoading ? (
          LoadingState
        ) : (
          <BasicButtons btnTitle={btnTitle} handleAction={handleAction} />
        )}
        {SignUpComponent}
        {LoginInComponent}
      </Box>
  </div>
  );
};

export default BasicTextFields;
