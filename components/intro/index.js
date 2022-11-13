/* eslint-disable jsx-a11y/alt-text */
import styles from "./intro.module.css";
import Image from "next/image";
import facebookIcon from "../../public/facebook.png";
import linkedInIcon from "../../public/linkedin.png";
import githubIcon from "../../public/github.png";
import twitterIcon from "../../public/twitter.png";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.name}>Touseef Haider</h1>
        <p className={styles.profession}>
          I&apos;m
          <span className="primary">
            {" "}
            <Typewriter
              words={[
                "Software Engineer",
                "Web Developer",
                "Freelancer",
                "Mixed Martial Artist",
              ]}
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
          <a href="#">
            <Image src={facebookIcon} href="facebook" width={20} height={20} />
          </a>
          <a href="#">
            <Image src={linkedInIcon} href="linkedin" width={20} height={20} />
          </a>
          <a href="#">
            <Image src={githubIcon} href="github" width={20} height={20} />
          </a>
          <a href="#">
            <Image src={twitterIcon} href="twitter" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
