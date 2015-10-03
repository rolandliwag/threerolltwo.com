<?php

class Home {
	protected $articles = array();

	public function __construct($dal) {
		$this->articles = $dal->article->getArticles();
	}
	
	public function render() {
		$parsedown = new Parsedown();

		$latestArticle = array_shift($this->articles);

		if ($latestArticle) {
?>
	<section class="latest">
		<h1><?php echo htmlspecialchars($latestArticle->title); ?></h1>
		<section><?php echo $parsedown->text($latestArticle->shortContent); ?></section>
	</section>
<?php			
		}

		foreach($this->articles as $article) {
?>
	<article>
		<h2><?php echo htmlspecialchars($article->title); ?></h2>
		<section><?php echo $parsedown->text($article->shortContent); ?></section>
	</article>
<?php
		}
?>
	
<?php
	}
}

?>
