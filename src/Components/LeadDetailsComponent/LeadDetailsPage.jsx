// LeadDetailsPage.js
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

import "./LeadDetailsPage.css";
import NavBar from "../NavBarComponent/NavBar";

// import GeneralInfo from "./GeneralInfo";
import ActionsPanel from "./ActionsPanel";
import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";

import CentralPanelActivitiesInfoDB from "../../source/CentralPanelActivitesInfoDB.json";
import CentralPanelInfoDB from "../../source/CentralPanelInfo.json";
import LeadDetailsDB from "../../source/LeadDetailsDB.json";
import CountriesDB from "../../source/CountriesDB.json";
import ContactOwnerDB from "../../source/ContactOwnersDB.json";
import LeadStatusDB from "../../source/LeadStatusDB.json";
import DealStageDB from "../../source/DealStageDB.json";
import DependentPropertiesDB from "../../source/DependentPropertiesDB.json";

const LeadDetailsPage = () => {
  // Notes and Tasks states
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);

  // Left panel states
  const [firstName, setFirstName] = useState(LeadDetailsDB["First name"]);
  const [lastName, setLastName] = useState(LeadDetailsDB["Last name"]);
  const [email, setEmail] = useState(LeadDetailsDB["Email"]);
  const [mobilePhone, setMobilePhone] = useState(LeadDetailsDB["Mobile phone"]);
  const [phoneNumber, setPhoneNumber] = useState(LeadDetailsDB["Phone number"]);
  const [source, setSource] = useState(LeadDetailsDB["Source"]);
  const [Form, setForm] = useState(LeadDetailsDB["Form"]);
  const [course, setCourse] = useState(LeadDetailsDB["Course"]);
  const [startDate, setStartDate] = useState(LeadDetailsDB["Start Date"]);
  const [contactOwner, setContactOwner] = useState(
    LeadDetailsDB["Contact Owner"]
  );
  const [campus, setCampus] = useState(LeadDetailsDB["Campus"]);
  const [leadStatus, setLeadStatus] = useState(LeadDetailsDB["Lead Status"]);
  const LeadForm = LeadDetailsDB.FormAnswers;

  // State for activity box
  const [activityBox, setActivityBox] = useState("");
  // State for guide content
  const [guideContent, setGuideContent] = useState("");

  //toggle
  const [isGeneralInfoOpen, setIsGeneralInfoOpen] = useState(true);

  // Overlay states
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isDealOverlay, setIsDealOverlay] = useState(false);

  // State for deal overlay
  const [dealName, setDealName] = useState(LeadDetailsDB["Full Name"]);
  const [dealStage, setDealStage] = useState(LeadDetailsDB["Deal"]);
  const [isDependentProperties, setIsDependentProperties] = useState(false);
  const [dependentProperties, setDependentProperties] = useState([]);
  const [priority, setPriority] = useState(LeadDetailsDB.Priority);
  const [cohort, setCohort] = useState(LeadDetailsDB["Cohort#"]);
  const [amount, setAmount] = useState(LeadDetailsDB.Amount);
  const [currency, setCurrency] = useState(LeadDetailsDB.Currency);

  // Function to handle activity button clicks
  const handleActivityButtonClick = (buttonName) => {
    setActivityBox(CentralPanelActivitiesInfoDB[buttonName]);
  };
  // Function to handle guide button clicks
  const handleButtonClick = (buttonName) => {
    setGuideContent(CentralPanelInfoDB[buttonName]);
  };

  // Function to handle editing note content
  const handleNoteEdit = (id, content) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content: content } : note
    );
    setNotes(updatedNotes);
  };
  // Function to handle editing task description
  const handleTaskEdit = (id, description) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, description: description } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    if (dealStage === "Interview #1" || "Interview #2") {
      setIsDependentProperties(true);
      setDependentProperties(DependentPropertiesDB.interviews);
    } else if (dealStage === "Contract send") {
      setIsDependentProperties(true);
      setDependentProperties(DependentPropertiesDB["Contract send"]);
    } else if (dealStage === "Closed won" || "Closed lost") {
      setIsDependentProperties(true);
      setDependentProperties(DependentPropertiesDB.Closed);
    } else {
      setIsDependentProperties(false);
      setDependentProperties("");
    }
  }, [dealStage]);

  return (
    <Box height={"90vh"} display="flex" flexDirection="column">
      <NavBar pageName={"Lead Details"} />
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        margin={"10px"}
        height={"100%"}
        maxHeight={"100%"}
      >
        <LeftPanel
          notes={notes}
          tasks={tasks}
          setIsAddingNote={setIsAddingNote}
          setIsAddingTask={setIsAddingTask}
          setNewNoteContent={setNewNoteContent}
          setNewTaskDescription={setNewTaskDescription}
          isAddingNote={isAddingNote}
          isAddingTask={isAddingTask}
          // handleNoteEdit={handleNoteEdit}
          // handleTaskEdit={handleTaskEdit}
          LeadStatusDB={LeadStatusDB}
          LeadDetailsDB={LeadDetailsDB}
          campus={campus}
          source={source}
          contactOwner={contactOwner}
          CountriesDB={CountriesDB}
          firstName={firstName}
          lastName={lastName}
          email={email}
          mobilePhone={mobilePhone}
          phoneNumber={phoneNumber}
          Form={Form}
          course={course}
          startDate={startDate}
          ContactOwnerDB={ContactOwnerDB}
          isGeneralInfoOpen={isGeneralInfoOpen}
        />
        <CenterPanel
          activityBox={activityBox}
          handleActivityButtonClick={handleActivityButtonClick}
          guideContent={guideContent}
          handleButtonClick={handleButtonClick}
          isGeneralInfoOpen={isGeneralInfoOpen}
        />
        <ActionsPanel
          DealStageDB={DealStageDB}
          dealName={dealName}
          dealStage={dealStage}
          isDependentProperties={isDependentProperties}
          dependentProperties={dependentProperties}
          isFormOpen={isFormOpen}
          isDealOverlay={isDealOverlay}
        />
      </Box>
    </Box>
  );
};

export default LeadDetailsPage;
