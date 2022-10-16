import { useState } from "react";
import "./AddPerson.css";
export default function AddPerson({ addToContacts }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const clearInput = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNumberValid = phoneNumber.length === 10 && !isNaN(phoneNumber);
    const isNameValid = name.length > 0;
    const emailIsValid = email.length > 0;

    if (isNumberValid && isNameValid && emailIsValid) {
      addToContacts({ name, email, phoneNumber });
      clearInput();
      alert("Successfully Added");
    } else {
      alert("Enter Valid Data");
    }
  };

  return (
    <section>
      <div className="card pa-30 mr-30">
        <form data-testid="add-person-form">
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Person Name
            </label>
            <input
              value={name}
              placeholder="Enter Person Name"
              name="name"
              data-testid="person-name-input"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="number" className="mb-3">
              Phone Number
            </label>
            <input
              value={phoneNumber}
              placeholder="Enter Phone Number"
              name="number"
              data-testid="phone-number-input"
              type="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="email" className="mb-3">
              Email
            </label>
            <input
              value={email}
              placeholder="Enter Email Address"
              name="email"
              data-testid="person-email-input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="layout-row justify-content-end">
            <button
              type="submit"
              className="mx-0"
              data-testid="add-person-button"
              onClick={handleSubmit}
            >
              Add Person
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
