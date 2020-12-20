import Knex from 'knex'

const connection = Knex({
    client: 'mssql',
    connection: {
        host: 'localhost',
        user: 'sa',
        password: '123',
        database: 'Calculator_database'
    }
});

export default connection;