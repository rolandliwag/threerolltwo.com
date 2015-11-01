function Article(data) {
	this.title = data.title;
	this.shortContent = data.shortContent || data.shortcontent;
	this.subHeading = data.subHeading || data.subheading;
	this.content = data.content;
	this.created = data.created;
}

module.exports = Article;