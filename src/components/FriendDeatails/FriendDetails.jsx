import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  return (
    <div>
      <p>Everything about this person is here</p>
      <p>
        Address: {friend.address.street}, {friend.address.city}
      </p>
    </div>
  );
};

export default FriendDetails;
