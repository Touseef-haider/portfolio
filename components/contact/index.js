/* eslint-disable jsx-a11y/alt-text */
import styles from "./contact.module.css";
import Image from "next/image";
import Location from "../../public/pin.png";
import Email from "../../public/mail.png";
import Call from "../../public/smartphone.png";
import { useState } from "react";
import { personalInfo } from "../../utils/constant";
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!formData.email || !formData.name || !formData.message || !formData.subject) {
      setMessage("Please fill the form")
      setTimeout(() => {
        setMessage("")
      }, 3000)
      setLoading(false)
      return
    }
    

    const response = await axios.post("/api/email", {
      ...formData
    });


    if (response.data.message === "OK") {
      setLoading(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })

      setMessage("Email sent")
      setTimeout(() => {
        setMessage("")
      }, 3000)
    } else {
      setMessage(response.data.message)
      setLoading(false)

    }

  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <h1>CONTACT</h1>
      </div>
      <div className={styles.controls}>
        <div className={styles.approach}>
          <div className={styles.details}>
            <div className={styles.icon}>
              <Image src={Location} style={{ objectFit: "cover" }} height={20} width={20} />
            </div>
            <div className={styles.detail}>
              <h2>Location: </h2>
              <small>{personalInfo.address}</small>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.icon}>
              <Image src={Email} height={20} width={20} />
            </div>
            <div className={styles.detail}>
              <h2>Email: </h2>
              <small>{personalInfo.email}</small>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.icon}>
              <Image src={Call} height={20} width={20} />
            </div>
            <div className={styles.detail}>
              <h2>Call: </h2>
              <small>{personalInfo.phone}</small>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
            />
            <input
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              placeholder="You Email"
            />
            <input
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className={styles.subject}
              placeholder="Subject"
            />
            <textarea
              type="text"
              value={formData.message}
              className={styles.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Message"
            />
            {
              message !== "" ? <p style={{ textAlign: "center", color: `${message.includes("Email sent") ? "green":"red"}`, gridColumn: "1/3" }}>{message}</p> : ""
            }
            <button type={"submit"} className={styles.sendMessageBtn}>
              {loading ? "Please wait..." : "Hire Me"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
