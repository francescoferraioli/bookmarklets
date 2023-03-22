yarn --silent build
FILE_NAME=$(scripts/convert-filename.sh $1)
scripts/compose.sh $FILE_NAME | yarn --silent bookmarklet - | pbcopy
