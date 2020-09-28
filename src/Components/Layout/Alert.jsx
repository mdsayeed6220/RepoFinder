import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <h3 style={{ textAlign: "center" }}>
          {" "}
          <i className="fas fa-exclamation-triangle"></i> {alert.msg}{" "}
        </h3>
      </div>
    )
  );
};

export default Alert;
