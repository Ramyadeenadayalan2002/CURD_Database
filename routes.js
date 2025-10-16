const express = require('express');
const router = express.Router();
const db = require('./config');

router.post('/users', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User created', id: result.insertId });
    });
});

router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

router.get('/users/:id', (req, res) => {
    db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results[0]);
    });
});

router.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    db.query(
        'UPDATE users SET name = ?, email = ? WHERE id = ?',
        [name, email, req.params.id],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send({ message: 'User updated' });
        }
    );
});

router.delete('/users/:id', (req, res) => {
    db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User deleted' });
    });
});

module.exports = router;