<?php

class Article {
	public $url;
	public $title;
	public $subheading;
    public $topImage;
	public $shortContent;
	public $content;

	public function __construct($data) {
		if ($data) {
			$this->url = $data['url'];
			$this->title = $data['title'];
			$this->subheading = $data['subheading'];

			if (isset($data['topImage'])) {
				$this->topImage = $data['topImage'];
			} else if (isset($data['topimage'])) {
				$this->topImage = $data['topimage'];
			}

            // Handle different casing for shortContent
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
