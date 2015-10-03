<?php

abstract class DALInterface {
	protected $db;

	public function __construct($db) {
		$this->db = $db;
	}
}

?>
