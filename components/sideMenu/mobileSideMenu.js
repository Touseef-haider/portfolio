import styles from "./sideMenu.module.css";
import Image from "next/image";
import HomeIcon from "../../public/home.png";
import AboutIcon from "../../public/about.png";
import ResumeIcon from "../../public/resume.png";
import PortfolioIcon from "../../public/portfolio.png";
import ServicesIcon from "../../public/service.png";
import ContactIcon from "../../public/mail.png";

const MobileSideMenu = ({ addClass }) => {
  const control = addClass ? styles.show : styles.disable;

  return (
    <ul className={`${styles.mobileSideMenu} ${control}`}>
      <a href="#home">
        <li className={`${styles.mobileMenuItem} ${styles.active}`}>
          <Image src={HomeIcon} alt="Home" width={15} height={15} />
          <span>Home</span>
        </li>
      </a>
      <a href="#about">
        <li className={`${styles.mobileMenuItem}`}>
          <Image src={AboutIcon} alt="About" width={18} height={18} />
          <span>About</span>
        </li>
      </a>
      <a href="#resume">
        <li className={`${styles.mobileMenuItem}`}>
          <Image src={ResumeIcon} alt="Education" width={18} height={18} />
          <span>Resume</span>
        </li>
      </a>
      <a href="#services">
        <li className={`${styles.mobileMenuItem}`}>
          <Image src={ServicesIcon} alt="Services" width={15} height={15} />
          <span>Services</span>
        </li>
      </a>
      <a href="#portfolio">
        <li className={`${styles.mobileMenuItem}`}>
          <Image src={PortfolioIcon} alt="Skills" width={18} height={18} />
          <span>Portfolio</span>
        </li>
      </a>
      <a href="#contact">
        <li className={`${styles.mobileMenuItem}`}>
          <Image src={ContactIcon} alt="Projects" width={18} height={18} />
          <span>Contact</span>
        </li>
      </a>
    </ul>
  );
};

export default MobileSideMenu;
