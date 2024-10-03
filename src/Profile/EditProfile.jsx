import React from "react";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const { username, status } = useSelector((state) => state.user);

  return (
    <div>
      {username}
      <span> / </span>
      {status}
    </div>
  );
};

export default EditProfile;
