DEFAULT:
	npm install

www-prod/%.html: $(shell find www -type f)
	./node_modules/assetgraph-builder/bin/buildProduction --outroot www-prod --root www --define CONFIG=`./node_modules/oconf/bin/oconf --extract-option "app" config/production.cjson` www/$(@F)

database-setup:
	psql -U threerolltwo_admin -h localhost -f sql/base.sql threerolltwo_com
