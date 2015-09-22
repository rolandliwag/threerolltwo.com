<?php

require_once('common/header.php');
require_once('home.php');

$routes = [
	'home'=>'Home'
];

$pageRoute = $_GET['route'];

$header = new Header();
$page = new $routes[$pageRoute];

$header->renderHeader($pageRoute);
$page->render();

?>
