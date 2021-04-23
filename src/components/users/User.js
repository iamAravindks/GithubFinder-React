import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Badge, List } from "reactstrap";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/Github/GithubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='container mb-5'>
        <div className='row col-12 border p-2'>
          <div className='col-sm-5 col-md-5 text-center mt-2 '>
            <img
              src={avatar_url}
              className='rounded-circle'
              alt=''
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div className='col-sm-5 col-md-5  mt-2 '>
            {bio && (
              <Fragment>
                <h3 className='m-1'>Bio</h3>
                <p className='m-1'> {bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark  m-1'>
              Visit Github Profile
            </a>
            <List type='unstyled' className='  m-1'>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>

              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </List>
          </div>
        </div>
        <div className='row col-12 border p-2 mt-3 justify-content-center '>
          <Badge className='m-2 col-md-2 col-sm-12' color='primary'>
            Followers: {followers}
          </Badge>

          <Badge className='m-2 m-2 col-md-2 col-sm-12' color='secondary'>
            Following: {following}
          </Badge>
          <Badge className='m-2 m-2 col-md-2 col-sm-12' color='success'>
            Public Repos: {public_repos}
          </Badge>
          <Badge className='m-2 m-2 col-md-2 col-sm-12' color='danger'>
            Public Gists: {public_gists}
          </Badge>
        </div>
        <div className='row col-12 border p-2 mt-3 mb-5rem justify-content-center '>
          <div className=' col-md-6 text-center  '>
            <h2>Latest Repos</h2>
            <Repos repos={repos} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
