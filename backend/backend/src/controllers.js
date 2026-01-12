const { Customer, Equipment, Counter, Consumable } = require('./models');

// CUSTOMER Controllers
exports.createCustomer = async (req, res) => {
    try {
          const customer = await Customer.create(req.body);
          res.status(201).json(customer);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.getCustomers = async (req, res) => {
    try {
          const customers = await Customer.findAll({ include: [Equipment] });
          res.json(customers);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.getCustomer = async (req, res) => {
    try {
          const customer = await Customer.findByPk(req.params.id, { include: [Equipment] });
          if (!customer) return res.status(404).json({ error: 'Not found' });
          res.json(customer);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
          const customer = await Customer.findByPk(req.params.id);
          if (!customer) return res.status(404).json({ error: 'Not found' });
          await customer.update(req.body);
          res.json(customer);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
          const customer = await Customer.findByPk(req.params.id);
          if (!customer) return res.status(404).json({ error: 'Not found' });
          await customer.destroy();
          res.json({ message: 'Deleted' });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

// EQUIPMENT Controllers
exports.createEquipment = async (req, res) => {
    try {
          const equipment = await Equipment.create(req.body);
          res.status(201).json(equipment);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.getEquipments = async (req, res) => {
    try {
          const equipments = await Equipment.findAll({ include: [Customer, Counter, Consumable] });
          res.json(equipments);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.getEquipment = async (req, res) => {
    try {
          const equipment = await Equipment.findByPk(req.params.id, { include: [Customer, Counter, Consumable] });
          if (!equipment) return res.status(404).json({ error: 'Not found' });
          res.json(equipment);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.updateEquipment = async (req, res) => {
    try {
          const equipment = await Equipment.findByPk(req.params.id);
          if (!equipment) return res.status(404).json({ error: 'Not found' });
          await equipment.update(req.body);
          res.json(equipment);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.deleteEquipment = async (req, res) => {
    try {
          const equipment = await Equipment.findByPk(req.params.id);
          if (!equipment) return res.status(404).json({ error: 'Not found' });
          await equipment.destroy();
          res.json({ message: 'Deleted' });
    } catch (error) {
          res.status(500).json({ error: error.message });
                                                       }
};

// COUNTER Controllers
exports.createCounter = async (req, res) => {
    try {
          const counter = await Counter.create(req.body);
          res.status(201).json(counter);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.getCounters = async (req, res) => {
    try {
          const counters = await Counter.findAll({ include: [Equipment] });
          res.json(counters);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.getCountersByEquipment = async (req, res) => {
    try {
          const counters = await Counter.findAll({ where: { equipmentId: req.params.equipmentId }, order: [['recordedDate', 'DESC']] });
          res.json(counters);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.updateCounter = async (req, res) => {
    try {
          const counter = await Counter.findByPk(req.params.id);
          if (!counter) return res.status(404).json({ error: 'Not found' });
          await counter.update(req.body);
          res.json(counter);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

// CONSUMABLE Controllers
exports.createConsumable = async (req, res) => {
    try {
          const consumable = await Consumable.create(req.body);
          res.status(201).json(consumable);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.getConsumables = async (req, res) => {
    try {
          const consumables = await Consumable.findAll({ include: [Equipment] });
          res.json(consumables);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.getConsumable = async (req, res) => {
    try {
          const consumable = await Consumable.findByPk(req.params.id, { include: [Equipment] });
          if (!consumable) return res.status(404).json({ error: 'Not found' });
          res.json(consumable);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.updateConsumable = async (req, res) => {
    try {
          const consumable = await Consumable.findByPk(req.params.id);
          if (!consumable) return res.status(404).json({ error: 'Not found' });
          await consumable.update(req.body);
          res.json(consumable);
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};

exports.deleteConsumable = async (req, res) => {
    try {
          const consumable = await Consumable.findByPk(req.params.id);
          if (!consumable) return res.status(404).json({ error: 'Not found' });
          await consumable.destroy();
          res.json({ message: 'Deleted' });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
};
