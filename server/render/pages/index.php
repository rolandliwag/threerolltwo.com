<!DOCTYPE html>
<html>
<head>
<?php 

require('../config.php');
require('../lib/ApiAdapter.php');
require('../lib/HomePage.php')

$config = new Config();
$apiAdapter = new ApiAdapter();
$page = new HomePage($config, $apiAdapter);
$page->load();

?>
    <title><?php echo $page->getTitle(); ?></title>
    <?php echo '<link rel="stylesheet" type="text/css" href="' . $page->getStylesheetHref() . "/>'; ?>
</head>
<body>
    <?php echo $page->getHeader(); ?>
    <?php echo $page->getBody(); ?>
    <?php echo $page->getFooter(); ?>
</body>
</html>
