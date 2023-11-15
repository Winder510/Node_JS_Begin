import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
    // logic
    let data = [];
    connection.query(
        'SELECT * FROM `user` ',
        function (err, results, fields) {
            let data = results.map((row) => {
                return row;
            })
            return res.render('index.ejs', { dataUser: data, test: 'abc string test' }); // truyen mot bien object sang file index.ejs
        }
    );

}

module.exports = {
    getHomePage
}