import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle } from "reactstrap";

const UserItem = ({ user: { login, avatar_url } }) => {
  const imgStyle = {
    borderRadius: "50%",
    width: "60px",
    margin: " 5px auto",
  };
  return (
    <Card body className='text-center'>
      <img src={avatar_url} alt={login} style={imgStyle} />
      <CardTitle tag='h5'>{login}</CardTitle>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </Card>
  );
};

export default UserItem;
