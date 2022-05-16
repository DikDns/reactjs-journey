import React from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData(() => ({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
      employment: "",
      favColor: "",
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          name="employment"
          id="unemployed"
          value="unemployed"
          onChange={handleChange}
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          name="employment"
          id="part-time"
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          name="employment"
          id="full-time"
          value="full-time"
          onChange={handleChange}
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        name="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="" disabled>
          -- Choose --
        </option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />

      <button>Submit</button>
    </form>
  );
}

export default App;
