<?php
class Database extends PDO {

 private $host = "localhost";
 private $user = "user name";
 private $pwd = "password";
 private $db = "registration";

    public function __construct() {
        try{
            $conn =  parent::__construct( "mysql:host=$this->host;dbname=$this->db", $this->user, $this->pwd);
            $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

        }
        catch(Exception $e){
            die(print_r($e));
        }
    }

    
}