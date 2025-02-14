const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const users = [
  { username: 'admin@demo.com', password: 'demo!123' },
  { username: 'user@demo.com', password: 'user!123' }
];
const SECRET_KEY = '0123456789';
const expiresIn = '3600';
const tokenType = 'Bearer';

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);
}

function isAuthenticated({ username, password }) {
  const user = users.find((item) => {
    return item.username === username && item.password === password;
  })
  
  return !!user;
}

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

server.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = 'Incorrect username or password';
    res.status(status).json({ status, message });
    return;
  }
  const accessToken = createToken({ username, password });
  const role = username.indexOf('admin') >= 0 ? 'admin' : 'user';
  res.status(200).json({
    role,
    accessToken, 
    expiresIn, 
    tokenType
   });
});

// authorization middleware
server.use((req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401;
    const message = 'Error in authorization format';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error accessToken is revoked';
    res.status(status).json({ status, message });
  }
});

server.use('/api', router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('API running on http://localhost:', port);
});
