import styles from "./facts.module.css";
import Image from "next/image";
import SmileyIcon from "../../public/smile.png";
import ServicesIcon from "../../public/services.png";
import HeadphoneIcon from "../../public/headphones.png";
import AwardIcon from "../../public/trophy.png";

const Facts = () => {
  return (
    <div className={styles.container} id="facts">
      <div className={styles.facts}>
        <h1>Facts</h1>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className={styles.figures}>
        <div>
          <div className={styles.circle}>
            <Image src={SmileyIcon} width={20} height={20} alt="smile" />
          </div>
          <h1>232</h1>
          <p>Happy Clients</p>
        </div>
        <div>
          <div className={styles.circle}>
            <Image src={ServicesIcon} width={20} height={20} alt="smile" />
          </div>
          <h1>521</h1>
          <p>Projects</p>
        </div>
        <div>
          <div className={styles.circle}>
            <Image src={HeadphoneIcon} width={20} height={20} alt="smile" />
          </div>
          <h1>1463</h1>
          <p>Hours Of Support</p>
        </div>
        <div>
          <div className={styles.circle}>
            <Image src={AwardIcon} width={20} height={20} alt="smile" />
          </div>
          <h1>25</h1>
          <p>Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
