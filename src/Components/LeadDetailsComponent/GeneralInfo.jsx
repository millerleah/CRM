// // GeneralInfo.js
// import React from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";

// const GeneralInfo = ({
//   isGeneralInfoOpen,
//   handleGeneralInfoToggle,
//   firstName,
//   setFirstName,
//   lastName,
//   setLastName,
//   email,
//   setEmail,
//   mobilePhone,
//   setMobilePhone,
//   phoneNumber,
//   setPhoneNumber,
//   source,
//   setSource,
//   contactOwner,
//   setContactOwner,
//   leadStatus,
//   setLeadStatus,
//   Form,
//   setForm,
//   course,
//   setCourse,
//   startDate,
//   setStartDate,
//   CountriesDB,
//   LeadStatusDB,
//   ContactOwnerDB,
// }) => {
//   return (
//     <Box borderBottom={"1px solid black"}>
//       <Typography
//         fontSize={"1.5rem"}
//         fontWeight={"bold"}
//         onClick={handleGeneralInfoToggle}
//         style={{ cursor: "pointer" }}
//       >
//         General information
//       </Typography>
//       <Box
//         display={"flex"}
//         flexDirection={"column"}
//         className={`generalInfo ${isGeneralInfoOpen ? "" : "closed"}`}
//       >
//         <TextField
//           id="firstName"
//           label="First name"
//           variant="filled"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <TextField
//           id="lastName"
//           label="Last name"
//           variant="filled"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <TextField
//           id="email"
//           label="Email"
//           variant="filled"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           id="mobilePhone"
//           label="Mobile Phone Number"
//           variant="filled"
//           value={mobilePhone}
//           onChange={(e) => setMobilePhone(e.target.value)}
//         />
//         <TextField
//           id="PhoneNumber"
//           label="Phone number"
//           variant="filled"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//         <FormControl variant="filled">
//           <InputLabel id="source">Source</InputLabel>
//           <Select
//             id="source"
//             variant="filled"
//             value={source}
//             onChange={(e) => setSource(e.target.value)}
//           >
//             {CountriesDB.map((option, optionIndex) => (
//               <MenuItem key={optionIndex} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         {/* Render other fields as needed */}
//         {/* Save and Cancel Buttons */}
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <Button style={{ width: "45%" }}>Save</Button>
//           <Button style={{ width: "45%" }}>Cancel</Button>
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default GeneralInfo;
