/* eslint-disable jsx-a11y/alt-text */
import styles from "./footer.module.css";
import Image from "next/image";
import facebookIcon from "../../public/facebook.png";
import linkedInIcon from "../../public/linkedin.png";
import githubIcon from "../../public/github.png";
import twitterIcon from "../../public/twitter.png";
import { links, personalInfo } from "../../utils/constant";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <h1>{personalInfo.name}</h1>
      <small>{personalInfo.footerIntro}</small>
      <div className={styles.socialLinks}>
        <a href={links.facebook} target="_blank" rel="noreferrer">
          <div className={styles.link}>
            <Image src={facebookIcon} height={15} width={15} />
          </div>
        </a>
        <a href={links.linkedIn} target="_blank" rel="noreferrer">
          <div className={styles.link}>
            <Image src={linkedInIcon} height={15} width={15} />
          </div>
        </a>
        <a href={links.github} target="_blank" rel="noreferrer">
          <div className={styles.link}>
            <Image src={githubIcon} height={15} width={15} />
          </div>
        </a>
        <a href={links.twitter} target="_blank" rel="noreferrer">
          <div className={styles.link}>
            <Image src={twitterIcon} height={15} width={15} />
          </div>
        </a>
      </div>
      <small className={styles.copyRight}>
        © Copyright <b>{personalInfo.name}</b>. All Rights Reserved
      </small>
    </footer>
  );
};

export default Footer;
