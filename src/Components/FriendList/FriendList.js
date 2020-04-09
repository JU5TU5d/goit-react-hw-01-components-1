import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => {
      return (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      );
    })}
  </ul>
);

FriendList.prototypes = {
  friends: PropTypes.array.isRequired,
  key: PropTypes.number.isRequired,
};

export default FriendList;
