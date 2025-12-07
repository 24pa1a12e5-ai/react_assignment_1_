import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import FormDetails from "./FormDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/details" element={<FormDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
