/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import styles from "./portfolio.module.css";
import { useState } from "react";
import Image from "next/image";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import ProjectSlider from "../projectSlider/index";
import { portfolio, portfolioTabs } from "../../utils/constant";

const tabs = portfolioTabs;

const Portfolio = () => {
  const [index, setIndex] = useState(1);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const { getTriggerProps, modalProps, } = useModal({
    background: "#d7dce1",
  });
  const handleTab = (e) => {

    const newIndex = Number(e.target.getAttribute("tabIndex"));
    setIndex(newIndex);
  };

  const handleCardClick = (cardIndex) => {
    setSelectedCardIndex(cardIndex);
  }

  const filteredData = tabs.filter((t) => {
    if (index) {
      return t.index === index
    }
  });



  return (
    <div className={styles.container} id="portfolio">
      <div className={styles.portfolio}>
        <h1>PORTFOLIO</h1>
      </div>
      <p>
        {portfolio.intro}
      </p>
      <div className={styles.tabs}>
        {tabs.map((item) => (
          <div
            key={item.index}
            tabIndex={item.index}
            className={index === item.index ? styles.active : ""}
            onClick={handleTab}
          >
            {item.item}
          </div>
        ))}
      </div>
      <div className={styles.tabsElement}>
        {Array.isArray(filteredData) && filteredData.length > 0 &&
          filteredData.map((item) => (
            <div style={{ width: "100%" }} key={item.index} className={styles.element}>
              {item?.cards?.map((card, index) => (
                <div style={{ width: "100%" }} onMouseDown={() => setSelectedCardIndex(index)} onMouseOver={() => setSelectedCardIndex(index)}>
                  <Image
                    style={{ width: "100%" }}
                    // layout="fill"
                    width={460}
                    height={270}
                    src={card.image}
                    onClick={() => handleCardClick(index)}
                    alt="image"
                  />
                  <div  className={styles.wrapper}>
                    <h4>{card.title}</h4>
                    <small>{card.name}</small>
                    {selectedCardIndex === index && (
                      <p {...getTriggerProps()}>+</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
      <div style={{ backgroundColor: "black" }}>
        <Modal {...modalProps}>
          <div style={{ width: "80%", height: "100%", margin: "0 auto" }}>
            <ProjectSlider images={tabs.length > 0 && filteredData[0]?.cards} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
