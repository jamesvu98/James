.PHONY: *

build:
	npm run build

deploy-site: build
	scp -r build/client root@$(SERVER_IP):~/sites/personal-site