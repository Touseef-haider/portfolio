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

  const socialIcons = [
    {
      id: 1,
      name: "facebookIcon",
      icon: facebookIcon
    },
    {
      id: 2,
      name: "linkedInIcon",
      icon: linkedInIcon
    },
    {
      id: 1,
      name: "githubIcon",
      icon: githubIcon
    },
    {
      id: 1,
      name: "twitterIcon",
      icon: twitterIcon
    },
  ]

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
          {
            socialIcons.map(({id, name, icon})=>(
          <a href={links.facebook} target="_blank" rel="noreferrer" key={id}>
            <Image src={icon} width={30} height={30} alt={name} />
          </a>

            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default Intro;
