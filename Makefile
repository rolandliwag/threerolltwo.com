DEFAULT:
	npm install

www-prod/%.html: $(shell find www -type f)
	rm -rf www-prod
	./node_modules/assetgraph-builder/bin/buildProduction --outroot www-prod --root www --define CONFIG=`./node_modules/oconf/bin/oconf --extract-option "app" config/production.cjson` www/$(@F)

.PHONY: database-setup
database-setup:
	PGPASSWORD=123456 psql -U threerolltwo_admin -h localhost -f sql/base.sql postgres -c \
		"SELECT pg_terminate_backend(pg_stat_activity.pid) \
		FROM pg_stat_activity \
		WHERE pg_stat_activity.datname = 'threerolltwo_com' \
		AND pid <> pg_backend_pid()"

	PGPASSWORD=123456 psql -U threerolltwo_admin -h localhost postgres -c \
		"DROP DATABASE IF EXISTS threerolltwo_com;"

	PGPASSWORD=123456 psql -U threerolltwo_admin -h localhost postgres -c \
		"CREATE DATABASE threerolltwo_com;"

	PGPASSWORD=123456 psql -U threerolltwo_admin -h localhost -f sql/base.sql threerolltwo_com

.PHONY: server-lint
server-lint:
	./node_modules/jshint/bin/jshint --config server/.jshintrc server

.PHONY: server-test
server-test:
	./node_modules/mocha/bin/mocha --recursive -R spec server/test

