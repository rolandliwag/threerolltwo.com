var expect = require('unexpected'),
	sinon = require('sinon'),
	ArticleAccess = require('../../../lib/modules/DAL/ArticleAccess'),
    Article = require('../../../lib/modules/DAL/ArticleModel');

describe('DAL.article', function () {
	var db = {
			query: sinon.stub()
		},
		article = new ArticleAccess(db);

    beforeEach(() => {
        db.query.reset();
    });

    describe('getLatestInShort', function () {
        it('should query with SELECT and return Articles', () => {
            db.query.returns(Promise.resolve({
                rows: [{url: 'article1'}, {url: 'article2'}]
            }));

            return expect(article.getLatestInShort, 'called with', [5]).then((result) => {
                expect(result, 'to be an array').and('to have items satisfying', 'to be an', Article);
            });
        });
    });
});
