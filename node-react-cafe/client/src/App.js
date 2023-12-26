import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [cafes, setCafes] = useState([]);
  const [cafesSel, setCafesSel] = useState(null);
  // 버튼 클릭시 보여줄 코드 작성
  const watchCafe = (cafe) => {
    // 선택된 카페 아이템을 상세정보로 보여줄 예정
    setCafesSel(cafe);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3007/api/cafes")
      .then((response) => setCafes(response.data))
      .catch((error) => console.error("error발생", error));
  }, []);

  return (
    <div>
      <h1>카페 목록</h1>
      <ul>
        {cafes.map((cafe) => (
          <li key={cafe.id}>
            <button onClick={() => watchCafe(cafe)}>상세보기</button>
          </li>
        ))}
      </ul>
      {cafesSel && (
        <div>
          <h2>상세 정보</h2>
          <p>ID : {cafesSel.id}</p>
          <p>NAME : {cafesSel.name}</p>
          <p>price : {cafesSel.price}</p>
          <button onClick={() => watchCafe()}>닫기</button>
        </div>
      )}
      ;
    </div>
  );
}
