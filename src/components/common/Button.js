import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons({ btnTitle, handleAction }) {
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
}
