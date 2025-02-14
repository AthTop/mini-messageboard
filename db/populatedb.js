#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 50 ),
    message VARCHAR ( 255 ),
    posted TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO messages (username, message)
VALUES
    ('RandomUser', 'Hello from RandomUser!'),
    ('Owner', 'Whee, script generated messages!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString: process.env.DB_URL });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done!");
}

main();
