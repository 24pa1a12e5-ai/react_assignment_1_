import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialErrors = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  phone: "",
  countryCode: "",
  country: "",
  city: "",
  pan: "",
  aadhaar: ""
};

export default function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    countryCode: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: ""
  });

  const [errors, setErrors] = useState(initialErrors);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validate = (field, value) => {
    let msg = "";

    if (!value.trim()) {
      msg = "This field is required";
    } else {
      if (field === "email" && !/^\S+@\S+\.\S+$/.test(value))
        msg = "Invalid email format";

      if (field === "phone" && !/^\d{10}$/.test(value))
        msg = "Phone must be 10 digits";

      if (field === "countryCode" && !/^\+\d+$/.test(value))
        msg = "Invalid country code";

      if (field === "pan" && !/^[A-Z]{5}\d{4}[A-Z]$/.test(value))
        msg = "Invalid PAN format";

      if (field === "aadhaar" && !/^\d{12}$/.test(value))
        msg = "Aadhaar must be 12 digits";
    }

    setErrors((prev) => ({ ...prev, [field]: msg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const isFormValid = Object.values(form).every((v) => v.trim() !== "") &&
    Object.values(errors).every((e) => e === "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/details", { state: form });
    }
  };

  const inputClass = (field) =>
    errors[field] ? "input error" : "input";

  return (
    <div className="container">
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit} className="form">

        {/* First Name */}
        <div className="field">
          <input
            className={inputClass("firstName")}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="err">{errors.firstName}</span>}
        </div>

        {/* Last Name */}
        <div className="field">
          <input
            className={inputClass("lastName")}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="err">{errors.lastName}</span>}
        </div>

        {/* Username */}
        <div className="field">
          <input
            className={inputClass("username")}
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && <span className="err">{errors.username}</span>}
        </div>

        {/* Email */}
        <div className="field">
          <input
            className={inputClass("email")}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="err">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="field">
          <div className="password-wrapper">
            <input
              className={inputClass("password")}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <span className="err">{errors.password}</span>}
        </div>

        {/* Country Code */}
        <div className="field">
          <input
            className={inputClass("countryCode")}
            type="text"
            name="countryCode"
            placeholder="Country Code (e.g., +91)"
            value={form.countryCode}
            onChange={handleChange}
          />
          {errors.countryCode && <span className="err">{errors.countryCode}</span>}
        </div>

        {/* Phone */}
        <div className="field">
          <input
            className={inputClass("phone")}
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="err">{errors.phone}</span>}
        </div>

        {/* Country */}
        <div className="field">
          <input
            className={inputClass("country")}
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
          />
          {errors.country && <span className="err">{errors.country}</span>}
        </div>

        {/* City */}
        <div className="field">
          <input
            className={inputClass("city")}
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
          {errors.city && <span className="err">{errors.city}</span>}
        </div>

        {/* PAN */}
        <div className="field">
          <input
            className={inputClass("pan")}
            type="text"
            name="pan"
            placeholder="PAN"
            value={form.pan}
            onChange={handleChange}
          />
          {errors.pan && <span className="err">{errors.pan}</span>}
        </div>

        {/* Aadhaar */}
        <div className="field">
          <input
            className={inputClass("aadhaar")}
            type="text"
            name="aadhaar"
            placeholder="Aadhaar"
            value={form.aadhaar}
            onChange={handleChange}
          />
          {errors.aadhaar && <span className="err">{errors.aadhaar}</span>}
        </div>

        <button className="submit-btn" type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
