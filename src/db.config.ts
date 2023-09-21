const mysql = require('mysql2');
const { Client } = require('pg');

// export const connection = mysql.createConnection({
//   // host: 'revelationary.citilhjkmmsj.eu-west-1.rds.amazonaws.com',
//   host: '127.0.0.1',
//   // host: 'revelationary.citilhjkmmsj.eu-west-1.rds.amazonaws.com',
//   user: 'root',
//   password: 'password',
//   port: 3306,
//   database: 'revelationary',
// });

export const connection = new Client(
  'postgresql://adminuser:hvodjxmbqW94JPcU4pjHfA@oblong-weasel-9364.8nj.cockroachlabs.cloud:26257/revelationary?sslmode=verify-full',
);

const client = connection.connect();

console.log(client);
