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
          top: "55%",
          position: "absolute",
          left: "45%",
        }}
      />
    </Fragment>
  );
};

export default Spinner;