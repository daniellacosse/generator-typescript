SHELL:=/bin/bash
GIT:=$(which git)
BREW:=$(which brew)

BREW_URL=https://raw.githubusercontent.com/Homebrew/install/master/install

SOURCE_FOLDER=source
SOURCE_FOLDERS=$(find $(SOURCE_FOLDER) -type d)
SOURCE_FILES=$(find $(SOURCE_FOLDER) -type f -name '*')

BUILD_FLAGS=$(--target node --no-minify --public-url $$PWD/dist)
INDEX_BUILD_POINT=$(SOURCE_FOLDER)/index.ts $(BUILD_FLAGS)
TEST_BUILD_POINT=$(SOURCE_FOLDER)/**/__tests__ $(BUILD_FLAGS)

VERSION=$(cat package.json | jq -r '.version')
IMAGE_REGISTRY=gcr.io/<%= gcpProjectID %>/<%= title %>

# -- commands --
.PHONY: start \
  lint \
	test \
	code \
	watch \
	image \
	patch \
	release \
	clear-all \
	clear-cache \
	clear-yarn \
	clear-docs

start: dist/index.js
	node dist/index.js

lint: # only lints files that were changed since last commit
	changes=$$(git diff --name-only --staged | egrep '\.ts') ;\
	if [[ $$changes ]] ;\
		then yarn eslint $$changes ;\
	fi

test: dist/source
	yarn ava

watch:
	yarn concurrently \
		'yarn parcel watch $(TEST_BUILD_POINT)' \
		'yarn ava --watch'

code: .vscode/extensions.json
	code . ;\
	make watch

patch: documentation
	yarn version --patch -m "%s [ci skip]"

image: yarn.lock package.json
	docker build . -t <%= title %>:$(VERSION)

release: image
	gcloud auth configure-docker ;\
	gcloud docker push ${IMAGE_REGISTRY}:$(VERSION)

clear-all: clear-yarn clear-cache clear-docs

clear-cache:
	rm -rf dist ;\
	rm -rf .cache

clear-yarn:
	rm -rf node_modules ;\
	rm yarn.lock

clear-docs:
	rm -rf documentation

# -- files --
dist/index.js: yarn.lock $(SOURCE_FILES) $(SOURCE_FOLDERS)
	yarn parcel build $(INDEX_BUILD_POINT)
dist/source: yarn.lock $(SOURCE_FILES) $(SOURCE_FOLDERS)
	yarn parcel build $(TEST_BUILD_POINT)
documentation: yarn.lock $(SOURCE_FILES) $(SOURCE_FOLDERS)
	yarn typedoc
.vscode/extensions.json: Brewfile
	cat .vscode/extensions.json |\
	jq -r '.recommendations | .[]' |\
	xargs -L 1 code --install-extension
yarn.lock: Brewfile
	yarn install
Brewfile: $(GIT) $(BREW)
	brew bundle

# -- tools --
$(GIT):
	xcode-select --install ;\

	until [ "$$(which git)" ] ;\ 
		sleep 1 ;\
	done

$(BREW):
	/usr/bin/ruby -e $$(curl -fsSL $(BREW_URL))
