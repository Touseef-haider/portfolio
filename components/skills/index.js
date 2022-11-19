import { skills } from "../../utils/constant";
import Progress from "../progress";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skill}>
        <h1>Skills</h1>
      </div>
      <p>{skills.intro}</p>
      <div className={styles.skills}>
        {skills.majorSkills.map(({ skill, percentage }) => (
          <Progress skillName={skill} percent={percentage} key={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
