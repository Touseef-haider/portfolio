import styles from "./about.module.css";
import Image from "next/image";
import personalPhoto from "../../public/personal.jpeg";
import greaterThanIcon from "../../public/greater-than.png";

const About = () => {
  return (
    <div className={`${styles.container}`} id="about">
      <div className={styles.about}>
        <h1>ABOUT</h1>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className={styles.personalInfo}>
        <Image src={personalPhoto} alt="personal image" />
        <div className={styles.bioData}>
          <h2>Software Engineer.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.bio}>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Birthday: </h4>
              <p> 17 Jan 1998</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Degree: </h4>
              <p>Bachelors in CS</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Phone: </h4>
              <p> +923312914590</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Email: </h4>
              <p>touseefhaider358@gmail.com</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>City: </h4>
              <p> Karachi, Pakistan</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Freelance: </h4>
              <p>Available</p>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
