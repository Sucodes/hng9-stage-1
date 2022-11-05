import React from "react";
import { Link } from 'react-router-dom';
import styles from "../links/Links.module.scss";
import data from "../../data.json";

const Links = () => {
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
      <div id="contact">
        <Link to='/contact'>Contact Me</Link>
        <div className={styles.linkBtn_subtext}>Send a message.</div>
      </div>
    </div>
  );
};

export default Links;
