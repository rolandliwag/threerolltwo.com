<?php

require_once('common/Header.php');
require_once('common/Footer.php');
require_once('Home.php');
require_once('NewArticle.php');

class Router {
	private $routes = [
		'home'=>'Home',
		'new'=>'NewArticle'
	];

	public function __construct($dal) {
		$route = isset($_GET['route']) ? $_GET['route'] : 'home';
		$pageNumber = isset($_GET['page']) ? $_GET['page'] : '';

		$header = new Header($dal);
		$page = new $this->routes[$route]($dal);
		$footer = new Footer($dal);

		$header->renderHeader($route, $pageNumber);
		$page->render($pageNumber);
		$footer->renderFooter();
	}
}

?>
