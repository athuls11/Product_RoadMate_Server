import mysql from "mysql";

// const db = mysql.createConnection({
//   host: "sql5.freesqldatabase.com",
//   user: "sql5704713",
//   password: "XE7nNPWECP",
//   database: "sql5704713",
//   port: 3306,
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("MySQL Connected...");
// });

const db = mysql.createPool({
  connectionLimit: 5,
  host: "sql5.freesqldatabase.com",
  user: "sql5704713",
  password: "XE7nNPWECP",
  database: "sql5704713",
  port: 3306,
});

export { db };
