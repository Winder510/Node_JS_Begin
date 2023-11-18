import mysql from 'mysql2/promise';

let getALLUser = (req, res) => {
    return res.status(200).json({
        test: "ok"
    });
}
let creatNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    console.log('>>>> check red ', req.body);
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            test: "Messing missing "
        });
    }
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
    await connection.execute(`insert into user(firstName,lastName,email,address) values (?,?,?,?)`, [firstName, lastName, email, address]);
    return res.status(200).json({
        test: "ok"
    });
}
let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            test: "Messing missing "
        });
    }
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
    const [rows, fields] = await connection.execute(`delete from user where id = ? `, [userId]);
    return res.status(200).json({
        test: "ok"
    });
}
let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            test: "Messing missing "
        });
    }
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
    await connection.execute(`update user set firstName=?, lastName=?,email=?, address=?  where id =?`,
        [firstName, lastName, email, address, id]);
    return res.status(200).json({
        test: "ok"
    });
}
module.exports = {
    getALLUser, creatNewUser, deleteUser, updateUser
}   