FILE_NAME=$(echo $1 | sed 's/\//__/g' | sed 's/.js$/.hbs/')
cp src/$1 dist/$FILE_NAME
