import "./index.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sendStatus, setSendStatus] = useState("");
  const [sendError, setSendError] = useState("false");

  const form = useRef();

  const validateEmail = (email) => {
    const regex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "user_name") {
      setName(inputValue);
    } else if (inputName === "user_email") {
      setEmail(inputValue);
    } else {
      setMsg(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      setSendError(true);
      setSendStatus("All fields are required.");
    } else if (!validateEmail(email)) {
      setSendError(true);
      setSendStatus("Please enter a valid email address.");
    } else {
      setSendError(false);
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
            setSendStatus("Message sent!");
          },
          (error) => {
            console.log(error.text);
            setSendError(true);
            setSendStatus("Server error: Please email me@ckboyt.com directly.");
          }
        );
    }
  };

  return (
    <div id="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label className="form-row">
          Name:
          <input
            value={name}
            type="text"
            name="user_name"
            onChange={handleInputChange}
          ></input>
        </label>
        <label className="form-row">
          Email:
          <input
            value={email}
            type="text"
            name="user_email"
            onChange={handleInputChange}
          ></input>
        </label>
        <label className="form-textarea">
          Message:
          <textarea
            value={msg}
            name="message"
            rows="8"
            onChange={handleInputChange}
          ></textarea>
        </label>
        <div id="send-bar">
          <p style={sendError ? { color: "#ffc0eb" } : {}}>
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
