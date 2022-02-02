module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1891a62345a76c982258ebc714ac6240'),
  },
});
