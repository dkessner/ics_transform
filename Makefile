#
# Makefile
#


all: icsObject.js ics_transform_bundle.js


icsObject.js: convert.js rotation.ics
	node convert.js > icsObject.js


ics_transform_bundle.js: ics_transform.js
	browserify ics_transform.js -o ics_transform_bundle.js

clean:
	rm ics_transform_bundle.js icsObject.js

