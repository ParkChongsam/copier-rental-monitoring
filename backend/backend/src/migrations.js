const { sequelize, Customer, Equipment, Counter, Consumable } = require('./models');

const runMigrations = async () => {
    try {
          console.log('Running database migrations...');

      // Sync all models with database (creates tables if they don't exist)
      await sequelize.sync({ alter: true });

      console.log('✓ Customer table created/updated');
          console.log('✓ Equipment table created/updated');
          console.log('✓ Counter table created/updated');
          console.log('✓ Consumable table created/updated');
          console.log('All migrations completed successfully!');

    } catch (error) {
          console.error('Migration failed:', error);
          throw error;
    }
};

// Export for use in scripts
module.exports = { runMigrations };

// Run migrations if this file is executed directly
if (require.main === module) {
    runMigrations().then(() => {
          console.log('Database initialized successfully');
          process.exit(0);
    }).catch((error) => {
          console.error('Failed to initialize database:', error);
          process.exit(1);
    });
}
