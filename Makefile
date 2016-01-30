build: lint test dev dist

lint:
	./node_modules/.bin/eslint ./lib/**

test:
	./node_modules/.bin/mocha spec --compilers js:babel/register

dev:
	webpack

dist:
	WEBPACK_ENV=dist webpack

.PHONY: dist
