BUILDFILES=.buildfiles

include $(BUILDFILES)/main.mk $(BUILDFILES)/commands/*.mk

default: $(PROXY_FOLDER)
	make $(PACKAGE_BUILD)

$(BUILDFILES):
	git clone git@github.com:daniellacosse/typescript-buildfiles.git $(BUILDFILES)

$(BUILDFILES)/main.mk $(BUILDFILES)/commands/*.mk: $(BUILDFILES)
	cd $(BUILDFILES) ;\
	git pull origin master ;\
	cd ..
