import React from "react";
import image from "../../styles/assets/profile.png";
import icon1 from "../../styles/assets/menu.png";
import icon2 from "../../styles/assets/Icon2.png";
import styles from "../header/Header.module.scss";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.img_div}>
          <img src={image} alt="Profile" id="profile__img" />
        </div>
        <div className={styles.profile_links}>
          <p>
            Twitter: 
            <a
              href="https://twitter.com/su_codes"
              id="twitter"
              target="_blank"
              rel="noreferrer"
            >
                @su_codes
            </a>
          </p>

          <span>
            <a href="https://hng9.slack.com/ssb/redirect" id="slack">
              Suvwe Money
            </a>
          </span>
        </div>
      </div>
      <div className={styles.menu_icon}>
        <img src={icon1} alt="" className={styles.menu_icon1} />
        <img src={icon2} alt="" className={styles.menu_icon2} />
      </div>
    </section>
  );
};

export default Header;
