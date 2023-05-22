set -e

if [ `expr $# % 2` == 0 ]
then
  echo "Incorrect number of arguments. It needs to be odd"
	exit 1
fi

JSON="{"
for i in $(seq 2 2 $#)
do
  j=`expr $i + 1`
  JSON="${JSON}
  \"${!i}\": \"${!j}\","
done
JSON="${JSON}
\"file\": \"$FILE\"
}"

echo $JSON > ./ts/data.json

yarn --silent hbs -D ./ts/data.json -H ./hbs/helpers/*.js ./ts/template.ts.hbs -s > ./ts/template.ts
yarn --silent esbuild ./ts/template.ts --bundle | yarn --silent bookmarklet - | pbcopy

rm ./ts/data.json ./ts/template.ts
