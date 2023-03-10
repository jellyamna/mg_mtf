import React from "react";

const StartDate = ({startdate,enddate, status}) => {

  if (status === "Not Started") {
    return <></>;
  }
  if (status === "On Progress") {
    return <h5 style={{ "text-align": "center" }}>Start Date : {startdate}</h5>;
  }
  if (status === "Done") {
    return (
      <>
        <h5 style={{ "text-align": "center" }}>Start Date : {startdate}</h5>
        <h5 style={{ "text-align": "center" }}>End Date : {enddate}</h5>
      </>
    );
  }
};

export default StartDate;
