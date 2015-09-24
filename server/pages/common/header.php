<?php

class Header {
	public function renderHeader() {
?>
<!doctype html>
<html>
	<head>
		<title>Latest Articles on 3/2.com</title>
		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css">
		<link rel="stylesheet/less" href="/less/style.less" type="text/css">
		<script data-env="development" src="/3rdparty/less.js" type="text/javascript"></script>	
	</head>
	<body>
		<header class="top">
			<nav>
				<h1><a href="/">threerolltwo.com</a></h1>
				<a href="/tailors">Tailors</a>
				<a href="/style">Style</a>
				<a href="/search">Search</a>
			</nav>
		</header>
		<main class="container">
<?php

	}
}



?>

