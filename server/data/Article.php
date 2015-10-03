<?php

require_once('DALInterface.php');

class Article extends DALInterface {
	public function insertArticle($article) {
		$statement = $this->db->prepare('INSERT INTO article (url, title) VALUES (?, ?)');
		$statement->bind_param('ss', $article['url'], $article['title']);
		$statement->execute();

		$result = $statement->affected_rows;

		$statement->close();
		
		return $result;
	}
	
	public function getArticles($opts = []) {
		$result = $this->db->query('SELECT * FROM article ORDER BY date DESC');
		if ($result->num_rows) {
			return $result->fetch_array(MYSQLI_ASSOC);
		} else {
			return [];
		}
	}
}

?>
