import dotenv from 'dotenv';
dotenv.config();

export const google_config = {
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
};

export const postgres_config = {
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  POSTGRES_SSL: process.env.POSTGRES_SSL,
  POSTGRES_REJECT_UNAUTHORIZED: process.env.POSTGRES_REJECT_UNAUTHORIZED,
};