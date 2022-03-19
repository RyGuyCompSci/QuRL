build:
	npm install
	npm run build

run:
	$(MAKE) build
	npm run watch

clean:
	rm -rf ./build

clean-all:
	rm -rf ./build
	rm -rf ./node_modules
