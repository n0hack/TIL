export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    user: process.env.DATABASE_USER,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
