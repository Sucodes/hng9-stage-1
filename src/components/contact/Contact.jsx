import React from "react";
import styles from "../contact/Contact.module.scss";

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Success!")
  }

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
              <label htmlFor="First name">First name</label>
              <input
                type="text"
                name="First name"
                id="first_name"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className={styles.name_last}>
              <label htmlFor="Last name">Last name</label>
              <input
                type="text"
                name="Last name"
                id="last_name"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="yourname@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
            ></textarea>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" name="Checkbox" id="checkbox" required/>
            <label htmlFor="Checkbox">
              You agree to providing your data to Suvwe Money who may contact
              you.
            </label>
          </div>

          <button id="btn_submit" type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
