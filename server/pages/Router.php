<?php

require_once('common/Header.php');
require_once('common/Footer.php');

require_once('ViewArticle.php');
require_once('Home.php');
require_once('NewArticle.php');

class Router {
	private $routes = [
		'home'=>'Home',
		'new'=>'NewArticle',
		'view'=>'ViewArticle'
	];

	public function __construct($dal) {
		$routeParam = isset($_GET['route']) ? $_GET['route'] : 'home';
		$pageNumberParam = isset($_GET['page']) ? $_GET['page'] : '';

		// Default to ViewArticle route to handle the SEO-friendly URLs.
		$Route = @$this->routes[$routeParam] ?: 'ViewArticle';

		$header = new Header($dal);
		$page = new $Route($dal);
		$footer = new Footer($dal);

		$header->renderHeader($routeParam, $pageNumberParam);
		$page->render($routeParam, $pageNumberParam);
		$footer->renderFooter();
	}
}

?>
