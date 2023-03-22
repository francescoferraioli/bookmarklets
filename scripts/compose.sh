FILE_NAME=$(scripts/convert-filename.sh $1)
echo "(() => {"
yarn --silent handlebars dist/$FILE_NAME
echo "})()"
