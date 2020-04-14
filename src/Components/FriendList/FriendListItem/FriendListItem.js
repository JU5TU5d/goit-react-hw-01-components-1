import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendList.module.css";

const FriendListItem = ({ isOnline, avatar, name }) =>
  (isOnline && (
    <li className={styles.online}>
      <span className={styles.green}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )) || (
    <li className={styles.offline}>
      <span className={styles.red}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
