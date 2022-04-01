const mysql = require('mysql');
const online = {
    host: "quest-aurora-db.cluster-custom-cxxw00omtwsq.ap-northeast-1.rds.amazonaws.com",
    user: "quest",
    password: "questadmin",
    database: "test",
    port: 3306
}
const db = mysql.createConnection(online);