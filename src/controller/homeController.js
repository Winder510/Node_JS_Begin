import mysql from 'mysql2/promise';

let getHomePage = async (req, res) => {
    // logic
    let data = [];
    // await connection.query(
    //     'SELECT * FROM `user` ',
    //     function (err, results, fields) {
    //         let data = results.map((row) => {
    //             return row;
    //         })
    //         // return res.render('index.ejs', { dataUser: data }); // truyen mot bien object sang file index.ejs
    //     }
    // );
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
    const [rows, fields] = await connection.execute('SELECT * FROM user ');
    return res.render('index.ejs', { dataUser: rows });
}
let getDetailPage = async (req, res) => {
    let userId = req.params.userId;
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
    const [rows, fields] = await connection.execute(`SELECT * FROM user where id =?`, [userId]);
    return res.send(JSON.stringify(rows));
}

module.exports = {
    getHomePage, getDetailPage
}