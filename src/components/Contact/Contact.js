import React, { useState } from "react";
import {validateEmail} from '../../utils/helpers';


function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;


  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(s) {

    if(s.target.name === 'email') {
        const isValid = validateEmail(s.target.value)
        
        if(!isValid){
            setErrorMessage("Your Email is not valid.");
        } else {
            setErrorMessage('');
        }     
    } else {
        if (!s.target.value.length) {
          setErrorMessage(`${s.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }

    if(!errorMessage) {  
        setFormState({ ...formState, [s.target.name]: s.target.value });
    }
    
  }

  function handleSubmit(s) {
      s.preventDefault();
      console.log(formState);
  }

  return (
    <section className = "text-white m-5 p-3 bg-gray-500 shadow-lg rounded">
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="mt-3 mb-3 flex flex-col">
          <label className= "mr-2" htmlFor="name">Name:</label>
          <input 
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          ></input>
        </div>
        <div className="mt-3 mb-3 flex flex-col">
          <label  className="mr-2" htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          ></input>
        </div>
        <div className="mt-3 mb-3 flex flex-col">
          <label  className="mr-2" htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
        </div>
        
        {errorMessage && (
            <div>
                <p className = "error-text">{errorMessage}</p>
            </div>
        )}
        
        <button className = "bg-white text-gray-500 pl-4 pr-4 pt-2 pb-2 rounded"  type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;