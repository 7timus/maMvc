<?php
class Controller {

    function __construct() {
        $this->view = new View();
    }

    function loadModel($name) {

        $path = 'models/'.$name.'_model.php';
        if(file_exists($path)) {
            require $path;
            $modelName = ucfirst($name) .'_Model';
            $this->model = new $modelName();
        }
    }

}