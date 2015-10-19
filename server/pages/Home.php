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
	<article class="latest">
        <div class="image-wrapper">
            <?php echo $parsedown->text($latestArticle->topImage); ?>
        </div>
        <div class="text-wrapper">
            <header class="heading">
                <h1><?php echo "<a href='$latestArticle->url'>" . htmlspecialchars($latestArticle->title) . '</a>'; ?></h1>
                <p><?php echo $latestArticle->subheading; ?></p>
            </header>
            <section class="body"><?php echo $parsedown->text($latestArticle->shortContent); ?></section>
        </div>
	</article>
<?php
		}

		foreach($this->articles as $article) {
?>
	<article class="earlier">
		<h2><?php echo "<a href='$article->url'>" . htmlspecialchars($article->title) . '</a>'; ?></h2>
		<section><?php echo $parsedown->text($article->shortContent); ?></section>
	</article>
<?php
		}
?>

<?php
	}
}

?>
