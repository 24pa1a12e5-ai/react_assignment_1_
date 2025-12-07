import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FormDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No data submitted.</p>;

  return (
    <div className="details-container">
      <h2>Form Submission Details</h2>
      <ul className="details-list">
        {Object.entries(state).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button className="back-btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}
