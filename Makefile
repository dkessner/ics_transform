#
# Makefile
#


all: js/icsObject.js js/ics_transform_bundle.js test

js/icsObject.js: js/convert.js js/rotation.ics
	cd js && node convert.js > icsObject.js

js/ics_transform_bundle.js: js/ics_transform.js js/icsObject.js
	cd js && browserify ics_transform.js --standalone ics_transform -o ics_transform_bundle.js

test:
	cd js && node test.js

serve:
	bundle exec jekyll serve --baseurl=''

clean:
	rm -rf js/ics_transform_bundle.js js/icsObject.js


.PHONY: all clean test
