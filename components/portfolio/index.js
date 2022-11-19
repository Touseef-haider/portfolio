/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import styles from "./portfolio.module.css";
import { useState } from "react";
import Image from "next/image";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import ProjectSlider from "../projectSlider/index";
import { portfolioTabs } from "../../utils/constant";

const tabs = portfolioTabs;

const Portfolio = () => {
  const [index, setIndex] = useState(0);

  const { getTriggerProps, modalProps } = useModal({
    background: "grey",
  });
  const handleTab = (e) => {
    setIndex(Number(e.target.getAttribute("tabIndex")));
  };

  const filteredData = tabs.filter((t) => t.index === index);

  return (
    <div className={styles.container} id="portfolio">
      <div className={styles.portfolio}>
        <h1>PORTFOLIO</h1>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className={styles.tabs}>
        {tabs.map((item) => (
          <div
            key={item.index}
            tabIndex={item.index}
            className={index == item.index ? styles.active : ""}
            onClick={handleTab}
          >
            {item.item}
          </div>
        ))}
      </div>
      <div className={styles.tabsElement}>
        {filteredData.length > 0 &&
          filteredData.map((item) => (
            <div className={styles.element}>
              {item?.cards?.map((card) => (
                <div>
                  <Image
                    width={500}
                    height={500}
                    src={card.image}
                    alt="image"
                  />
                  <div className={styles.wrapper}>
                    <h4>{card.title}</h4>
                    <small>title</small>
                    <p {...getTriggerProps()}>+</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
      <div style={{ backgroundColor: "black" }}>
        <Modal {...modalProps}>
          <div style={{ width: "80%", height: "100%", margin: "0 auto" }}>
            <ProjectSlider images={filteredData[0]?.cards} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
