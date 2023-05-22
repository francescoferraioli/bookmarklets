set -e

JSON="{"
for i in ${@:2}
do
  if ! [[ $i =~ ^-- ]]; then
    continue
  fi

  if [[ $i =~ ^--- ]]; then
    continue
  fi

  KEY=$(echo "$i" | sed 's/^--//' | sed 's/=.*$//')

  VALUE="true"
  if [[ $i =~ = ]]; then
    VALUE=$(echo "$i" | sed 's/^.*=//')
  fi

  JSON="${JSON}
  \"$KEY\": \"$VALUE\","
done

FILE=$(echo "$1" | sed 's/^ts\///' | sed 's/\.ts$//')

JSON="${JSON}
\"file\": \"$FILE\"
}"

echo $JSON > ./ts/data.json

yarn --silent hbs -D ./ts/data.json -H ./hbs/helpers/*.js ./ts/template.ts.hbs -s > ./ts/template.ts
yarn --silent esbuild ./ts/template.ts --bundle | yarn --silent bookmarklet - | pbcopy

rm ./ts/data.json ./ts/template.ts
