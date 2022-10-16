import { useState } from "react";
import "./AddPerson.css";
export default function AddPerson() {
  
  return (
    <section>
      <div className="card pa-30 mr-30">
        <form data-testid="add-person-form">
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Person Name
            </label>
            <input
              placeholder="Enter Person Name"
              name="name"
              data-testid="person-name-input"
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="number" className="mb-3">
              Phone Number
            </label>
            <input
              placeholder="Enter Phone Number"
              name="number"
              data-testid="phone-number-input"
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="email" className="mb-3">
              Email
            </label>
            <input
              placeholder="Enter Email Address"
              name="email"
              data-testid="person-email-input"
            />
          </div>
          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="add-person-button">
              Add Person
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
