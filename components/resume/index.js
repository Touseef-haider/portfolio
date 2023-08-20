import styles from "./resume.module.css";
import { personalInfo, resume } from "../../utils/constant";

const Resume = () => {
  return (
    <div className={styles.container} id="resume">
      <div className={styles.resume}>
        <h1>RESUME</h1>
      </div>
      <p>{resume.intro}</p>
      <div className={styles.jobHistory}>
        <div className={styles.left}>
          <div className={styles.summary}>
            <h1>{resume.summary.title}</h1>
            <div className={styles.education}>
              <div className={styles.spots}>
                <div
                  className={styles.spot}
                  style={{ backgroundColor: "white" }}
                ></div>
                <h2>{resume.summary.name}</h2>
                <p>{resume.summary.basicIntro}</p>
                <ul>
                  <li>{personalInfo.address}</li>
                  <li>{personalInfo.phone}</li>
                  <li>{personalInfo.email}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <h1 style={{marginTop: 36}}>Education</h1>
            <div className={styles.education}>
              {resume.education.map((education) => (
                <div className={styles.spots} key={education.course}>
                  <div
                    className={styles.spot}
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                  <h2>{education.course}</h2>
                  <div className={styles.tag}>
                    <p>{education.duration}</p>
                  </div>
                  <p>{education.institute}</p>
                  <p>{education.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.experience}>
            <h1>Professional Experience</h1>
            <div className={styles.education}>
              {resume.experience.map((exp) => (
                <div key={exp.company} className={styles.spots}>
                  <div
                    className={styles.spot}
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                  <h2>{exp.jobTitle}</h2>
                  <div className={styles.tag}>
                    <p>{exp.duration}</p>
                  </div>
                  <p>{exp.company}</p>
                  <ul>
                    {exp.responsibilities.map((resp) => (
                      <li key={resp}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
