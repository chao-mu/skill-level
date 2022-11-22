migrate:
	GOOGLE_APPLICATION_CREDENTIALS=secrets/firebase-service-account.json npx fireway migrate
	
dev:
	npx quasar dev
	
deploy:
	npx firebase deploy
