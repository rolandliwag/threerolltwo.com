CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;

CREATE TABLE email (email CITEXT UNIQUE PRIMARY KEY, join_date TIMESTAMP DEFAULT now());

CREATE TABLE article (url VARCHAR(255) PRIMARY KEY, title VARCHAR(255), subheading VARCHAR(255), top_image VARCHAR(255), short_content TEXT, content TEXT, created_date TIMESTAMP DEFAULT NOW());

CREATE TABLE article_tag (url VARCHAR(255), tag VARCHAR(30));
