import React from "react";
import Button from "@mui/material/Button";

interface BasicButtonsProps {
  btnTitle: string;
  handleAction: () => void;
}

const BasicButtons: React.FC<BasicButtonsProps> = ({
  btnTitle,
  handleAction,
}) => {
  return (
    <Button
      color="primary"
      style={{ width: "55px", margin: "10px", padding: "8px" }}
      variant="contained"
      onClick={handleAction}
    >
      {btnTitle}
    </Button>
  );
};

export default BasicButtons;
