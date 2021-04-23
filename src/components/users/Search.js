/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/Alert/AlertContext";
import GithubContext from "../../context/Github/GithubContext";
import Pop from "../layout/Pop";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { searchUsers, error } = githubContext;
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
    setText("");
  };
  useEffect(() => {
    if (error) {
      alertContext.setAlert(error, "danger");
    }
  }, [error]);
  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      {error && <Pop />}
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
          required
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block mt-2'
          onClick={() => githubContext.clearUsers()}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
