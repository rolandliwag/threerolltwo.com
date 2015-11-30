var expect = require('unexpected'),
	sinon = require('sinon'),
	ArticleAccess = require('../../../lib/modules/DAL/ArticleAccess');
	
describe('DAL.article', function () {
	var db = {
			query: sinon.stub()
		}, 
		article = new ArticleAccess(db);
		
	it('should query with SELECT and return Promise with Article', function () {
		return expect
	});
});