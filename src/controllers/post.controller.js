const Post = require('../models/post.model');
const Author = require('../models/author.model');

const getAll = async (req, res) => {
    const posts = await Post.selectAll();
    res.json({
        message: 'Posts retrieved successfully',
        results: posts
    });
}

const getById = async (req, res) => {
    const { id } = req.params;

    const post = await Post.selectById(id);
    if (!post) {
        return res.status(404).json({
            message: 'Post not found'
        });
    }
    res.json(post);
}

const getByAuthorId = async (req, res) => {
    const { id } = req.params;
    const author = await Author.selectById(id);
    if (!author) {
        return res.status(404).json({
            message: 'Author not found'
        });
    }
    const posts = await Post.selectByAuthorId(id);
    if (posts.length === 0) {
        return res.status(404).json({
            message: 'No posts found for this author'
        });
    }
    res.json({
        message: 'Posts retrieved successfully',
        author: {
            ...author,
            posts: posts.map(post => {
                // Remove the author field and author_id from each post to avoid redundancy
                const { author, author_id, ...postData } = post;
                return postData;
            })
        }
    });
}

const create = async (req, res) => {
    const { title, description, category, author_id } = req.body;
    if (!title || !description || !category || !author_id) {
        return res.status(400).json({
            message: 'Title, description, category, and author_id are required'
        });
    }
    
    const result = await Post.insert(req.body);
    const post = await Post.selectById(result.insertId);
    res.status(201).json({
        message: 'Post created successfully',
        result: post
    });
}

const edit = async (req, res) => {
    const { title, description, category } = req.body;
    if (!title || !description || !category) {
        return res.status(400).json({
            message: 'Title, description, and category are required'
        });
    }

    const { id } = req.params;
    const result = await Post.updateById(id, req.body);
    if (result.affectedRows === 0) {
        return res.status(404).json({
            message: 'Post not found'
        });
    }
    const post = await Post.selectById(id);
    res.json({
        message: 'Post updated successfully',
        result: post
    });
}

const remove = async (req, res) => {
    const { id } = req.params;
    const post = await Post.selectById(id);
    if (!post) {
        return res.status(404).json({
            message: 'Post not found'
        });
    }
    const result = await Post.deleteById(id);
    
    res.json({
        message: 'Post deleted successfully',
        result: post
    });
}

module.exports = { getAll, getById, getByAuthorId, create, edit, remove };