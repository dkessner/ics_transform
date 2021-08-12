#
# Makefile
#


all: icsObject.js ics_transform_bundle.js test


icsObject.js: convert.js rotation.ics
	node convert.js > icsObject.js


ics_transform_bundle.js: ics_transform.js icsObject.js
	browserify ics_transform.js --standalone ics_transform -o ics_transform_bundle.js

test:
	node test.js

clean:
	rm -rf ics_transform_bundle.js icsObject.js


.PHONY: all clean test
