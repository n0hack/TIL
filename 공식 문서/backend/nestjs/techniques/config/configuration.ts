export default () => ({
  database: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
});
