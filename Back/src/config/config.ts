import "dotenv/config"

const config: {
  [key: string]: any,
} = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.dbUrl || "mongodb://localhost:27017",
  jwtSecret: process.env.JWT_SECRET || "secret",
};

export default config
