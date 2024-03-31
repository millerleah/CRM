import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const ScoreTable = (
  {
    // data, columns, selectColumns, selectOptions
  }
) => {
  const initialData = [
    {
      id: 1,
      Criteria: "Participant can sell himself?",
      MaxPoints: 20,
      StudentsPoints: 18,
      Notes:
        "The student provided a clear, confident presentation of themselves and their goals.",
    },
    {
      id: 2,
      Criteria: "Fits into the DI values (motivation, bebevolence, resilience)",
      MaxPoints: 20,
      StudentsPoints: 18,
      Notes: "The student demonstrated all the DI values through examples.",
    },
    {
      id: 3,
      Criteria: "Can Follow the course in English (Yes/No)",
      MaxPoints: 20,
      StudentsPoints: 20,
      Notes: "Confirmed ability to follow English.",
    },
    {
      id: 5,
      Criteria: "Has an academic degree, and if it's a STEM degree",
      MaxPoints: 5,
      StudentsPoints: 4,
      Notes: "Holds a STEM degree in Computer Science.",
    },
    {
      id: 6,
      Criteria: "Has done a coding project learned by themselves",
      MaxPoints: 20,
      StudentsPoints: 19,
      Notes:
        "Provided evidence of a comprehensive coding project related to data analysis.",
    },
    {
      id: 7,
      Criteria: "Wants to learn in the next following months",
      MaxPoints: 15,
      StudentsPoints: 13,
      Notes:
        "Expressed a strong, clear commitment to advancing their skills in the near future.",
    },
    {
      id: 8,
      Criteria: "Total Score",
      MaxPoints: 100,
      StudentsPoints: 0,
    },
  ];

  const [data, setData] = useState(initialData);
  const [originalData, setOriginalData] = useState(initialData);

  useEffect(() => {
    // Calculate the sum of StudentsPoints from all objects
    const sumStudentsPoints = data
      .filter((item) => item.id !== 8) // Exclude the object with ID 8
      .reduce((acc, curr) => acc + curr.StudentsPoints, 0);

    // Update the StudentsPoints for the object with ID 8
    setData((prevData) =>
      prevData.map((item) =>
        item.id === 8 ? { ...item, StudentsPoints: sumStudentsPoints } : item
      )
    );
  }, [data]);
  const handleStudentsPointsChange = (id, value) => {
    let parsedValue = parseInt(value, 10);
    parsedValue = isNaN(parsedValue) ? 0 : parsedValue; // If parsing fails, set it to 0

    // Check if the input value is less than 0, if it is, set it to 0
    parsedValue = Math.max(parsedValue, 0);

    const updatedData = data.map((item) =>
      item.id === id ? { ...item, StudentsPoints: parsedValue } : item
    );

    // Validate against the maximum points
    updatedData.forEach((item) => {
      if (item.StudentsPoints > item.MaxPoints) {
        item.StudentsPoints = item.MaxPoints;
      }
    });

    // Calculate the sum of StudentsPoints from all objects
    const sumStudentsPoints = updatedData
      .filter((item) => item.id !== 8) // Exclude the object with ID 8
      .reduce((acc, curr) => acc + curr.StudentsPoints, 0);

    // Update the StudentsPoints for the object with ID 8
    setData((prevData) =>
      prevData.map((item) =>
        item.id === 8 ? { ...item, StudentsPoints: sumStudentsPoints } : item
      )
    );

    setData(updatedData);
  };

  const handleNotesChange = (id, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, Notes: value } : item
    );
    setData(updatedData);
  };

  const handleSave = () => {
    // Logic to save the data
    console.log("Data saved:", data);
  };

  const handleCancel = () => {
    // Revert back to the original data
    setData(originalData);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Criteria</TableCell>
              <TableCell>Maximum Points</TableCell>
              <TableCell>Student's Score</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.Criteria}</TableCell>
                <TableCell>{row.MaxPoints}</TableCell>
                <TableCell>
                  {row.id !== 8 ? (
                    <TextField
                      type="number"
                      value={row.StudentsPoints === 0 ? "" : row.StudentsPoints} // Set empty string if StudentsPoints is 0
                      onChange={(e) =>
                        handleStudentsPointsChange(row.id, e.target.value)
                      }
                    />
                  ) : (
                    <span>{row.StudentsPoints}</span>
                  )}
                </TableCell>
                {/* Conditionally render the note box */}
                {row.id !== 8 && (
                  <TableCell>
                    <TextField
                      value={row.Notes}
                      onChange={(e) =>
                        setData((prevData) =>
                          prevData.map((item) =>
                            item.id === row.id
                              ? { ...item, Notes: e.target.value }
                              : item
                          )
                        )
                      }
                      multiline
                      fullWidth
                      rows={4} // Adjust the number of rows as needed
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ScoreTable;
