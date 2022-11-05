import styles from "./services.module.css";
import ReactImage from "../../public/react.png";
import HTMLCSS from "../../public/htmlandcss.jpeg";
import NodeJsImage from "../../public/nodejs.png";
import NextJsImage from "../../public/nextjs.png";
import NestJsImage from "../../public/nestjs.jpeg";
import Mongodb from "../../public/mongo.png";
import JS from "../../public/js.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.container} id="services">
      <div className={styles.service}>
        <h1>SERVICES</h1>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className={styles.development}>
        <div className={styles.frontPart}>
          <h3>Front End Development</h3>
          <div className={styles.backPart}>
            <Image src={ReactImage} />
            <Image src={HTMLCSS} />
            <Image src={JS} />
            <Image src={NextJsImage} />
          </div>
        </div>
        <div className={styles.frontPart}>
          <h3>Back End Development</h3>
          <div className={styles.backPart}>
            <Image src={NodeJsImage} />
            <Image src={NestJsImage} />
          </div>
        </div>
        <div className={styles.frontPart}>
          <h3>Databases</h3>
          <div className={styles.backPart}>
            <Image src={Mongodb} />
          </div>
        </div>
        <div className={styles.frontPart}>
          <h3>Cloud</h3>
          <div className={styles.backPart}>
            <p>AWS</p>
            <p>Firebase</p>
          </div>
        </div>
        <div className={styles.frontPart}>
          <h3>Other</h3>
          <div className={styles.backPart}>
            <p>Docker</p>
            <p>Kubernetes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
