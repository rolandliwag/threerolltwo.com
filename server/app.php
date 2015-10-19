<?php

require('config.php');
require_once('../vendor/autoload.php');
require_once('data/DAL.php');
require_once('pages/Router.php');

$dal = new DAL($dbConfig);
$router = new Router($dal);

?>
