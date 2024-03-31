// ActionsPanel.js
import React from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import LeadDetailsDB from "../../source/LeadDetailsDB.json";

const ActionsPanel = ({
  isDealOverlay,
  handleCreateDeal,
  handleOverlayToggle,
  setIsDealOverlay,
}) => {
  // Assuming LeadDetailsDB has a property named "Deal"
  const { Deal } = LeadDetailsDB;

  return (
    <Box
      className={`right ${isDealOverlay ? "overlayClosed" : "overlayOpened"}`}
      bgcolor={"lightgreen"}
      width={"25%"}
      border={"1px solid black"}
    >
      <h3>Actions Panel</h3>
      <Box border={"1px solid black"} height={"10%"}>
        {/* Current Deal: {Deal} */}
        <Typography>Current Deal: {LeadDetailsDB.Deal}</Typography>{" "}
        {/* Use Deal from LeadDetailsDB */}
        <Button
          variant="contained"
          color="success"
          onClick={() => setIsDealOverlay(true)}
        >
          Create deal
        </Button>
      </Box>
      <Box border={"1px solid black"} height={"10%"}>
        <Button variant="outlined" color="primary">
          <Link
            // to={`/lead/${id}/deal`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Deal 1
          </Link>
        </Button>
      </Box>
      <Box border={"1px solid black"} height={"10%"}>
        <Typography>Contract</Typography>
        <Button
          variant="contained"
          color="success"
          // onClick={() => }
        >
          PandaDoc
        </Button>
      </Box>
      <Box border={"1px solid black"} height={"10%"}>
        <Typography>Whats App</Typography>
        <Button
          variant="contained"
          color="success"
          // onClick={() => }
        >
          Message
        </Button>
      </Box>
    </Box>
  );
};

export default ActionsPanel;
