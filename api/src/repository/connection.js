import 'dotenv/config';
import mysql from 'mysql2/promise';


const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    typeCast: function (field, next) {
        if (field.type === 'TINY' && field.lenght === 1) {
            return (field.string() === '1');
        } else {
            return next();
        }
    }
})

export { con };
console.log('BD conectado')