import styles from "./progress.module.css";

const Progress = ({ skillName, percent }) => {
  return (
    <div className={styles.container}>
      <div className={styles.skill}>
        <small>
          {" "}
          <b> {skillName}</b>
        </small>
        <small>
          <b>{percent}%</b>
        </small>
      </div>
      <div className={styles.bar}>
        <div className={styles.percent} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default Progress;
