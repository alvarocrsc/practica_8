const Author = require('../models/author.model');

const getAll = async (req, res) => {
    const authors = await Author.selectAll();
    res.json({
        message: 'Authors retrieved successfully',
        results: authors
    });
}

const getById = async (req, res) => {
    const { id } = req.params;

    const author = await Author.selectById(id);
    if (!author) {
        return res.status(404).json({
            message: 'Author not found'
        });
    }
    res.json(author);
}

const create = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
            message: 'Name and email are required'
        });
    }

    const existingAuthor = await Author.selectByMail(email);
    if (existingAuthor) {
        return res.status(409).json({
            message: 'Author with this email already exists'
        });
    }

    const result = await Author.insert(req.body);
    const author = await Author.selectById(result.insertId);
    res.status(201).json({
        message: 'Author created successfully',
        result: author
    });
}

const edit = async (req, res) => {
    const { name, email, image } = req.body;
    if (!name || !email || !image) {
        return res.status(400).json({
            message: 'Name, email, and image are required'
        });
    }

    const { id } = req.params;
    const result = await Author.updateById(id, req.body);
    if (result.affectedRows === 0) {
        return res.status(404).json({
            message: 'Author not found'
        });
    }
    const author = await Author.selectById(id);
    res.json({
        message: 'Author updated successfully',
        result: author
    });
}

const remove = async (req, res) => {
    const { id } = req.params;
    const author = await Author.selectById(id);
    if (!author) {
        return res.status(404).json({
            message: 'Author not found'
        });
    }
    const result = await Author.deleteById(id);
   
    res.json({
        message: 'Author deleted successfully',
        result: author
    });
}

module.exports = { getAll, getById, create, edit, remove };