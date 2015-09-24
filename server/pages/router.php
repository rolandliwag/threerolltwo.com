<?php

require_once('common/header.php');
require_once('common/footer.php');
require_once('home.php');

$routes = [
	'home'=>'Home'
];

$route = $_GET['route'];
$pageNumber = isset($_GET['page']) ? $_GET['page'] : '';

$header = new Header();
$page = new $routes[$route];
$footer = new Footer();

$header->renderHeader($route, $pageNumber);
$page->render($pageNumber);
$footer->renderFooter();

?>
