import "./index.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import validateEmail from "../../utils/helpers.js";

const ContactForm = () => {
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [sendStatus, setSendStatus] = useState({
    error_color: false,
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formFilled = [...Object.values(data)].every(Boolean);

    if (!formFilled) {
      setSendStatus({
        error_color: true,
        message: "All fields are required.",
      });
    } else if (!validateEmail(data.user_email)) {
      setSendStatus({
        error_color: true,
        message: "Please enter a valid email address.",
      });
    } else {
      setSendStatus({
        error_color: false,
        message: "Sending",
      });

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
            setSendStatus({
              error_color: false,
              message: "Message sent!",
            });
          },
          (error) => {
            console.log(error.text);
            setSendStatus({
              error_color: true,
              message: "Server error: Please email me@ckboyt.com directly.",
            });
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
            value={data.user_name}
            type="text"
            name="user_name"
            onChange={handleChange}
          ></input>
        </label>
        <label className="form-row">
          Email:
          <input
            value={data.user_email}
            type="text"
            name="user_email"
            onChange={handleChange}
          ></input>
        </label>
        <label className="form-textarea">
          Message:
          <textarea
            value={data.message}
            name="message"
            rows="8"
            onChange={handleChange}
          ></textarea>
        </label>
        <div id="send-bar">
          <p style={sendStatus.error_color ? { color: "#ffc0eb" } : {}}>
            {sendStatus.message}
            {sendStatus.message === "Sending" ? (
              <span id="dots">&#x2026;</span>
            ) : (
              ""
            )}
          </p>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
