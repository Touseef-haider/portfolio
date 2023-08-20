import styles from "./facts.module.css";
import Image from "next/image";
import SmileyIcon from "../../public/smile.png";
import ServicesIcon from "../../public/services.png";
import HeadphoneIcon from "../../public/headphones.png";
import AwardIcon from "../../public/trophy.png";
import { facts } from "../../utils/constant";

const Facts = () => {
  const factsData = [
    {
      id: 1,
      name: "Happy Clients",
      icon: SmileyIcon,
      facts: 232,
    },
    {
      id: 2,
      name: "Projects",
      icon: ServicesIcon,
      facts: 521,

    },
    {
      id: 3,
      name: "Hours Of Support",
      icon: HeadphoneIcon,
      facts: "24/7",

    },
    {
      id: 4,
      name: "Awards",
      icon: AwardIcon,
      facts: 25,

    },
  ];
  return (
    <div className={styles.container} id="facts">
      <div className={styles.facts}>
        <h1>FACTS</h1>
      </div>
      <p>{facts.intro}</p>
      <div className={styles.figures}>
        {factsData.map(({ id, icon, name, facts }) => (
          <div key={id} className={styles.figures_subContainer}>
            <div className={styles.circle}>
              <Image src={icon} width={20} height={20} alt={name} />
            </div>
            <h2>{facts}</h2>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
