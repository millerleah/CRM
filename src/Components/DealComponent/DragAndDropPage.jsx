import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import StageComponent from "./StageComponent";
import DealStageDB from "../../source/DealStageDB.json";
import LeadsDB from "../../source/LeadsDB.json";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Select, MenuItem, Checkbox } from "@mui/material";

const DragAndDropPage = () => {
  const [objects, setObjects] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  const [newStatus, setNewStatus] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState("All Campuses");
  const [selectedCohort, setSelectedCohort] = useState("All Cohorts");

  useEffect(() => {
    const loadedObjects = LeadsDB.filter(
      (lead) => lead["Lead Status"] === "In progress"
    ).map((lead) => ({
      id: lead.id,
      name: lead["Full Name"],
      status: lead["Deal"],
      campus: lead["Campus"],
      amount: lead["Amount"],
      priority: lead["Priority"],
      cohort: lead["Cohort"],
    }));
    setObjects(loadedObjects);
  }, []);

  const handleDrop = (objectId, newStatus) => {
    const draggedObject = objects.find((obj) => obj.id === objectId);

    setSelectedObject(draggedObject);
    setNewStatus(newStatus);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleConfirmMove = () => {
    const updatedObjects = objects.map((obj) =>
      obj.id === selectedObject.id ? { ...obj, status: newStatus } : obj
    );
    setObjects(updatedObjects);
    setDialogOpen(false);
  };

  const getObjectCountByStatus = (status) => {
    const filteredObjects = objects.filter(
      (obj) =>
        (selectedCampus === "All Campuses" || obj.campus === selectedCampus) &&
        (selectedCohort === "All Cohorts" || obj.cohort === selectedCohort) &&
        obj.status === status
    );
    return filteredObjects.length;
  };

  const getObjectCountByPriorityHigh = (status) => {
    const filteredObjects = objects.filter(
      (obj) =>
        (selectedCampus === "All Campuses" || obj.campus === selectedCampus) &&
        (selectedCohort === "All Cohorts" || obj.cohort === selectedCohort) &&
        obj.status === status &&
        obj.priority === "High"
    );
    return filteredObjects.length;
  };

  const getTotalRevenue = (stageName) => {
    const filteredStageObjects = objects.filter(
      (obj) =>
        (selectedCampus === "All Campuses" || obj.campus === selectedCampus) &&
        (selectedCohort === "All Cohorts" || obj.cohort === selectedCohort) &&
        obj.status === stageName
    );

    const totalRevenue = filteredStageObjects.reduce((acc, obj) => {
      return acc + obj.amount * getObjectCountByStatus(stageName);
    }, 0);

    return totalRevenue;
  };

  // const getTotalTarget = () => {
  //   // Calculate total target
  //   // You need to implement your own logic here to calculate the total target
  // };

  return (
    <DndProvider backend={HTML5Backend}>
      <Select
        value={selectedCampus}
        onChange={(e) => setSelectedCampus(e.target.value)}
      >
        <MenuItem value="All Campuses">All Campuses</MenuItem>
        <MenuItem value="Israel">Israel</MenuItem>
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="Morocco">Morocco</MenuItem>
      </Select>
      <Select
        value={selectedCohort}
        onChange={(e) => setSelectedCohort(e.target.value)}
      >
        <MenuItem value="All Cohorts">All Cohorts</MenuItem>
        <MenuItem value="TTA1">TTA1</MenuItem>
        <MenuItem value="TTA3">TTA3</MenuItem>
      </Select>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {DealStageDB.map((stageName) => {
          const filteredStageObjects = objects.filter(
            (obj) =>
              (selectedCampus === "All Campuses" ||
                obj.campus === selectedCampus) &&
              (selectedCohort === "All Cohorts" ||
                obj.cohort === selectedCohort) &&
              obj.status === stageName
          );

          return (
            <div key={stageName} style={{ width: "13%" }}>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                Total Leads: {getObjectCountByStatus(stageName)}
              </div>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                Total Potential: {getObjectCountByPriorityHigh(stageName)}
              </div>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                {stageName}
              </div>
              <StageComponent
                name={stageName}
                objects={filteredStageObjects}
                onDrop={handleDrop}
              />
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                Total Revenue: {getTotalRevenue(stageName)}
              </div>
              {/* Render Total Target and Total Revenue only for "Closed won" stage */}
              {stageName === "Closed won" && (
                <div>
                  <div style={{ textAlign: "center", marginTop: "10px" }}>
                    Total Target: 200000
                    {/* {getTotalTarget()} */}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Are you sure to move "${selectedObject?.name}" to "${newStatus}"?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleDialogClose}>
            Cancel
          </Button>
          <Button color="success" onClick={handleConfirmMove}>
            Move
          </Button>
        </DialogActions>
      </Dialog>
    </DndProvider>
  );
};

export default DragAndDropPage;
