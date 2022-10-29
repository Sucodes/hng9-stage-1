import React from "react";
import styles from "../links/Link.module.scss";
import data from "../../data.json";

const Link = () => {
  return (
    <div className={styles.linkBtn}>
      {data &&
        data.map((element) => {
          return (
            <div key={element.key} id={element.id}>
              <a
                href={element.href}
                target="_blank"
                rel="noreferrer"
              >
                {element.text}
              </a>
              <div className={styles.linkBtn_subtext}>{element.title}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Link;
