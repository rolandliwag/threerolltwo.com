<?php

require_once('DALInterface.php');
require_once('data/models/Article.php');

class ArticleAccess extends DALInterface {
	public function insertArticle($data) {
		$article = new Article($data);

		$statement = $this->db->prepare('INSERT INTO article (url, title, subheading, shortcontent, content) VALUES (?, ?, ?, ?, ?)');
		$statement->bind_param('sssss', $article->url, $article->title,
				$article->subheading, $article->shortContent, $article->content);
		$statement->execute();

		$result = $statement->affected_rows;

		$statement->close();

		return $result === 1;
	}

	public function getArticles($opts = []) {
		$result = $this->db->query('SELECT * FROM article ORDER BY date DESC');
		$articles = [];
		if ($result->num_rows) {
			$rows = $result->fetch_all(MYSQLI_ASSOC);
			forEach($rows as $row) {
				array_push($articles, new Article($row));
			}
		}

		return $articles;
	}

    public function getArticleByUrl($url) {
        $statement = $this->db->prepare('SELECT * FROM article WHERE url = ?');
        $statement->bind_param('s', $url);
        $statement->execute();
        $result = $statement->get_result();
        $statement->close();

        return new Article($result->fetch_array(MYSQLI_ASSOC));
    }
}

?>
