FILE_NAME=$(scripts/convert-filename.sh $1)
echo "(async () => {"
yarn --silent handlebars dist/$FILE_NAME
echo "})()"
