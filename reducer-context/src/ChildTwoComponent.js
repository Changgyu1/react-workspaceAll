import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ChildTwo = () => {
  const the = useContext(ThemeContext);
  return (
    <div>
      <p>현제 테마는 {the} 입니다</p>
    </div>
  );
};
export default ChildTwo;
