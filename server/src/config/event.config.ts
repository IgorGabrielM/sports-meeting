const connection = require('./connection')

const getAll = async () => {
    const events = await connection.execute('SELECT * FROM events');
    return events;
};

module.exports = {
    getAll
}