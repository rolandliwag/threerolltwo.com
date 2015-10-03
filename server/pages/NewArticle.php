<?php

class NewArticle {
	private $dal;
	private $articles = array();
	private $renderPath = '';

	public function __construct($dal) {
		$this->dal = $dal;

		if (isset($_POST['url']) && isset($_POST['title']) && isset($_POST['subheading']) &&
				isset($_POST['shortContent']) && isset($_POST['content'])) {
			$this->renderPath = 'POST';
		} else {
			$this->renderPath = 'GET';
		}
	}
	
	public function render() {
		if ($this->renderPath === 'POST') {
			$this->renderPost();
		} else {
			$this->renderGet();
		}
	}

	public function renderPost() {
		$urlParam = $_POST['url'];
		$titleParam = $_POST['title'];
		
		$this->dal->article->insertArticle([
			'url'=>$urlParam,
			'title'=>$titleParam
		]);
?>

	<section class="new-article">
		<h2>New Article Submitted</h2>
	</section>

<?php
	}
	
	public function renderGet() {

?>
	<section class="new-article">
		<form class="editor" action="/new" method="post">
			<input type="text" name="url" placeholder="URL"/>
			<input type="text" name="title" placeholder="Title"/>
			<input type="text" name="subheading" placeholder="Subheading"/>
			<textarea name="shortContent" placeholder="Enter short content markdown here."></textarea>
			<textarea name="content" placeholder="Enter full content markdown here."></textarea>
			<input type="submit" value="Preview"/>
			<input type="submit" value="Submit"/>
		</form>
	</section>
<?php
	}
}

?>
