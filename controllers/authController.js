const jwt = require('jsonwebtoken');
const config = require('../config/auth');

exports.login = (req, res) => {
  // Authentication logic will go here
  const token = jwt.sign({ userId: 'user123' }, config.secret, { expiresIn: '1h' });
  res.json({ token });
};
