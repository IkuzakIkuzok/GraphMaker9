
# (c) 2017 Kazuki KOHZUKI

VERSION = 1.7.9

graphmaker:
	electron-packager . --platform=darwin,win32,linux --arch=ia32,x64,armv7l --electron-version=$(VERSION)
	7z -tgzip -mx=9 -mfb=128 gpaphmaker9-linux-armv7l.tar.gz ./gpaphmaker9-linux-armv7l
	7z -tgzip -mx=9 -mfb=128 gpaphmaker9-linux-ia32.tar.gz ./gpaphmaker9-linux-ia32
	7z -tgzip -mx=9 -mfb=128 gpaphmaker9-linux-x64.tar.gz ./gpaphmaker9-linux-x64
	7z -tzip gpaphmaker9-win32-ia32.zip gpaphmaker9-win32-ia32
	7z -tzip gpaphmaker9-win32-x64.zip gpaphmaker9-win32-x64
.PHONY: run
run:
	node_modules\.bin\electron .
