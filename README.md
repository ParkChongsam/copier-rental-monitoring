# 복사기 렌탈 모니터링 시스템

거래처별 복사기 장비의 실시간 상태를 추적하고, 소모품을 관리하는 웹 대시보드 시스템입니다.

## 주요 기능

- **실시간 모니터링**: 거래처별 장비의 동기화 상태 실시간 추적
- - **카운터 관리**: 흑백, 칼라 사용량 통계 및 히스토리
  - - **소모품 관리**: 토너(C/M/Y/K), 페더 재고 현황 및 부족 알림
    - - **거래처 관리**: 거래처별 장비 조회, 검색, 필터링
      - - **데이터 내보내기**: Excel 형식으로 데이터 다운로드
        - - **오류 추적**: 장비 동기화 오류 현황 및 오류코드 조회
         
          - ## 기술 스택
         
          - ### Backend
          - - Node.js + Express.js
            - - PostgreSQL / MongoDB
              - - RESTful API
                - - WebSocket (실시간 업데이트)
                 
                  - ### Frontend
                  - - React.js
                    - - Material-UI / Tailwind CSS
                      - - Chart.js (데이터 시각화)
                        - - Axios (HTTP 클라이언트)
                         
                          - ## 프로젝트 구조
                         
                          - ```
                            copier-rental-monitoring/
                            ├── backend/
                            │   ├── src/
                            │   │   ├── models/        # 데이터베이스 모델
                            │   │   ├── routes/        # API 라우트
                            │   │   ├── controllers/   # 비즈니스 로직
                            │   │   ├── middleware/    # 미들웨어
                            │   │   └── app.js         # Express 앱 설정
                            │   ├── package.json
                            │   └── .env
                            ├── frontend/
                            │   ├── src/
                            │   │   ├── components/    # React 컴포넌트
                            │   │   ├── pages/         # 페이지 컴포넌트
                            │   │   ├── services/      # API 서비스
                            │   │   ├── styles/        # CSS / 스타일
                            │   │   └── App.js
                            │   ├── package.json
                            │   └── public/
                            ├── docker-compose.yml     # Docker 설정
                            ├── .gitignore
                            └── README.md
                            ```

                            ## 설치 및 실행

                            ### 개발 환경 준비

                            ```bash
                            # 프로젝트 클론
                            git clone https://github.com/ParkChongsam/copier-rental-monitoring.git
                            cd copier-rental-monitoring

                            # 백엔드 설정
                            cd backend
                            npm install
                            cp .env.example .env
                            npm start

                            # 프론트엔드 설정 (새 터미널)
                            cd frontend
                            npm install
                            npm start
                            ```

                            ## API 엔드포인트

                            ### 거래처 (Customers)
                            - `GET /api/customers` - 거래처 목록 조회
                            - - `GET /api/customers/:id` - 거래처 상세 조회
                              - - `POST /api/customers` - 거래처 추가
                                - - `PUT /api/customers/:id` - 거래처 수정
                                  - - `DELETE /api/customers/:id` - 거래처 삭제
                                   
                                    - ### 장비 (Equipment)
                                    - - `GET /api/equipment` - 장비 목록 조회
                                      - - `GET /api/equipment/:id` - 장비 상세 조회
                                        - - `GET /api/equipment/:id/status` - 장비 상태 조회
                                          - - `POST /api/equipment` - 장비 추가
                                            - - `PUT /api/equipment/:id` - 장비 정보 수정
                                             
                                              - ### 카운터 (Counters)
                                              - - `GET /api/counters/:equipmentId` - 카운터 히스토리
                                                - - `POST /api/counters` - 카운터 데이터 저장
                                                  - - `GET /api/counters/:equipmentId/statistics` - 사용량 통계
                                                   
                                                    - ### 소모품 (Consumables)
                                                    - - `GET /api/consumables/:equipmentId` - 소모품 현황
                                                      - - `PUT /api/consumables/:id` - 소모품 정보 수정
                                                        - - `GET /api/consumables/alert` - 부족한 소모품 알림
                                                         
                                                          - ## 배포
                                                         
                                                          - ### Heroku 배포
                                                         
                                                          - ```bash
                                                            # Heroku CLI 설치
                                                            npm install -g heroku

                                                            # 로그인
                                                            heroku login

                                                            # 앱 생성
                                                            heroku create copier-rental-monitoring

                                                            # 환경 변수 설정
                                                            heroku config:set DATABASE_URL=...

                                                            # 배포
                                                            git push heroku main

                                                            # 데이터베이스 마이그레이션
                                                            heroku run npm run migrate
                                                            ```

                                                            ## 라이선스

                                                            MIT License

                                                            ## 개발자

                                                            ## 구현 현황
                                                         
                                                            ### 백엔드 (✅ 완료)
                                                            - ✅ Sequelize ORM으로 모든 데이터베이스 모델 구현
                                                            -   - Customer (고객)
                                                                -   - Equipment (장비)
                                                                    -   - Counter (사용량)
                                                                        -   - Consumable (소모품)
                                                                            - - ✅ CRUD 컨트롤러 모든 엔티티 구현
                                                                              - - ✅ RESTful API 라우트 완성
                                                                                - - ✅ 데이터베이스 마이그레이션 스크립트 작성
                                                                                  - - ✅ Express 서버 WebSocket 미들웨어 설정
                                                                                    - - ✅ Docker & Docker Compose 설정
                                                                                      - - ✅ Heroku Procfile 설정
                                                                                       
                                                                                        - ### 프론트엔드 (개발 예정)
                                                                                        - - ☐ React 컴포넌트 구조
                                                                                          - - ☐ Material-UI 기반 대시보드
                                                                                            - - ☐ 고객 관리 화면
                                                                                              - - ☐ 장비 추적 화면
                                                                                                - - ☐ 소모품 재고 관리
                                                                                                  - - ☐ 사용량 통계 차트
                                                                                                   
                                                                                                    - ## 로컬 개발 방법
                                                                                                   
                                                                                                    - ### 백엔드 시작
                                                                                                    - ```bash
                                                                                                      cd backend/backend
                                                                                                      npm install
                                                                                                      npm run migrate  # 데이터베이스 마이그레이션
                                                                                                      npm start
                                                                                                      ```
                                                         
                                                                                                      ### 프론트엔드 개발
                                                                                                      ```bash
                                                                                                      cd frontend
                                                                                                      npm install
                                                                                                      npm start
                                                                                                      ```
                                                         
                                                                                                      ### Docker로 전체 실행
                                                                                                      ```bash
                                                                                                      docker-compose up
                                                                                                      ```
                                                         
                                                                                                      ## 배포
                                                         
                                                                                                      ### Heroku 배포
                                                                                                      ```bash
                                                                                                      git push heroku main
                                                                                                      ```
                                                         
                                                                                                      배포 후 자동으로:
                                                                                                      1. 데이터베이스 마이그레이션 실행
                                                                                                      2. 2. 백엔드 서버 시작
                                                                                                         3. 3. 프론트엔드 정적 파일 서빙

                                                            Park Chong Sam
                                                            
