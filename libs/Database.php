<?php
class Database extends PDO {



    public function __construct()
    {
        try {
            $conn = parent::__construct(DB_TYPE . ":host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASSWORD);
        }
         catch (Exception $e) {
            die(print_r("No konekshun : " . $e));
        }

    }
    
}