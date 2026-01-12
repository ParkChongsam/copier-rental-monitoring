const express = require('express');
const router = express.Router();
const { 
    createCustomer, getCustomers, getCustomer, updateCustomer, deleteCustomer,
    createEquipment, getEquipments, getEquipment, updateEquipment, deleteEquipment,
    createCounter, getCounters, getCountersByEquipment, updateCounter,
    createConsumable, getConsumables, getConsumable, updateConsumable, deleteConsumable
} = require('../controllers');

// Customer routes
router.post('/customers', createCustomer);
router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomer);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

// Equipment routes
router.post('/equipment', createEquipment);
router.get('/equipment', getEquipments);
router.get('/equipment/:id', getEquipment);
router.put('/equipment/:id', updateEquipment);
router.delete('/equipment/:id', deleteEquipment);

// Counter routes
router.post('/counters', createCounter);
router.get('/counters', getCounters);
router.get('/counters/equipment/:equipmentId', getCountersByEquipment);
router.put('/counters/:id', updateCounter);

// Consumable routes
router.post('/consumables', createConsumable);
router.get('/consumables', getConsumables);
router.get('/consumables/:id', getConsumable);
router.put('/consumables/:id', updateConsumable);
router.delete('/consumables/:id', deleteConsumable);

// Health check
router.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'API is running' });
});

module.exports = router;
