function Article(data) {
    this.url = data.url;
	this.title = data.title;
	this.subHeading = data.subHeading || data.subheading;
    this.topImageAlt = data.topImageAlt || data.top_image_alt;
    this.topImageSrc = data.topImageSrc || data.top_image_src;
	this.shortContent = data.shortContent || data.short_content;
	this.content = data.content;
	this.created = data.created_date;
}

Article.prototype.isValid = function () {
    return true;
};

module.exports = Article;
