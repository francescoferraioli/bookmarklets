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

mkdir -p dist
echo $JSON > ./dist/data.json

yarn --silent hbs -D ./dist/data.json -H ./hbs/helpers/*.js ./src/template.ts.hbs -s > ./dist/template.ts
yarn --silent esbuild ./dist/template.ts --bundle | yarn --silent bookmarklet - | pbcopy
