/* eslint-disable jsx-a11y/alt-text */
import styles from "./intro.module.css";
import Image from "next/image";
import facebookIcon from "../../public/facebook.png";
import linkedInIcon from "../../public/linkedin.png";
import githubIcon from "../../public/github.png";
import twitterIcon from "../../public/twitter.png";
import { Typewriter } from "react-simple-typewriter";
import { links, floatingText, personalInfo } from "../../utils/constant";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <p className={styles.profession}>
          I&apos;m
          <span className="primary">
            {" "}
            <Typewriter
              words={floatingText}
              loop
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={() => {}}
              onType={() => {}}
            />
          </span>
        </p>
        <div className={styles.links}>
          <a href={links.facebook} target="_blank" rel="noreferrer">
            <Image src={facebookIcon} width={20} height={20} />
          </a>
          <a href={links.linkedIn} target="_blank" rel="noreferrer">
            <Image src={linkedInIcon} width={20} height={20} />
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            <Image src={githubIcon} width={20} height={20} />
          </a>
          <a href={links.twitter} target="_blank" rel="noreferrer">
            <Image src={twitterIcon} width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
