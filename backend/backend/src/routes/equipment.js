const express = require('express');
const router = express.Router();

// 장비 목록 조회
router.get('/', async (req, res) => {
    try {
          res.json({
                  message: '장비 목록 조회',
                  equipment: []
          });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 장비 상세 조회
router.get('/:id', async (req, res) => {
    try {
          const { id } = req.params;
          res.json({
                  message: '장비 상세 조회',
                  equipmentId: id,
                  equipment: {}
          });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 장비 상태 조회
router.get('/:id/status', async (req, res) => {
    try {
          const { id } = req.params;
          res.json({
                  message: '장비 상태 조회',
                  equipmentId: id,
                  status: 'active'
          });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 장비 추가
router.post('/', async (req, res) => {
    try {
          const { serialNumber, model, customerId } = req.body;
          res.status(201).json({
                  message: '장비 추가 완료',
                  equipment: {
                            serialNumber,
                            model,
                            customerId
                  }
          });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 장비 정보 수정
router.put('/:id', async (req, res) => {
    try {
          const { id } = req.params;
          const { serialNumber, model, status } = req.body;
          res.json({
                  message: '장비 수정 완료',
                  equipmentId: id,
                  equipment: {
                            serialNumber,
                            model,
                            status
                  }
          });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

module.exports = router;
