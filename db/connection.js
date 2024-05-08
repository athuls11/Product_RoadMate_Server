import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  user: "default",
  host: "ep-dry-sea-a4o45xa6-pooler.us-east-1.aws.neon.tech",
  database: "verceldb",
  password: "ruE78VWeUnKx",
  port: 5432,
  ssl: true,
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("PostgreSQL Connected...");
  } catch (err) {
    console.error("PostgreSQL connection error", err.stack);
    throw err;
  }
};

export { client, connectDB };
