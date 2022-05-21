#!/usr/bin/env bash
set -eu
trap 'echo Error at Line $LINENO "$@"' ERR


for x in build/static/js/main.*.js;do test -e "$x" && mv "$x" "build/static/js/main.js";done
for x in build/static/js/main.*.js.map;do test -e "$x" && mv "$x" "build/static/js/main.js.map";done
for x in build/static/js/main.*.js.LICENSE.txt;do test -e "$x" && mv "$x" "build/static/js/main.js.LICENSE.txt";done
for x in build/static/css/main.*.css;do test -e "$x" && mv "$x" "build/static/css/main.css";done
for x in build/static/css/main.*.css.map;do test -e "$x" && mv "$x" "build/static/css/main.css.map";done

rm -rf ../../force-app/main/default/staticresources/HelloWorld2
cp -RT build ../../force-app/main/default/staticresources/HelloWorld2
