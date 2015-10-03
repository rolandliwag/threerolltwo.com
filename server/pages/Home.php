<?php

class Home {
	protected $articles = array();

	public function __construct($dal) {
		$this->articles = $dal->article->getArticles();
	}
	
	public function render() {
		$latestArticle = array_shift($this->articles);

		if ($latestArticle) {
?>
	<section class="latest">
		<h1><?php echo $latestArticle['title']; ?></h1>
		<section><?php echo $latestArticle['subcontent']; ?></section>
	</section>
<?php			
		}

		foreach($this->articles as $article) {
			print_r($article);
		}
?>
	
	<article>
		<h2>Who shod JR?</h2>
		<p>Most men don't care about the shoes on their feet. Well, I do.</p>
	</article>

	<article>
		<h2>Summer Formality</h2>
		<p>One of the most absurd things about Dubai's summer is businessmen's insistence on wearing navy, charcoal, or black 2 piece suits. But what can you do when it's part of your office dress code?</p>
	</article>
<?php
	}
}

?>
