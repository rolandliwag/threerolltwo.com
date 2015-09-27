<?php

class NewArticle {
	protected $articles = array();

	public function __construct($dal) {
	}
	
	public function render() {

?>
	<section class="new-article">
		<form class="editor" action="/new">
			<input type="text" name="url" placeholder="URL"/>
			<input type="text" name="title" placeholder="Title"/>
			<input type="text" name="subheading" placeholder="Subheading"/>
			<textarea name="shortContent" placeholder="Enter short content markdown here."></textarea>
			<textarea name="content" placeholder="Enter full content markdown here."></textarea>
		</form>
	</section>
<?php
	}
}

?>
