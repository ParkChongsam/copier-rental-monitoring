 sequelize.define('Equipment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  serialNumber: {
    type: DataTypes.STRING,
    unique: true
  },
  customerId: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'maintenance'),
    defaultValue: 'active'
  },
  purchaseDate: {
    type: DataTypes.DATE
  },
  warrantyExpiry: {
    type: DataTypes.DATE
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { timestamps: true });

// Counter Model (Usage tracking)
const Counter = sequelize.define('Counter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  equipmentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  recordedDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { timestamps: true });

// Consumable Model
const Consumable = sequelize.define('Consumable', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  equipmentId: {
    type: DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  unit: {
    type: DataTypes.STRING
  },
  reorderLevel: {
    type: DataTypes.INTEGER,
    defaultValue: 10
  },
  lastRestockedDate: {
    type: DataTypes.DATE
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { timestamps: true });

// Define relationships
Equipment.belongsTo(Customer, { foreignKey: 'customerId' });
Customer.hasMany(Equipment, { foreignKey: 'customerId' });

Counter.belongsTo(Equipment, { foreignKey: 'equipmentId' });
Equipment.hasMany(Counter, { foreignKey: 'equipmentId' });

Consumable.belongsTo(Equipment, { foreignKey: 'equipmentId' });
Equipment.hasMany(Consumable, { foreignKey: 'equipmentId' });

module.exports = {
  sequelize,
  Customer,
  Equipment,
  Counter,
  Consumable
};
