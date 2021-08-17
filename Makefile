#
# Makefile
#


all: node_modules js/icsObject.js js/ics_transform_bundle.js test 

js/icsObject.js: js/convert.js js/rotation.ics
	cd js && node convert.js > icsObject.js

js/ics_transform_bundle.js: js/ics_transform.js js/icsObject.js
	cd js && browserify ics_transform.js --standalone ics_transform -o ics_transform_bundle.js

test:
	cd js && node test.js

serve:
	bundle exec jekyll serve --baseurl=''

node_modules: package.json
	@echo updating node_modules
	npm install

rotation.zip:
	rm -rf rotation.zip _site
	bundle exec jekyll build --baseurl='rotation'
	mv _site rotation
	zip -r rotation.zip rotation
	rm -r rotation

zip: rotation.zip

clean:
	rm -rf js/ics_transform_bundle.js js/icsObject.js _site rotation.zip rotation


.PHONY: all clean test zip
