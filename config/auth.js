module.exports = {
  secret: process.env.JWT_SECRET || 'your_strong_secret_key',
  keycloakConfig: {
    realm: 'your-realm',
    'auth-server-url': 'http://localhost:8080/auth',
    resource: 'your-client-id'
  }
};
