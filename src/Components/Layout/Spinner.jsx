import React, { Fragment } from "react";
import roller from "./roller.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={roller}
        alt="Loading...."
        style={{
          width: "100px",
          top: "50%",
          position: "absolute",
          left: "45%",
        }}
      />
    </Fragment>
  );
};

export default Spinner;
