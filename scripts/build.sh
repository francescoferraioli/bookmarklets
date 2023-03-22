rm -rf dist

mkdir dist

find ./src -type f | cut -d '/' -f3- | xargs -n 1 scripts/build-file.sh
