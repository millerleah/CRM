// ActivityBox.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const ActivityBox = ({ content }) => {
  return (
    <Box border={"1px solid black"} height={"100%"}>
      {Object.values(content).map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}
    </Box>
  );
};

export default ActivityBox;
