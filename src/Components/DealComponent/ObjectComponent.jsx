import React from "react";
import { useDrag } from "react-dnd";

const ObjectComponent = ({
  id,
  name,
  status,
  campus,
  amount,
  priority,
  cohort,
  onStatusChange,
}) => {
  const [, drag] = useDrag({
    type: "OBJECT",
    item: { id, status, campus },
  });

  return (
    <div
      ref={drag}
      style={{ border: "1px solid #000", margin: "4px", padding: "8px" }}
    >
      <div
      // style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>{name}</div>
      </div>
      <div
      // style={{ display: "flex", alignItems: "center" }}
      >
        <div
        // style={{
        //   backgroundColor: "red",
        //   width: "10px",
        //   height: "10px",
        //   borderRadius: "50px",
        // }}
        ></div>
        priority: {priority}
      </div>
      <div>Cohort: {cohort}</div>
      <div>Finacing Program: Any</div>
      <div>Contact Owner</div>
      {/* Add Onwer */}
      <div>Amount: {amount}</div>
    </div>
  );
};

export default ObjectComponent;
