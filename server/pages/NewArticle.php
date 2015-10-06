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
		$subheadingParam = $_POST['subheading'];
		$shortContentParam = $_POST['shortContent'];
		$contentParam = $_POST['content'];

		$result = $this->dal->article->insertArticle([
			'url'=>$this->getUrlSlug($urlParam),
			'title'=>$titleParam,
			'subheading'=>$subheadingParam,
			'shortContent'=>$shortContentParam,
			'content'=>$contentParam
		]);

		if ($result) {
?>
	<section class="new-article">
		<h2>New Article Submitted</h2>
	</section>
<?php
		} else {
?>
	<section class="new-article error">
		<h2>Article could not be added</h2>
	</section>
<?php
		}
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

	private function getUrlSlug($str) {
		$slug = mb_strtolower($str);
		$slug = preg_replace("/'/", '', $slug);
		$slug = preg_replace('/[^\pL\d]+/', '-', $slug);
		$slug = trim($slug, ' -');
		$slug = preg_replace('/-/', '-', $slug);

		return $slug;
	}
}

?>
