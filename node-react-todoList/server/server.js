// oracledb를 연동하기 위해 oracledb 요청하는 함수 작성
// 중간에 역할해주는 jdbc와 같은 역할을 하는 express를 요청하는 함수 작성
const oracledb = require("oracledb");
const express = require("express");

// 가지고온 express를 사용하기 위한 app 생성
const app = express();

// 만약에 추후 다른 도메인에서 요청이 들어온 경우 요청을 허용해주는 cors를 설치한 후 생성할 것
// npm i cors

const cors = require("cors");
// 모든 경로에서 백엔드에 오는 요청을 사용할 수 있도록 허용
app.use(cors());
// Express로 백엔드에서 가지고 온 데이터를 사용할 수 있도록 설정
app.use(express.json());
// 백엔드 전용 포트번호
const PORT = 3007;

// db연결 정보
const dbConfig = {
  user: "khbank",
  password: "1234",
  connectString: "localhost:1521/XE",
};

// oracle 연결하기 위한 connection과 sql 쿼리 실행 함수
// sql 쿼리와 쿼리로 인해 발생한 변수, 추가옵션을 지정해서 데이터베이스와 상호작용
// async를 이용해서 비동기 작업을 수행할 것

// binds = [], options ={}
// 파라미터를 필수로 넣지 않아도됨
// binds = [], where Id 추가적으로 클라이언트가 넣어야지만
// 들어갈 수 있는 값을 넣어줌
// 예를 들어 runQuery(select * from todos where id = taskId,[taskId])
// options = {} 자동 커밋을 해야하거나 객체화 로 변경해줄 때 많이 사용
// options은 하나만 있을 일이 없을 수 있으므로
// {}) 안에 내용을 여러개 묶어서 사용할 수 있도록 함
async function runQuery(sql, binds = [], options = {}) {
  let connection;
  // try {} catch(err) {} finally {}
  // try안에서 DB연결을 실행하고, 쿼리도 실행
  // 만약에 오류가 발생하면 catch를 사용해서 콘솔에 에러를 출력할 수 있게 설정
  // finally 만약에 DB를 닫고 싶다면 연결을 닫을 수 있도록 설정
  try {
    // await를 사용해서 비동기적으로 연결을 기다림
    connection = await oracledb.getConnection(dbConfig);
    // 실행 결과는 result에 저장을 함
    // .execute를 사용해서 쿼리를 실행할 수 있도록 함
    const result = await connection.execute(sql, binds, options);
    // 쿼리 실행 결과에서 행 정보를 모두 반환 하겠다 표기

    return result.rows.map((row) => ({
      ID: row[0],
      TASK: {
        TASK1: row[1],
        TASK2: row[2],
        TASK3: row[3],
      },
    }));
    return result.rows;
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        close.error(err);
      }
    }
  }
}

// 이제는 api를 사용해서 backend 연결을 설정

app.get("/", (request, response) => {
  response.send("벡엔드 연결 성공");
});

// api를 활용해서 db query에 작성한 내용 갖고오기
app.get("/api/todos", async (request, response) => {
  const todos = await runQuery("SELECT * FROM todos");
  response.json(todos);
});

// 우리가 연결한 port에 정상적으로 연결되었는지 확인하기 위한 console문 출력
app.listen(PORT, () => {
  console.log(`서버 시작: http://localhost:${PORT}`);
});
