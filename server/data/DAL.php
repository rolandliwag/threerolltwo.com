<?php

require_once('access/ArticleAccess.php');

class DAL {
	private $db;

	public function __construct($dbConfig) {
		$this->db = new mysqli($dbConfig['hostname'], $dbConfig['username'], $dbConfig['password'], $dbConfig['database']);

		if ($this->db->connect_error) {
			throw('DB Error');
		}
		
		$this->article = new ArticleAccess($this->db);
	}
	
	public function __destruct() {
		return $this->db->close();
	}
}

?>
