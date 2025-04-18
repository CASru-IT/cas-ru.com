const { Client } = require("pg");
require("dotenv").config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

async function testConnection() {
  try {
    await client.connect();
    console.log("データベースに接続できました");

    const testEmail = "test@example.com";

    const res = await client.query("SELECT * FROM users WHERE email = $1", [testEmail]);
    console.log(res.rows[0]);

    await client.end();
  } catch (err) {
    console.error("データベースへの接続に失敗しました", err);
  }
}

testConnection();
