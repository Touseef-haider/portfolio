import styles from "./about.module.css";
import Image from "next/image";
import personalPhoto from "../../public/personal.jpeg";
import greaterThanIcon from "../../public/greater-than.png";
import { personalInfo } from "../../utils/constant";

const About = () => {
  return (
    <div className={`${styles.container}`} id="about">
      <div className={styles.about}>
        <h1>ABOUT</h1>
      </div>
      <p>{personalInfo.aboutInto}</p>
      <div className={styles.personalInfo}>
        <Image src={personalPhoto} alt="personal image" objectFit="cover"/>
        <div className={styles.bioData}>
          <h2>{personalInfo.profession}</h2>
          <p>{personalInfo.professionIntro}</p>
          <div className={styles.bio}>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Birthday: </h4>
              <p>{personalInfo.birthDay}</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Degree: </h4>
              <p>{personalInfo.majorDegree}</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Phone: </h4>
              <p> {personalInfo.phone}</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Email: </h4>
              <p>{personalInfo.email}</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>City: </h4>
              <p>{personalInfo.city}</p>
            </div>
            <div>
              <Image
                src={greaterThanIcon}
                alt="option"
                height={30}
                width={30}
              />
              <h4>Freelance: </h4>
              <p>{personalInfo.isFreelanceAvailable}</p>
            </div>
          </div>
          <p>{personalInfo.generalIntro}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
