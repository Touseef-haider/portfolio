/* eslint-disable jsx-a11y/alt-text */
import styles from "./footer.module.css";
import Image from "next/image";
import facebookIcon from "../../public/facebook.png";
import linkedInIcon from "../../public/linkedin.png";
import githubIcon from "../../public/github.png";
import twitterIcon from "../../public/twitter.png";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <h1>Touseef Haider</h1>
      <small>
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
        fuga maxime saepe commodi placeat.
      </small>
      <div className={styles.socialLinks}>
        <a href="#">
          <div className={styles.link}>
            <Image src={facebookIcon} height={15} width={15} />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <Image src={linkedInIcon} height={15} width={15} />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <Image src={githubIcon} height={15} width={15} />
          </div>
        </a>
        <a href="#">
          <div className={styles.link}>
            <Image src={twitterIcon} height={15} width={15} />
          </div>
        </a>
      </div>
      <small className={styles.copyRight}>
        © Copyright <b>Touseef Haider</b>. All Rights Reserved
      </small>
    </footer>
  );
};

export default Footer;
