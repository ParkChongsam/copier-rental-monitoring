const express = require('express');
const router = express.Router();

// TODO: DB 모델 임포트
// const Customer = require('../models/Customer');

// 거래처 목록 조회
router.get('/', async (req, res) => {
    try {
          // TODO: 데이터베이스에서 거래처 목록 조회
      res.json({
              message: '거래처 목록 조회',
              customers: []
      });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 거래처 상세 조회
router.get('/:id', async (req, res) => {
    try {
          const { id } = req.params;
          // TODO: 데이터베이스에서 거래처 조회
      res.json({
              message: '거래처 상세 조회',
              customerId: id,
              customer: {}
      });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 거래처 추가
router.post('/', async (req, res) => {
    try {
          const { name, contact, phone, email } = req.body;
          // TODO: 데이터베이스에 거래처 추가
      res.status(201).json({
              message: '거래처 추가 완료',
              customer: {
                        name,
                        contact,
                        phone,
                        email
              }
      });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 거래처 수정
router.put('/:id', async (req, res) => {
    try {
          const { id } = req.params;
          const { name, contact, phone, email } = req.body;
          // TODO: 데이터베이스에서 거래처 정보 수정
      res.json({
              message: '거래처 수정 완료',
              customerId: id,
              customer: {
                        name,
                        contact,
                        phone,
                        email
              }
      });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

// 거래처 삭제
router.delete('/:id', async (req, res) => {
    try {
          const { id } = req.params;
          // TODO: 데이터베이스에서 거래처 삭제
      res.json({
              message: '거래처 삭제 완료',
              customerId: id
      });
    } catch (error) {
          res.status(500).json({ error: error.message });
    }
});

module.exports = router;
