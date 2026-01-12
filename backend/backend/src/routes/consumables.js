const express = require('express');
const router = express.Router();

// 소모품 현황 조회
router.get('/:equipmentId', async (req, res) => {
    try {
          const { equipmentId } = req.params;
          res.json({
                  message: '소모품 현황 조회',
                  equipmentId,
                  consumables: [
                    { type: 'toner_black', stock: 5, threshold: 2 },
                    { type: 'toner_cyan', stock: 3, threshold: 2 },
                    { type: 'toner_magenta', stock: 4, threshold: 2 },
                    { type: 'toner_yellow', stock: 2, threshold: 2 }
                          ]
          });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 소모품 정보 수정
router.put('/:id', async (req, res) => {
    try {
          const { id } = req.params;
          const { type, stock, threshold } = req.body;
          res.json({
                  message: '소모품 정보 수정 완료',
                  consumableId: id,
                  consumable: {
                            type,
                            stock,
                            threshold
                  }
          });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 부족한 소모품 알림
router.get('/alert/list', async (req, res) => {
    try {
          res.json({
                  message: '부족한 소모품 알림',
                  alerts: []
          });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

module.exports = router;
