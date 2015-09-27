<?php

require('config.php');
require_once('data/dal.php');
require_once('pages/router.php');

$dal = new DAL($dbConfig);
$router = new Router($dal);


?>
