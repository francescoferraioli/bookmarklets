PARTIALS=""
for file in dist/*.hbs
do
  PARTIALS="$PARTIALS -P ./$file"
done
yarn --silent hbs -s $PARTIALS ./$@
