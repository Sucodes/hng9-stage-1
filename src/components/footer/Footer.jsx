import React from 'react';
import I4G from '../../styles/assets/I4G.png'
import styles from '../footer/Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <hr />
      <div className={styles.footer_logo}>
        <h2>Zuri
          <span></span>
          Internship
        </h2>

        <p>HNG Internship 9 Frontend Task</p>

        <img src={I4G} alt="Ingressive For Good logo" />
      </div>
    </section>
  )
}

export default Footer;
