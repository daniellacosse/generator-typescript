COMMANDS=.buildfiles/main.mk .buildfiles/commands/*.mk

include $(COMMANDS)

default: $(PROXY_FOLDER)
	make $(PACKAGE_BUILD)

$(COMMANDS):
	git submodule update --init --recursive
