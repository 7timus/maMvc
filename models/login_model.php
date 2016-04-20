<?php

class Login_Model extends Model {

  public function __construct() {
    parent::__construct();

  }

  public function run()
    {
        $ssth = $this->db->prepare("SELECT id FROM users WHERE
                    login = :login ");
      $ssth->execute(array(
            ':login' => $_POST['login']
           // ':password'=>$_POST['password']
      ));

      $data = $ssth->fetchAll();
      print_r($data);
    }

}