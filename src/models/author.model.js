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

const updateById = async (id, { name, email, image }) => {
    const [result] = await db.query(`UPDATE author SET name = ?, email = ?, image = ? WHERE id = ?`, [name, email, image, id]);
    return result;
}

const deleteById = async (id) => {
    const [result] = await db.query(`DELETE FROM author WHERE id = ?`, [id]);
    return result;
}

module.exports = {
    selectAll,
    selectById,
    selectByMail,
    insert,
    updateById,
    deleteById
}