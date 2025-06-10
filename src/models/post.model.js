const db = require('../config/db');

function parseAuthorField(post) {
    if (typeof post.author === 'string') {
        try {
            return { ...post, author: JSON.parse(post.author) };
        } catch {
            return { ...post, author: null };
        }
    }
    return post;
}

const selectAll = async () => {
    const [result] = await db.query(`
        SELECT 
            post.*, 
            JSON_OBJECT(
                'id', author.id,
                'name', author.name,
                'email', author.email,
                'image', author.image
            ) AS author
        FROM post
        JOIN author ON post.author_id = author.id
    `);
    return result.map(parseAuthorField);
}

const selectById = async (id) => {
    const [result] = await db.query(`
        SELECT
            post.*,
            JSON_OBJECT(
                'id', author.id,
                'name', author.name,
                'email', author.email,
                'image', author.image
            ) AS author
        FROM post
        JOIN author ON post.author_id = author.id
        WHERE post.id = ?
    `, [id]);
    if (result.length === 0) return null;
    return parseAuthorField(result[0]);
}

const selectByAuthorId = async (authorId) => {
    const [result] = await db.query(`
        SELECT 
            post.*, 
            JSON_OBJECT(
                'id', author.id,
                'name', author.name,
                'email', author.email,
                'image', author.image
            ) AS author
        FROM post
        JOIN author ON post.author_id = author.id
        WHERE author.id = ?
    `, [authorId]);
    return result.map(parseAuthorField);
}

const insert = async ({ title, description, category, author_id }) => {
    const [result] = await db.query(`INSERT INTO post (title, description, category, author_id) VALUES (?, ?, ?, ?)`, [title, description, category, author_id]);
    return result;
}

module.exports = {
    selectAll,
    selectById,
    selectByAuthorId,
    insert
}