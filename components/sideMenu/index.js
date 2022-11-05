import styles from "./sideMenu.module.css";
import Image from "next/image";
import HomeIcon from "../../public/home.png";
import AboutIcon from "../../public/about.png";
import ResumeIcon from "../../public/resume.png";
import PortfolioIcon from "../../public/portfolio.png";
import ServicesIcon from "../../public/service.png";
import ContactIcon from "../../public/mail.png";
import Toggler from "../../public/toggler.svg";
import MobileSideMenu from "./mobileSideMenu";
import { useState } from "react";

const SideMenu = () => {
  const [addClass, setAddClass] = useState(false);
  const handleToggler = () => {
    setAddClass(!addClass);
  };

  return (
    <>
      <div
        role="button"
        onClick={handleToggler}
        onKeyPress={handleToggler}
        id={styles.toggler}
      >
        <Image src={Toggler} alt="toggle" />
      </div>
      <MobileSideMenu addClass={addClass} />
      <ul className={styles.sideMenu}>
        <a href="#home">
          <li className={styles.menuItem}>
            <Image src={HomeIcon} alt="Home" width={15} height={15} />
            <span>Home</span>
          </li>
        </a>
        <a href="#about">
          <li className={styles.menuItem}>
            <Image src={AboutIcon} alt="About" width={18} height={18} />
            <span>About</span>
          </li>
        </a>
        <a href="#resume">
          <li className={styles.menuItem}>
            <Image src={ResumeIcon} alt="Education" width={18} height={18} />
            <span>Resume</span>
          </li>
        </a>

        <a href="#services">
          <li className={styles.menuItem}>
            <Image src={ServicesIcon} alt="Services" width={15} height={15} />
            <span>Services</span>
          </li>
        </a>
        <a href="#portfolio">
          <li className={styles.menuItem}>
            <Image src={PortfolioIcon} alt="Skills" width={18} height={18} />
            <span>Portfolio</span>
          </li>
        </a>
        <a href="#contact">
          <li className={styles.menuItem}>
            <Image src={ContactIcon} alt="Projects" width={18} height={18} />
            <span>Contact</span>
          </li>
        </a>
      </ul>
    </>
  );
};

export default SideMenu;
