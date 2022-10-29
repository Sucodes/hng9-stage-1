import React from 'react';
import slack from '../../styles/assets/slack.png';
import github from '../../styles/assets/github.png';
import styles from '../icons/Icons.module.scss';

const Icons = () => {
  return (
    <div className={styles.icons}>
      <div>
        <a href="https://hng9.slack.com/"><img src={slack} alt="Slack icon" /></a>

        <a href="https://github.com/Sucodes"><img src={github} alt="GitHub icon" /></a>
      </div>
    </div>
  )
}

export default Icons;
