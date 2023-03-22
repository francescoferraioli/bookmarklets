FILE_NAME=$(scripts/convert-filename.sh $1)
echo "function ffBookmarkletRun() {"
yarn --silent handlebars dist/$FILE_NAME
echo "}"
echo "ffBookmarkletRun();"
