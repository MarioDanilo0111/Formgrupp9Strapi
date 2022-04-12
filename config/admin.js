module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ddf52bb894366537b2d08bc244048237'),
  },
});
