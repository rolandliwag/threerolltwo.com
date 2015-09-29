<?php

class DAL {
	private $db;

	public function __construct($dbConfig) {
		$this->db = new mysqli($dbConfig['hostname'], $dbConfig['username'], $dbConfig['password'], $dbConfig['database']);

		if ($this->db->connect_error) {
			throw('DB Error');
		}
	}
	
	public function getArticles() {
		return $this->db->query('SELECT * FROM articles ORDER BY date');
	}
}

?>
