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

FILE=$(echo "$1" | sed 's/^src\///' | sed 's/\.ts$//')

JSON="${JSON}
\"file\": \"$FILE\"
}"

echo $JSON > ./src/data.json

yarn --silent hbs -D ./src/data.json -H ./hbs/helpers/*.js ./src/template.ts.hbs -s > ./src/template.ts
yarn --silent esbuild ./src/template.ts --bundle | yarn --silent bookmarklet - | pbcopy

rm ./src/data.json ./src/template.ts
