<?php

class Error extends Controller {

    function __construct() {
        parent::__construct();
        echo"error controller ";
    }

    function index() {
        echo"error view ";
        $this->view->render('error/index');
    }

}