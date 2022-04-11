install: # разворачиыание и запуск 
	npm ci

brain-games: # разворачивание и запуск
	node bin/brain-games.js

brain-even: # разворачивание и запуск
	node bin/brain-even.js

publish: # публикация
	npm publish --dry-run

lint: # запуск
	npx eslint . 	