module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'root',
            password: '1q2w3e4r'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
