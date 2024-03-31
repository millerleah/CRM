// CenterPanel.js
import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import GuideBox from "./GuideBox";
import ScoreTable from "./ScoreTable";
import ActivityBox from "./ActivityBox"; // Import ActivityBox component

const CenterPanel = ({
  guideContent,
  handleButtonClick,
  activityBox,
  handleActivityButtonClick,
  isGeneralInfoOpen,
  setIsGeneralInfoOpen,
}) => {
  return (
    <Box
      className="center"
      bgcolor={"lightblue"}
      width={"50%"}
      border={"1px solid black"}
    >
      <p>Central Panel</p>
      <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button
          onClick={() =>
            handleButtonClick("objectives_of_pre_qualification_interview")
          }
        >
          Sales
        </Button>
        <Button onClick={() => handleButtonClick("pre_call_actions")}>
          Interview #1
        </Button>
        <Button onClick={() => handleButtonClick("discovery_call_questions")}>
          Interview #2
        </Button>
        <Button
          onClick={() => handleButtonClick("bootcamp_program_explanation")}
        >
          Scholarships
        </Button>
      </ButtonGroup>
      <Box>{guideContent && <GuideBox content={guideContent} />}</Box>
      <Box borderBottom={"1px solid black"}>
        <Typography
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          onClick={() => setIsGeneralInfoOpen(!isGeneralInfoOpen)}
          style={{ cursor: "pointer" }}
        >
          Score Table
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          className={`generalInfo ${isGeneralInfoOpen ? "" : "closed"}`}
        >
          <Box
          // border={"1px solid black"} height={"10%"}
          >
            <ScoreTable
            // data={ScoreTableDB}
            // columns={columns}
            // selectColumns={selectColumns}
            // selectOptions={selectOptions}
            />
          </Box>
        </Box>
      </Box>
      <Box>Activites Panel</Box>
      <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button onClick={() => handleActivityButtonClick("Activity")}>
          Activity
        </Button>
        <Button onClick={() => handleActivityButtonClick("Notes")}>
          Notes
        </Button>
        <Button onClick={() => handleActivityButtonClick("Emails")}>
          Emails
        </Button>
        <Button onClick={() => handleActivityButtonClick("Calls")}>
          Calls
        </Button>
        <Button onClick={() => handleActivityButtonClick("Tasks")}>
          Tasks
        </Button>
        <Button onClick={() => handleActivityButtonClick("Meetings")}>
          Meetings
        </Button>
      </ButtonGroup>
      <Box>{activityBox && <ActivityBox content={activityBox} />}</Box>
    </Box>
  );
};

export default CenterPanel;
