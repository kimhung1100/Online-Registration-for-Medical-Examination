<?php
	/**
	* Database Connection
	*/
	class DBconnect {
		private $server = 'localhost:4306';
		private $dbname = 'online_medical';
		private $user = 'root';
		private $pass = '';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
        
	}
?>