<?php
class Database extends PDO {

 private $host = "us-cdbr-azure-southcentral-e.cloudapp.net";
 private $user = "b9429167a53588";
 private $pwd = "3683c461";
 private $db = "acsm_b7255d769eeec67";

    public function __construct() {
        try{
            $conn =  parent::__construct( "mysql:host=$this->host;dbname=$this->db", $this->user, $this->pwd);
        }
        catch(Exception $e){
            die(print_r("No konekshun : ".$e));
        }
    }

    
}