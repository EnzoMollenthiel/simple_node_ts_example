const env = {

    server: {
        url: `http://localhost`,
        port: process.env.PORT || 8080
    },

    db: {
        dbName: 'node_ts',
        type: 'mysql',
        host: 'localhost',
        port: '3306',
        user: 'user',
        password: 'password'
    }
}

export default env