
# (c) 2017 Kazuki KOHZUKI

VERSION = 1.7.9
SEPARATOR = /

graphmaker:
	electron-packager . --platform=darwin,win32,linux --arch=ia32,x64,armv7l --electron-version=$(VERSION)

.PHONY: run
run:
	node_modules$(SEPARATOR).bin$(SEPARATOR)electron .
