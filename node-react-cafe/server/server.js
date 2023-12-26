const oracledb = require("oracledb");
const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
const PORT = 3007;

const dbConfig = {
  user: "khbank",
  password: "1234",
  connectString: "localhost:1521/XE",
};

async function runQuery(sql, binds = [], options = {}) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql, binds, options);
    return result.rows.map((row) => ({
      id: row[2],
      name: row[2],
      price: row[2],
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

app.get("/", (request, response) => {
  response.send("연결완료");
});

app.get("/api/cafes", async (request, response) => {
  const todos = await runQuery("SELECT * FROM cafe");
  response.json(todos);
});

app.listen(PORT, () => {
  console.log(`서버시작: http://localhost:${PORT}`);
});
