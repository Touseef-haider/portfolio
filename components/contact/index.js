/* eslint-disable jsx-a11y/alt-text */
import styles from "./contact.module.css";
import Image from "next/image";
import Location from "../../public/pin.png";
import Email from "../../public/mail.png";
import Call from "../../public/smartphone.png";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <h1>Contact</h1>
      </div>
      <div className={styles.controls}>
        <div className={styles.approach}>
          <div className={styles.details}>
            <div className={styles.icon}>
              <Image src={Location} height={20} width={20} />
            </div>
            <div className={styles.detail}>
              <h2>Location: </h2>
              <small>A108 Adam Street, New York, NY 535022</small>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.icon}>
              <Image src={Email} height={20} width={20} />
            </div>
            <div className={styles.detail}>
              <h2>Email: </h2>
              <small>touseefhaider355@gmail.com</small>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.icon}>
              <Image src={Call} height={20} width={20} />
            </div>
            <div className={styles.detail}>
              <h2>Call: </h2>
              <small>+923312924590</small>
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
            <button type={"submit"} className={styles.sendMessageBtn}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
