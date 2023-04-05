FILE_NAME=$(scripts/convert-filename.sh $1)
echo "(async () => {"
echo $BM_PREFIX
yarn --silent handlebars dist/$FILE_NAME
echo $BM_SUFFIX
echo "})()"
