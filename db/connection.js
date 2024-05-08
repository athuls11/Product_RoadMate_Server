// import pkg from "pg";
import mysql from "mysql";

// const { Client } = pkg;

// const client = new Client({
//   user: "default",
//   host: "ep-dry-sea-a4o45xa6-pooler.us-east-1.aws.neon.tech",
//   database: "verceldb",
//   password: "ruE78VWeUnKx",
//   port: 5432,
//   ssl: true,
// });

const db = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5704713",
  password: "XE7nNPWECP",
  database: "sql5704713",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

export { db };
