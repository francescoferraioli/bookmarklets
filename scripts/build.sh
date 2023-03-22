rm -rf dist

mkdir dist

find ./src -type f | cut -d '/' -f2- | xargs -n 1 scripts/build-file.sh
