import React from "react";
// import { useState, useEffect } from "react";
import styles from "../contact/Contact.module.scss";

const Contact = () => {
  // const initialValues = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   message: "",
  //   terms: ""
  // }

  // const [formValues, setFormValues ] = useState(initialValues);
  // const [formErrors, setFormErrors ] = useState({});
  // const [isSubmit, setIsSubmit ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    alert("Success!");
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if(Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues)
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formErrors]);

  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormValues({...formValues, [name]: value})
  // }

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "First name is required";
  //   }
  //   if (!values.lastName) {
  //     errors.lastName = "Last name is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "This is a hint text to help the user";
  //   }
  //   if (!values.message) {
  //     errors.message = "Please enter a message";
  //   }
  //   if (!values.terms) {
  //     errors.terms = "Agreeing to the terms is required";
  //   }
  //   return errors;
  // };

  return (
    <section className={styles.contact}>
      <div className={styles.contact_heading}>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>
      </div>
      <div className={styles.contact_form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.name}>
            <div className={styles.name_first}>
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                name="First name"
                id="first_name"
                placeholder="Enter your first name"
                required
                // value={formValues.firstName}
                // onChange={handleChange}
              />
              {/* <p>{formErrors.firstName}</p> */}
            </div>

            <div className={styles.name_last}>
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                name="Last name"
                id="last_name"
                placeholder="Enter your last name"
                required
                // value={formValues.lastName}
                // onChange={handleChange}
              />
              {/* <p>{formErrors.lastName}</p> */}
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="yourname@email.com"
              required
              // value={formValues.email}
              // onChange={handleChange}
            />
            {/* <p>{formErrors.email}</p> */}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="Message"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
              // value={formValues.message}
              // onChange={handleChange}
            ></textarea>
            {/* <p>{formErrors.message}</p> */}
          </div>

          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="Checkbox"
              id="checkbox"
              required
              // value={formValues.terms}
              // onChange={handleChange}
            />
            <label htmlFor="checkbox">
              You agree to providing your data to Suvwe Money who may contact
              you.
            </label>
          </div>

          <button id="btn__submit" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
