import "dotenv/config";

const config: {
  port: number | string;
  dbUrl: string;
  jwtSecret: string;
  mediumToken: string;
  mediumUserId: string;
  ghostUrl: string;
  ghostContentKey: string;
  ghostAdminKey: string;
  [key: string]: any;
} = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.dbUrl || "mongodb://localhost:27017",
  jwtSecret: process.env.JWT_SECRET || "secret",
  mediumToken: process.env.mediumToken || "",
  mediumUserId: process.env.mediumUserId || "",
  ghostUrl: process.env.ghostUrl || '',
  ghostContentKey: process.env.ghostContentKey || '',
  ghostAdminKey: process.env.ghostAdminKey || ''
};

export default config;
