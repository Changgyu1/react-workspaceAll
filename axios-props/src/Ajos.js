import React, { useEffect, useState } from "react";
import axios from "axios";

const PoAI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log("error발생", error));
  }, []);

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <p>제목 : {post.id}</p>
          <p>제목 : {post.name}</p>
          <p>제목 : {post.email}</p>
          <p>
            제목 : {post.address.street} {post.address.suite}{" "}
            {post.address.zipcode} {post.address.city}
          </p>
          <p>제목 : {post.address.suite}</p>
        </div>
      ))}
    </div>
  );
};
export default PoAI;
