import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        //response.data = selete *
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <div>
      <h1>관리자 사이트</h1>
      <h2>가입한 유저 정보</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>이름 : {user.name}</p>
            <p>이메일 : {user.email}</p>
            <p>아이디 : {user.username}</p>
            <p>
              주소 :{user.address && user.address.suite} :
              {user.address && user.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
