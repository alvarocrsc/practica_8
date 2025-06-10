const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query(`SELECT * FROM author`);
    return result;
}

const selectById = async (id) => {
    const [result] = await db.query(`SELECT * FROM author WHERE id = ?`, [id]);
    if (result.length === 0) return null;
    return result[0];
}

const selectByMail = async (email) => {
    const [result] = await db.query(`SELECT * FROM author WHERE email = ?`, [email]);
    if (result.length === 0) return null;
    return result[0];
}

const insert = async ({ name, email, image }) => {
    const [result] = await db.query(`INSERT INTO author (name, email, image) VALUES (?, ?, ?)`, [name, email, image]);
    return result;
}

module.exports = {
    selectAll,
    selectById,
    selectByMail,
    insert
}