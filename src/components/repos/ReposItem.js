import React from "react";
import { NavLink } from "reactstrap";
const RepoItem = ({ repo }) => {
  return (
    <div className='col-md-12 col-12 border mt-3 text-center'>
      <h3>
        <NavLink href={repo.html_url}>{repo.name}</NavLink>
      </h3>
    </div>
  );
};

export default RepoItem;
