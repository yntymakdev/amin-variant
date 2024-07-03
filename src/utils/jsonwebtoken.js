const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (token) {
        jwt.verify(token, 'your_jwt_secret_key', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.get('/api/protected', authenticateJWT, (req, res) => {
    res.send('Это защищенный маршрут');
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
