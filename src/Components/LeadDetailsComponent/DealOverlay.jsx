// DealOverlay.js
import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const DealOverlay = ({
  isDealOverlay,
  handleOverlayToggle,
  dealName,
  setDealName,
  dealStage,
  setDealStage,
  contactOwner,
  setContactOwner,
  DealStageDB,
  ContactOwnerDB,
  dependentProperties,
  isDependentProperties,
  setIsDealOverlay,
}) => {
  return (
    <Box
      className={`right ${isDealOverlay ? "overlayOpened" : "overlayClosed"}`}
      bgcolor={"lightgreen"}
      width={"40%"}
      border={"1px solid black"}
    >
      <h2>Create deal</h2>
      <Box border={"1px solid black"}>
        <Typography>Deal overlay</Typography>
        <TextField
          id="dealName"
          label="Deal name"
          variant="filled"
          value={dealName}
          required={true}
          style={{ width: "100%" }}
          onChange={(e) => setDealName(e.target.value)}
        />
        <FormControl variant="filled" style={{ width: "100%" }}>
          <InputLabel id="dealStage">Deal stage</InputLabel>
          <Select
            id="dealStage"
            variant="filled"
            value={dealStage}
            style={{ textAlign: "left" }}
            onChange={(e) => setDealStage(e.target.value)}
          >
            {DealStageDB.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Render dependent properties if required */}
        {isDependentProperties && (
          <Box>
            {dealStage === "Interview #1" || dealStage === "Interview #2" ? (
              <FormControl variant="filled" style={{ width: "100%" }}>
                <InputLabel id="interviewType">Interview Type</InputLabel>
                <Select
                  id="interviewType"
                  variant="filled"
                  value={dependentProperties.interviewType}
                  style={{ textAlign: "left" }}
                  onChange={(e) => {
                    // Handle changes in interview type
                    // e.g., setDependentProperties({ ...dependentProperties, interviewType: e.target.value });
                  }}
                >
                  {/* Add options for interview types */}
                </Select>
              </FormControl>
            ) : dealStage === "Contract send" ? (
              <TextField
                id="contractDetails"
                label="Contract Details"
                variant="filled"
                value={dependentProperties.contractDetails}
                onChange={(e) => {
                  // Handle changes in contract details
                  // e.g., setDependentProperties({ ...dependentProperties, contractDetails: e.target.value });
                }}
              />
            ) : dealStage === "Closed won" || dealStage === "Closed lost" ? (
              <TextField
                id="closedDetails"
                label="Closed Details"
                variant="filled"
                value={dependentProperties.closedDetails}
                onChange={(e) => {
                  // Handle changes in closed details
                  // e.g., setDependentProperties({ ...dependentProperties, closedDetails: e.target.value });
                }}
              />
            ) : null}
          </Box>
        )}
        <FormControl variant="filled" style={{ width: "100%" }}>
          <InputLabel id="dealStage">Deal stage</InputLabel>
          <Select
            id="dealStage"
            variant="filled"
            value={dealStage}
            style={{ textAlign: "left" }}
            onChange={(e) => {
              setDealStage(e.target.value);
            }}
          >
            {DealStageDB.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled">
          <InputLabel id="contactOwner">Contact Owner</InputLabel>
          <Select
            id="contactOwner"
            variant="filled"
            value={contactOwner}
            style={{ textAlign: "left" }}
            onChange={(e) => setContactOwner(e.target.value)}
          >
            {ContactOwnerDB.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setIsDealOverlay(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" color="success">
            Create deal
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DealOverlay;
