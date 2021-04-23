/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import GithubContext from "../../context/Github/GithubContext";
import Hero from "../layout/Hero";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const Users = () => {
  const [userStyle, setUserStyle] = useState({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
    marginTop: "1rem",
  });

  const styleUser = () => {
    if (window.innerWidth <= 960) {
      setUserStyle({
        ...userStyle,
        gridTemplateColumns: "repeat(2, 1fr)",
      });
    } else {
      setUserStyle({
        ...userStyle,
        gridTemplateColumns: "repeat(3, 1fr)",
      });
    }
  };

  window.addEventListener("resize", styleUser);

  useEffect(() => {
    styleUser();
  }, []);

  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (users.length === 0 && !loading) {
    return <Hero />;
  }

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
