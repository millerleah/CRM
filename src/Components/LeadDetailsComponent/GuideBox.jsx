// GuideBox.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const GuideBox = ({ content }) => {
  return (
    <Box border={"1px solid black"} height={"30%"} overflow="auto">
      {Object.values(content).map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}
    </Box>
  );
};

export default GuideBox;
