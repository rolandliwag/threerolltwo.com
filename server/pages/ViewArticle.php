<?php

class ViewArticle {
    private $dal;

    public function __construct($dal) {
        $this->dal = $dal;
    }

    public function render($route, $page) {
		$parsedown = new Parsedown();
        $article = $this->dal->article->getArticleByUrl($route);
?>
    <article>
		<h2><?php echo htmlspecialchars($article->title); ?></h2>
		<section><?php echo $parsedown->text($article->content); ?></section>
	</article>
<?php
    }
}

?>
