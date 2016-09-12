<?php

require(dirname(__FILE__) . '/BasePage.php');

class HomePage extends BasePage {
    public function __construct($config, $backend) {
        $this->config = $config;
        $this->backend = $backend;
    }

    public function load() {

    }

    public function getTitle() {
        return $this->config['title'];
    }

    public function getHeader() {
        
    }

    public function getBody() {
        $posts = $this->backend->getLatestPosts();

        foreach($posts as $post) {
            print_r($post);
        }
    }

    public function getFooter() {

    }
}

?>
