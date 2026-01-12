const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const WebSocket = require('ws');
const http = require('http');

// 환경 변수 로드
dotenv.config();

// Express 앱 초기화
const app = express();
const server = http.createServer(app);

// WebSocket 서버 생성
const wss = new WebSocket.Server({ server });

// 미들웨어 설정
app.use(helmet());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트 (이후 구현 예정)
const customerRoutes = require('./routes/customers');
const equipmentRoutes = require('./routes/equipment');
const counterRoutes = require('./routes/counters');
const consumableRoutes = require('./routes/consumables');

app.use('/api/customers', customerRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/counters', counterRoutes);
app.use('/api/consumables', consumableRoutes);

// 기본 라우트
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running' });
});

// WebSocket 연결 처리
wss.on('connection', (ws) => {
    console.log('New client connected');

         ws.on('close', () => {
               console.log('Client disconnected');
         });

         ws.on('error', (error) => {
               console.error('WebSocket error:', error);
         });
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
          message: err.message,
          error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// 404 핸들링
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// 포트 설정
const PORT = process.env.PORT || 5000;

// 서버 시작
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server, wss };
