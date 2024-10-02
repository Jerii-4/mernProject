import React from "react";
import "./Contact.css";
import msg_icon from "../../../assets/msg-icon.png";
import mail_icon from "../../../assets/mail-icon.png";
import phone_icon from "../../../assets/phone-icon.png";
import location_icon from "../../../assets/location-icon.png";
import white_arrow from "../../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ee2c273b-0168-4c66-aef5-76e50fdecf97");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a message <img src={msg_icon} />
        </h3>
        <p>
          feel free to reach out through contact information below. your
          feedback, questions and suggestions are important to us as we strive
          to provide exceptional service to our university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} />
            jerinthomas1235@gmail.com
          </li>
          <li>
            <img src={phone_icon} />
            8590219461
          </li>
          <li>
            <img src={location_icon} />
            83,massecheusests,california
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="Phone"
            placeholder="Enter Your Mobile Number"
            required
          />
          <label>Your Name</label>
          <textarea
            type="text"
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
            <img src={white_arrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
