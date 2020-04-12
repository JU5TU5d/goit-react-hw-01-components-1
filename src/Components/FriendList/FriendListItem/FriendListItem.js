import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendList.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={isOnline ? `${styles.online}` : `${styles.offline}`}>
      <span className={isOnline ? `${styles.green}` : `${styles.red}`}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
