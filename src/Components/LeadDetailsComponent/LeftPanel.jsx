import React from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  ButtonGroup,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const LeftPanel = ({
  setIsAddingNote,
  setIsAddingTask,
  setNewNoteContent,
  setNewTaskDescription,
  isAddingNote,
  isAddingTask,
  notes,
  tasks,
  handleNoteEdit,
  handleTaskEdit,
  isGeneralInfoOpen,
  setIsGeneralInfoOpen,
  LeadDetailsDB,
  setFirstName,
  setLastName,
  setEmail,
  setMobilePhone,
  setPhoneNumber,
  setSource,
  setForm,
  setCourse,
  setStartDate,
  setContactOwner,
  setLeadStatus,
  setCampus,
  countriesDB,
  contactOwnerDB,
  leadStatusDB,
  newNoteContent,
  newTaskDescription,
  campus,
  CountriesDB,
  phoneNumber,
  mobilePhone,
  email,
  firstName,
  lastName,
  startDate,
  course,
  Form,
  LeadStatusDB,
  leadStatus,
  ContactOwnerDB,
  contactOwner,
  source,
}) => {
  const handleNoteButtonClick = () => {
    setIsAddingNote(true);
  };

  const handleTaskButtonClick = () => {
    setIsAddingTask(true);
  };

  const handleNoteAdd = () => {
    // Add logic to save the new note
    setIsAddingNote(false); // Close the add note section after saving
    setNewNoteContent(""); // Clear the input field after saving
    // You can call a function to save the new note content here
  };

  const handleTaskAdd = () => {
    // Add logic to save the new task
    setIsAddingTask(false); // Close the add task section after saving
    setNewTaskDescription(""); // Clear the input field after saving
    // You can call a function to save the new task description here
  };

  return (
    <Box
      className="left"
      width={"25%"}
      bgcolor={"yellow"}
      border={"1px solid black"}
      maxHeight={"100%"}
    >
      <Box
        className="shortInfo"
        padding={"5px"}
        borderBottom={"1px solid black"}
      >
        <Box className="avatar" display={"flex"}>
          <Avatar style={{ margin: "10px" }}>NS</Avatar>
          <Box margin={"10px"}>
            <Typography textAlign={"left"} fontSize={"1.1rem"}>
              {LeadDetailsDB["Full Name"]}
            </Typography>
            <Typography fontSize={"0.9rem"}>
              {LeadDetailsDB["Email"]}
            </Typography>
          </Box>
        </Box>
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button onClick={handleNoteButtonClick}>Add Note</Button>
          {/* Text field for adding a new note */}
          {isAddingNote && (
            <Box>
              <TextField
                label="New Note"
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
              />
              <Button onClick={() => setIsAddingNote(false)}>Cancel</Button>
              <Button onClick={handleNoteAdd}>Save Note</Button>
            </Box>
          )}
          <Button>Email</Button>
          <Button>Call</Button>
          {/* Button to add a new task */}
          <Button onClick={handleTaskButtonClick}>Add Task</Button>
          {/* Text field for adding a new task */}
          {isAddingTask && (
            <Box>
              <TextField
                label="New Task"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
              />
              <Button onClick={() => setIsAddingTask(false)}>Cancel</Button>
              <Button onClick={handleTaskAdd}>Save Task</Button>
            </Box>
          )}
          <Button>Meeting</Button>
        </ButtonGroup>
        {/* Render notes */}
        <Box>
          {notes.map((note) => (
            <div key={note.id}>
              <TextField
                value={note.content}
                onChange={(e) => handleNoteEdit(note.id, e.target.value)}
              />
              <Typography>{note.timestamp}</Typography>
            </div>
          ))}
        </Box>
        {/* Render tasks */}
        <Box>
          {tasks.map((task) => (
            <div key={task.id}>
              <TextField
                value={task.description}
                onChange={(e) => handleTaskEdit(task.id, e.target.value)}
              />
              <Typography>{task.deadline}</Typography>
              <Typography>
                {task.completed ? "Completed" : "Pending"}
              </Typography>
            </div>
          ))}
        </Box>
      </Box>
      <Box borderBottom={"1px solid black"}>
        <Typography
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          onClick={() => setIsGeneralInfoOpen(!isGeneralInfoOpen)}
          style={{ cursor: "pointer" }}
        >
          About
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          className={`generalInfo ${isGeneralInfoOpen ? "" : "closed"}`}
        >
          <FormControl variant="filled">
            <InputLabel id="campus">Campus</InputLabel>
            <Select
              id="campus"
              label="Campus"
              labelId="campus"
              variant="filled"
              value={campus}
              style={{ textAlign: "left" }}
              onChange={(e) => {
                setCampus(e.target.value);
              }}
            >
              {CountriesDB.map((option, optionIndex) => (
                <MenuItem key={optionIndex} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="Source"
            label="Source"
            variant="filled"
            value={source}
            onChange={(e) => {
              setSource(e.target.value);
            }}
          />
          <FormControl variant="filled">
            <InputLabel id="contactOwner">Contact Owner</InputLabel>
            <Select
              id="contactOwner"
              variant="filled"
              value={contactOwner}
              style={{ textAlign: "left" }}
              onChange={(e) => {
                setContactOwner(e.target.value);
              }}
            >
              {ContactOwnerDB.map((option, optionIndex) => (
                <MenuItem key={optionIndex} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="filled">
            <InputLabel id="leadStatus">Lead Status</InputLabel>
            <Select
              id="leadStatus"
              variant="filled"
              value={leadStatus}
              style={{ textAlign: "left" }}
              onChange={(e) => {
                setLeadStatus(e.target.value);
              }}
            >
              {LeadStatusDB.map((option, optionIndex) => (
                <MenuItem key={optionIndex} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="Form"
            label="Form"
            variant="filled"
            value={Form}
            onChange={(e) => {
              setForm(e.target.value);
            }}
          />
          <TextField
            id="Course"
            label="Course"
            variant="filled"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          />
          <TextField
            id="StartDate"
            label="Start Date"
            variant="filled"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button style={{ width: "45%" }}>Save</Button>
            <Button style={{ width: "45%" }}>Cancel</Button>
          </div>
        </Box>
      </Box>
      <Box borderBottom={"1px solid black"}>
        <Typography
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          onClick={() => setIsGeneralInfoOpen(!isGeneralInfoOpen)}
          style={{ cursor: "pointer" }}
        >
          General information
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          className={`generalInfo ${isGeneralInfoOpen ? "" : "closed"}`}
        >
          <TextField
            id="firstName"
            label="First name"
            variant="filled"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            id="lastName"
            label="Last name"
            variant="filled"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="mobilePhone"
            label="Mobile Phone Number"
            variant="filled"
            value={mobilePhone}
            onChange={(e) => {
              setMobilePhone(e.target.value);
            }}
          />
          <TextField
            id="PhoneNumber"
            label="Phone number"
            variant="filled"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button style={{ width: "45%" }}>Save</Button>
            <Button style={{ width: "45%" }}>Cancel</Button>
          </div>
        </Box>
      </Box>
      {/* <Box borderBottom={"1px solid black"}>
            <Typography
              fontSize={"1.5rem"}
              fontWeight={"bold"}
              onClick={() => setIsFormOpen(!isFormOpen)}
              style={{ cursor: "pointer" }}
            >
              Application Form
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              className={`form ${isFormOpen ? "" : "closed"}`}
            >
              {LeadForm &&
                Object.keys(LeadForm).map((questionId) => (
                  <TextField
                    key={questionId}
                    id={questionId}
                    label={questionId}
                    variant="filled"
                    value={LeadForm[questionId]}
                    onChange={(e) => {
                      // Realize logic for change answer on question... for example update states (useState())
                    }}
                  />
                ))}
            </Box>
          </Box> */}
    </Box>
  );
};

export default LeftPanel;
