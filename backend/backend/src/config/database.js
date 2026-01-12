const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// PostgreSQL 데이터베이스 설정
const sequelize = new Sequelize(
    process.env.DB_NAME || 'copier_rental_db',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'password',
  {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
        pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
        },
  }
  );

// 데이터베이스 연결 테스트
const connectDB = async () => {
    try {
          await sequelize.authenticate();
          console.log('✅ Database connected successfully');
          return sequelize;
    } catch (error) {
          console.error('❌ Unable to connect to the database:', error);
          process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
