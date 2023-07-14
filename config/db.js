const mongoose = require('mongoose')

require('dotenv').config()

module.exports = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DATABASE}`);
        console.log('DB connected');
        return connection.connection.db;
    } catch (error) {
        console.log('Database Error ',error?.message)
    }
}