import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchUsers } from ".";

const UserContainer = ({ userData, fetchUsers }) => {
  console.log("userData", userData);

  useEffect(() => {
    fetchUsers();
  }, []);

  return userData?.loading ? (
    <h2>Loading...</h2>
  ) : userData?.error ? (
    <h1>users</h1>
  ) : (
    <div>
      {userData?.users.map((user) => (
        <p>{user?.name}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
