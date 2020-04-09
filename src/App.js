import React from "react";
import Profile from "./Components/Profile/Profile";
import user from "./Components/Profile/user.json";
import Statistics from "./Components/Statistics/Statistics";
import statisticalData from "./Components/Statistics/statistical-data.json";
import FriendList from "./Components/FriendList/FriendList";
import friends from "./Components/FriendList/friends .json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import history from "./Components/TransactionHistory/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={history} />
  </>
);

export default App;
