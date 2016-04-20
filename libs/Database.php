<?php
class Database extends PDO {


 /*private $host = "us-cdbr-azure-southcentral-e.cloudapp.net";
 private $user = "b9429167a53588";
 private $pwd = "3683c461";
 private $db = "acsm_b7255d769eeec67";*/

    public function __construct() {
        try{
            $conn =  parent::__construct( DB_TYPE.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);
        }
        catch(Exception $e){
            die(print_r("No konekshun : ".$e));
        }

    public function __construct() {
        parent::__construct('mysql:host=localhost;dbname=mvc_tut','root','');

    }

    
}