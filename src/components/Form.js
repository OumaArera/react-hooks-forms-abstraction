import React, { useState } from "react";

const Form = () => {
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    admin: false
  });
  // const [lastName, setLastName] = useState("Henry");

  const handleChange = event => {
    const name = event.target.name;
    let value = event.target.value

    if (event.target.type === "checkbox"){
      value = event.target.checked;
    }
    setDataForm({
      ...dataForm,
      [name]:value
    })
  }

  const handleSubmit = event =>{
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" onChange={handleChange} value={dataForm.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={dataForm.lastName} />
      <input name="admin" type="checkbox" onChange={handleChange} value={dataForm.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;


