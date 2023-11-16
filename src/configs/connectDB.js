// get the client
import { router } from 'json-server';
import mysql from 'mysql2/promise';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});
// simple query
// connection.query(
//     'SELECT * FROM `user` ',
//     function (err, results, fields) {
//         let rows = results.map((row) => {
//             return row;
//         })
//         console.log(rows);

//     }
// );
export default connection;