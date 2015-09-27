<?php

require_once('common/header.php');
require_once('common/footer.php');
require_once('home.php');
require_once('newArticle.php');

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
