# -- load buildfiles --
include .buildfiles/index.mk

.buildfiles/index.mk:
	git submodule update --init --recursive

# scripts for zeit/now
.PHONY: build start

APP_EXAMPLE_FOLDER=$(APPLICATION_FOLDER)/example
APP_EXAMPLE_ENTRY=$(APPLICATION_FOLDER)/example/index.ts

STACK_RUNNER= \
	yarn concurrently \
		-n $(APP_EXAMPLE_FOLDER),$(LIBRARY_FOLDER) \
		"make ENTRY=$(APP_EXAMPLE_ENTRY)" \
		"make RECIPE=storybook"

# yarn build
build: setup
	@$(STACK_RUNNER)

# yarn start
start: setup
	@TASK=server $(STACK_RUNNER)

# yarn test
checks: setup
	@TASK=check yarn concurrently \
		-n jest,eslint,stylelint \
		"make RECIPE=jest" \
		"make RECIPE=eslint" \
		"make RECIPE=stylelint"
