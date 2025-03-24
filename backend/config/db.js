import { Sequelize } from 'sequelize';
import { postgres_config } from './vars.js';

const connectDB = async () => {
  try {
    console.log('Connecting to PostgreSQL...');

    const sequelize = new Sequelize(
      postgres_config.POSTGRES_DATABASE,
      postgres_config.POSTGRES_USERNAME,
      postgres_config.POSTGRES_PASSWORD,
      {
        host: postgres_config.POSTGRES_HOST,
        port: postgres_config.POSTGRES_PORT,
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
          ssl: postgres_config.POSTGRES_SSL
            ? {
                require: true,
                rejectUnauthorized: postgres_config.POSTGRES_REJECT_UNAUTHORIZED,
              }
            : false,
        },
      }
    );

    await sequelize.authenticate();
    console.log('*** PostgreSQL Connected ***');
    return sequelize;

  } catch (error) {
    console.log('PostgreSQL Connection Error:', error);
    process.exit(1);
  }
};

export default connectDB;