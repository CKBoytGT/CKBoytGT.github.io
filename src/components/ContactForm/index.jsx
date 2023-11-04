import "./index.css";

const ContactForm = () => {
  return (
    <div id="contact-form">
      <form action="mailto:me@ckboyt.com" method="POST" encType="text/plain">
        <label className="form-row">
          Name:
          <input type="text" name="Name" autoComplete="on"></input>
        </label>
        <label className="form-row">
          Email:
          <input
            type="email"
            name="Preferred Contact Email"
            autoComplete="on"
          ></input>
        </label>
        <label className="form-textarea">
          Message:
          <textarea name="Message" rows="8"></textarea>
        </label>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
