echo $1 | cut -d '/' -f2- | sed 's/\//__/g' | sed 's/.js$/.hbs/'
