<?php

class Home {
	protected $articles = array();

	public function __construct($dal) {
		$this->articles = $dal->getArticles();
		print_r($this->articles);
	}
	
	public function render() {

?>
	<section class="latest">
		<h2>Fit for a King</h2>
		<p>Royal Fashions straddles the line between oldschool Dubai tailors and their modern competitors. They have branches in Karama, on Sheikh Zayed Road, and in some upper echelon hotels along the Jumeirah coast.</p>
	</section>
	
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
