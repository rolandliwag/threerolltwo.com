<?php

class Article {
	public $url;
	public $title;
	public $subheading;
	public $shortContent;
	public $content;
	
	public function __construct($data) {
		if ($data) {
			$this->url = $data['url'];
			$this->title = $data['title'];
			$this->subheading = $data['subheading'];
			if (isset($data['shortContent'])) {
				$this->shortContent = $data['shortContent'];
			} else if (isset($data['shortcontent'])) {
				$this->shortContent = $data['shortcontent'];
			} else {
				$this->shortContent = '';
			}
			$this->content = $data['content'];
		}
	}
}

?>
