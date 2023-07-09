const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {

    console.log('----------------------------------------------------------------')

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log('Authenticating', authHeader);

    if (!token) {
        return res.status(401).json({ error: 'Token không tồn tại' });
    }

    jwt.verify(token, 'momonkongu', (err, user) => {
        if (err) {
            console.error('Xác thực token thất bại:', err);
            return res.status(403).json({ error: 'Token không hợp lệ' });
        }
        req.body = {
            username: user.username
        }
        next();
    });
}

module.exports = authenticateToken;