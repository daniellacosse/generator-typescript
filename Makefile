COMMANDS=.buildfiles/main.mk .buildfiles/commands/*.mk

include $(COMMANDS)

default: $(PROXY_FOLDER)
	make $(PROJECT_DEPENDENCY_PROXY_TARGETS) ;\
	yarn parcel $(PACKAGE_ENTRY_POINT) --out-dir $(PROXY_FOLDER)/dist

$(COMMANDS):
	git submodule update --init --recursive
