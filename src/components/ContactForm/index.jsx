import "./index.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [sendStatus, setSendStatus] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setSendStatus("Sending");

    emailjs
      .sendForm(
        "service_gbhel8j",
        "template_6h0cmsc",
        form.current,
        "boMIdbpmZB6qujKMl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendStatus("Message sent.");
        },
        (error) => {
          console.log(error.text);
          setSendStatus("Error! Please email me@ckboyt.com directly.");
        }
      );
  };

  return (
    <div id="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label className="form-row">
          Name:
          <input type="text" name="user_name"></input>
        </label>
        <label className="form-row">
          Email:
          <input type="email" name="user_email"></input>
        </label>
        <label className="form-textarea">
          Message:
          <textarea name="message" rows="8"></textarea>
        </label>
        <div id="send-bar">
          <p>
            {sendStatus}
            {sendStatus === "Sending" ? <span id="dots">&#x2026;</span> : ""}
          </p>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
