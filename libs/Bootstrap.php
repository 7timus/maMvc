<?php
class Bootstrap {

    function __construct()
    {

        $url = isset($_GET['url']) ? $_GET['url'] : null;  // trim slashes and explodes url
        $url = rtrim($url, '/');
        $url = explode('/',$url);
// IF NO URL - DEFAULT INDEX

        // skola
        if(($url[0])=='skola'){
            require "controllers/skola.php";
            $controller = new skola;
            return false;
        }
        // skola bveidsD

        if (empty($url[0])) {
            require "controllers/index.php";
            $controller = new Index();
            $controller->index();
           return false;
        }

        // SETTING CONTROLLER IF EXISTS

        $file = "controllers/" .$url[0].".php";
     
        if (file_exists($file)) {
            require $file;
        } else {
            $this::error();
            return false;
        }
      
        $controller = new $url[0];
        if(method_exists($controller,'loadModel')){
        $controller->loadModel($url[0]);
        }

        // CALLING METHODS
        if (isset($url[2])) {
            if (method_exists($controller, $url[1])) {
                $controller->{$url[1]}($url[2]);
            } else {
                $this::error();
            }
        } else {

            if (isset($url[1])) {

                if (method_exists($controller, $url[1])) {
                    $controller->{$url[1]}();
                } else {
                    $this::error();
                }
            } else {
                $controller->index();
            }
        }
    }

 private static function error() {
     require "controllers/error.php";
     $controller = new Error();
     $controller->index();
     return false;
}


}