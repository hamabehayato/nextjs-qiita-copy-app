SEED_FOLDER := api-server/src/seed

dcb-dev:
	docker-compose build
dcu-dev:
	docker-compose up -d


front-ssh:
	docker exec -it nextjs_qiita_copy_app_frontend sh
backend-ssh:
	docker exec -it nextjs_qiita_copy_app_backend sh
db-ssh:
	docker exec -it nextjs_qiita_copy_app_db /bin/bash


# DB関連
# マイグレーション
db-setup: db-migrate db-seed

db-migrate:
	docker exec -it nextjs_qiita_copy_app_backend sh -c "npm run migrate"

db-seed:
	docker exec -it nextjs_qiita_copy_app_backend sh -c "npm run migrate -- --folder=$(SEED_FOLDER)"
