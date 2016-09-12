<?php

class ApiAdapter {
    public function __construct($config) {
        $this->url = $config['backendUrl'];
    }

    public function getLatestPosts() {
        $handle = curl_init();

        curl_setopt($handle, CURLOPT_URL, $this->url . '/article');
        curl_setopt($handle, CURLOPT_HTTPGET, true);
        curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($handle);

        curl_close($handle);

        return json_decode($response, true);
    }
}

?>
