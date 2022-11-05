import Progress from "../progress";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skill}>
        <h1>Skills</h1>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className={styles.skills}>
        <Progress skillName="HTML" percent={100} key="HTML" />
        <Progress skillName="CSS" percent={90} key="CSS" />
        <Progress skillName="Javascript" percent={80} key="Javascript" />
        <Progress skillName="React" percent={80} key="React" />
        <Progress skillName="React Native" percent={80} key="React Native" />
        <Progress skillName="Next JS" percent={80} key="Next JS" />
        <Progress skillName="Nest JS" percent={70} key="Nest JS" />
        <Progress skillName="MongoDB" percent={90} key="MongoDB" />
        <Progress skillName="PostgresQL" percent={90} key="PostgresQL" />
        <Progress skillName="GO" percent={60} key="GO" />
        <Progress skillName="Docker" percent={100} key="Docker" />
        <Progress skillName="Kubernetes" percent={70} key="Kubernetes" />
        <Progress skillName="Git" percent={100} key="Git" />
        <Progress skillName="AWS" percent={40} key="AWS" />
        <Progress skillName="Firebase" percent={40} key="Firebase" />
      </div>
    </div>
  );
};

export default Skills;
