set -e

echo "{
  \"func\": \"$1\",
  \"file\": \"${2:-$1}\"
}" > ./ts/data.json

yarn --silent hbs -D ./ts/data.json ./ts/template.ts.hbs -s > ./ts/template.ts
yarn --silent esbuild ./ts/template.ts --bundle | yarn --silent bookmarklet - | pbcopy

rm ./ts/data.json ./ts/template.ts
