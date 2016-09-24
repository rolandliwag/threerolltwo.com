import Promise from 'bluebird';

module.exports = function PageAccess(db) {
    this.getHome = () => {
        return Promise.resolve({
            title: 'Hello',
            articles: {
                url: 'first-article',
                text: 'First article text'
            }
        });
    };

    this.getPage = (url) => {
        return Promise.resolve({
            title: url,
            body: 'A page'
        });
    };
};
