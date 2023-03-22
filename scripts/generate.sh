yarn --silent build
FILE_NAME=$(scripts/convert-filename.sh $1)
yarn --silent handlebars dist/$FILE_NAME | yarn --silent bookmarklet - | pbcopy
