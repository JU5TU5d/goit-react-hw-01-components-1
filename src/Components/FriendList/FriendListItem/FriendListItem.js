import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span className={isOnline ? "on" : "off"}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
