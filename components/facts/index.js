import styles from "./facts.module.css";
import Image from "next/image";
import SmileyIcon from "../../public/smile.png";
import ServicesIcon from "../../public/services.png";
import HeadphoneIcon from "../../public/headphones.png";
import AwardIcon from "../../public/trophy.png";
import { facts } from "../../utils/constant";

const Facts = () => {
  return (
    <div className={styles.container} id="facts">
      <div className={styles.facts}>
        <h1>FACTS</h1>
      </div>
      <p>{facts.intro}</p>
      <div className={styles.figures}>
        <div>
          <div className={styles.circle}>
            <Image src={SmileyIcon} width={20} height={20} alt="smile" />
          </div>
          <h1>{facts.clients}</h1>
          <p>Happy Clients</p>
        </div>
        <div>
          <div className={styles.circle}>
            <Image src={ServicesIcon} width={20} height={20} alt="smile" />
          </div>
          <h1>{facts.projectsCompleted}</h1>
          <p>Projects</p>
        </div>
        <div>
          <div className={styles.circle}>
            <Image src={HeadphoneIcon} width={20} height={20} alt="smile" />
          </div>
          <h1>{facts.supportHours}</h1>
          <p>Hours Of Support</p>
        </div>
        <div>
          <div className={styles.circle}>
            <Image src={AwardIcon} width={20} height={20} alt="smile" />
          </div>
          <h1>{facts.awards}</h1>
          <p>Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
